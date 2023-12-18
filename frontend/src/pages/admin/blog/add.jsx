import { Modal } from "flowbite-react";
import { useState } from "react";
import Api from "app/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useImageUpload } from "hooks/use-image-upload";
import { toast } from "react-toastify";
import { useAuth } from "hooks/use-auth";

export default function AddPage({ fetchData }) {

    const [openModal, setOpenModal] = useState(false);

    const [status, setStatus] = useState({
        isError: false,
        errorMessage: "",
        isSubmit: false,
    });

    const navigate = useNavigate();
    const { image, previewUrl, handleImageChange } = useImageUpload();

    const uploadThumbnail = async (id) => {

        if (!image) {
            return false;
        }

        const formData = new FormData();
        formData.append('image', image);

        const resData = await Api.Post(`/blog/upload-thumbnail/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        if (!resData.isSuccess) {
            toast.error("Đã có lỗi xảy ra");
            return false;
        }

        return true;
    }

    const { user } = useAuth();

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            content: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            description: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
            content: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
        }),
        onSubmit: async (values, { resetForm }) => {
            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            const data = {
                title: values.title,
                description: values.description,
                content: values.content,
                userId: user.userId,
            }

            const resData = await Api.Post("/blog", data);
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

            await uploadThumbnail(resData.response.id);

            setStatus(prevState => ({
                isError: false,
                errorMessage: resData.response.message,
                isSubmit: false,
            }));

            fetchData();

            toast.success("Thêm thành công");
            resetForm();
            setOpenModal(false);
        },
    })

    return (
        <div>
            {/* Modal toggle */}
            <div className="flex justify-center m-5">
                <button
                    onClick={() => setOpenModal(true)}
                    className="w-full md:w-auto block text-white w-24 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Thêm
                </button>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="pb-4">Thêm bài viết</Modal.Header>
                <Modal.Body className="pt-2">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 mb-6 sm:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiêu đề</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    autoComplete="off"
                                    spellCheck="false"
                                    value={formik.values.title || ''}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.title && formik.touched.title && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.title}
                                    </p>
                                )}
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
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ảnh bìa</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nội dung</label>
                            <textarea
                                rows="6"
                                type="text"
                                name="content"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                autoComplete="off"
                                spellCheck="false"
                                value={formik.values.content || ''}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.content && formik.touched.content && (
                                <p className="mt-1 ml-1 text-red-600 text-sm">
                                    {formik.errors.content}
                                </p>
                            )}
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