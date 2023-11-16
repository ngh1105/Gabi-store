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

    const [openModal, setOpenModal] = useState(false);

    const [status, setStatus] = useState({
        isError: false,
        errorMessage: "",
        isSubmit: false,
    });

    const navigate = useNavigate();
    const { image, previewUrl, setImageFromUrl, handleImageChange } = useImageUpload();

    const [currCategogry, setCurrCategory] = useState({
        id: "",
        name: "",
    });

    useEffect(() => {
        (async () => {
            const res = await Api.Get(`/category/${id}`);

            if (!res.isSuccess) {
                toast.error("ID không tồn tại");
                setOpenModal(false);
            }

            setCurrCategory({
                id: res.response.id,
                name: res.response.name,
                imageUrl: res.response.imageUrl,
            });

            setImageFromUrl(`${API_URL}${res.response.imageUrl}`);
        })()
    }, [])

    const uploadImage = async (id) => {

        if (!image) {
            return false;
        }

        const formData = new FormData();
        formData.append('image', image);

        const resData = await Api.Post(`/category/upload-image/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        if (!resData.isSuccess) {
            toast.error("Đã có lỗi xảy ra");
            return false;
        }

        return true;
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: currCategogry.name,
            imageUrl: currCategogry.imageUrl,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
        }),
        onSubmit: async (values) => {
            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            const data = {
                name: values.name,
            }

            const resData = await Api.Patch(`/category/${id}`, data);
            if (!resData.isSuccess) {
                setStatus(prevState => ({
                    isError: true,
                    errorMessage: resData.response.message,
                    isSubmit: false,
                }));

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
            setOpenModal(false);
        },
    })

    return (
        <div>
            {/* Modal toggle */}
            <div className="flex">
                <button
                    onClick={() => setOpenModal(true)}
                    className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 text-center " type="button">
                    Sửa
                </button>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="pb-4">Sửa loại hàng</Modal.Header>
                <Modal.Body className="pt-2">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 mb-6 sm:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên loại hàng</label>
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