import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import Api from "app/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useImageUpload } from "hooks/use-image-upload";
import { toast } from "react-toastify";
import { API_URL } from "app/config";

export default function UpdatePage({ id, fetchData }) {

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get("/category");

                const newData = res.response.map((obj, index) => {
                    return {
                        id: obj.id,
                        name: obj.name,
                    }
                })

                setCategories(newData);
            })();

            (async () => {
                const res = await Api.Get("/brand");

                let newData = res.response.map((obj, index) => {
                    return {
                        id: obj.id,
                        name: obj.name,
                    }
                })

                setBrands(newData);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const [openModal, setOpenModal] = useState(false);

    const [status, setStatus] = useState({
        isError: false,
        errorMessage: "",
        isSubmit: false,
    });

    const navigate = useNavigate();
    const { image, previewUrl, setImageFromUrl, handleImageChange } = useImageUpload();

    const uploadImage = async (id) => {

        if (!image) {
            return false;
        }

        const formData = new FormData();
        formData.append('image', image);

        const resData = await Api.Post(`/product/upload-image/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        if (!resData.isSuccess) {
            toast.error("Đã có lỗi xảy ra");
            return false;
        }

        return true;
    }

    const [currProduct, setCurrProduct] = useState({
        id: 0,
        categoryId: 0,
        brandId: 0,
        name: "",
        price: 0,
        description: "",
        colors: [],
        sizes: [],
    });

    const updateData = async () => {
        const res = await Api.Get(`/product/${id}`);

        if (!res.isSuccess) {
            toast.error("ID không tồn tại");
            setOpenModal(false);
        }

        setCurrProduct({
            id: res.response.id,
            name: res.response.name,
            imageUrl: res.response.imageUrl,
            price: res.response.price,
            description: res.response.description,
            categoryId: res.response.categoryId,
            brandId: res.response.brandId,
            colors: res.response.colors,
            sizes: res.response.sizes,
        });

        //console.log(currProduct);

        setImageFromUrl(`${API_URL}${res.response.imageUrl}`);
    }

    const handleOpenButton = async () => {
        setOpenModal(true);
        await updateData();
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            categoryId: currProduct.categoryId,
            brandId: currProduct.brandId,
            name: currProduct.name,
            price: currProduct.price,
            description: currProduct.description,
            colors: currProduct.colors,
            sizes: currProduct.sizes,
        },
        validationSchema: Yup.object({
            categoryId: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
            brandId: Yup.string(),
            name: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            price: Yup.number()
                .required("Đây là dữ liệu bắt buộc")
                .typeError("Dữ liệu phải là một số"),
            description: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
            colors: Yup.array(),
            sizes: Yup.array(),
        }),
        onSubmit: async (values, { resetForm }) => {
            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            const data = {
                categoryId: parseInt(values.categoryId),
                brandId: parseInt(values.brandId),
                name: values.name,
                price: parseInt(values.price),
                description: values.description,
                colors: values.colors,
                sizes: values.sizes,
            }

            //console.log(data);

            const resData = await Api.Patch(`/product/${id}`, data);
            if (!resData.isSuccess) {
                setStatus(prevState => ({
                    isError: true,
                    errorMessage: resData.response.message,
                    isSubmit: false,
                }));

                console.log(status);
                toast.error("Đã có lỗi xảy ra");
                setOpenModal(false);

                return;
            }

            await uploadImage(resData.response.id);

            setStatus(prevState => ({
                isError: false,
                errorMessage: resData.response.message,
                isSubmit: false,
            }));

            fetchData();

            toast.success("Sửa thành công");
            resetForm();
            setOpenModal(false);
        },
    })

    return (
        <div>
            {/* Modal toggle */}
            <div className="flex">
                <button
                    onClick={() => handleOpenButton()}
                    className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 text-center " type="button">
                    Sửa
                </button>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="pb-4">Sửa sản phẩm</Modal.Header>
                <Modal.Body className="pt-2">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 mb-6 sm:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loại hàng</label>
                                <select
                                    name="categoryId"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    value={formik.values.categoryId || 0}
                                    onChange={formik.handleChange}
                                >
                                    {
                                        categories.map((obj, index) => (
                                            <option key={index} value={obj.id}>
                                                {obj.name}
                                            </option>
                                        ))
                                    }
                                </select>
                                {formik.errors.categoryId && formik.touched.categoryId && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.categoryId}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thương hiệu</label>
                                <select
                                    name="brandId"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    value={formik.values.brandId || 0}
                                    onChange={formik.handleChange}
                                >
                                    {
                                        brands.map((obj, index) => (
                                            <option key={index} value={obj.id}>
                                                {obj.name}
                                            </option>
                                        ))
                                    }
                                </select>
                                {formik.errors.brandId && formik.touched.brandId && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.brandId}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    autoComplete="off"
                                    spellCheck="false"
                                    value={formik.values.name || ''}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá</label>
                                <input
                                    type="text"
                                    name="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    autoComplete="off"
                                    spellCheck="false"
                                    value={formik.values.price || ''}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.price && formik.touched.price && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.price}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Màu sắc</label>
                                <select
                                    name="colors"
                                    multiple
                                    size="5"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    onChange={formik.handleChange}
                                >
                                    <option>Xanh</option>
                                    <option>Đỏ</option>
                                    <option>Tím</option>
                                    <option>Vàng</option>
                                    <option>Hồng</option>
                                    <option>Đen</option>
                                    <option>Trắng</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kích cỡ</label>
                                <select
                                    name="sizes"
                                    multiple
                                    size="5"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    onChange={formik.handleChange}
                                >
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    autoComplete="off"
                                    spellCheck="false"
                                    value={formik.values.description || ''}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.description && formik.touched.description && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.description}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hình ảnh</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <button
                            disabled={status.isSubmit}
                            type="submit"
                            className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            Xác nhận
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}