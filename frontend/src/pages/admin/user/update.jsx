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

    const [currUser, setCurrUser] = useState({
        id: "",
        email: "",
        fullName: "",
        role: "",
        avatarUrl: "",
    });

    const updateData = async () => {
        const res = await Api.Get(`/user/${id}`);

        if (!res.isSuccess) {
            toast.error("ID không tồn tại");
            setOpenModal(false);
        }

        setCurrUser({
            id: res.response.id,
            email: res.response.email,
            fullName: res.response.fullName,
            role: res.response.role,
            avatarUrl: res.response.avatarUrl,
        });

        //console.log(res.response);

        setImageFromUrl(`${API_URL}${res.response.imageUrl}`);
    }

    const uploadAvatar = async (id) => {

        if (!image) {
            return false;
        }

        const formData = new FormData();
        formData.append('image', image);

        const resData = await Api.Post(`/user/upload-avatar/${id}`, formData, {
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
            email: currUser.email,
            password: currUser.password,
            fullName: currUser.fullName,
            role: currUser.role,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .email()
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            password: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
            fullName: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            role: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
        }),
        onSubmit: async (values, { resetForm }) => {
            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            const data = {
                email: values.email,
                password: values.password,
                fullName: values.fullName,
                role: values.role,
            }

            const resData = await Api.Patch(`/user/${id}`, data);
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

            await uploadAvatar(resData.response.id);

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

    const handleOpenButton = async () => {
        setOpenModal(true);
        await updateData();
    }

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
                <Modal.Header className="pb-4">Thêm người dùng</Modal.Header>
                <Modal.Body className="pt-2">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 mb-6 sm:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    autoComplete="off"
                                    spellCheck="false"
                                    value={formik.values.email || ''}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="text"
                                    name="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    autoComplete="off"
                                    spellCheck="false"
                                    value={formik.values.password || ''}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.password}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ tên</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    autoComplete="off"
                                    spellCheck="false"
                                    value={formik.values.fullName || ''}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.fullName && formik.touched.fullName && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.fullName}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ảnh đại diện</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vai trò</label>
                                <select
                                    name="role"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    value={formik.values.role || 0}
                                    onChange={formik.handleChange}
                                >
                                    <option value="GUEST">Guest</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                                {formik.errors.role && formik.touched.role && (
                                    <p className="mt-1 ml-1 text-red-600 text-sm">
                                        {formik.errors.role}
                                    </p>
                                )}
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