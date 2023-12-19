import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import PageTitle from "components/page-title";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import utils from "utils";
import { usePaginate } from "hooks/use-paginate";
import { useAuth } from "hooks/use-auth";
import { useApiStatus } from "hooks/use-api-status";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "app/api";
import { toast } from "react-toastify";
import { ChangePasswordSection } from "./change-password";

export default function UserSettingsPage() {

    const navigate = useNavigate();
    const { user, setUserInfo, setAvatarUrl } = useAuth();

    useEffect(() => {
        if (!user) {
            navigate("/auth/login");
        }
    }, []);

    const { status, setStatus } = useApiStatus();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: user?.fullName,
            phoneNumber: user?.phoneNumber,
            address: user?.address,
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            phoneNumber: Yup.string()
                .min(8, `Cần ít nhất 8 ký tự`)
                .matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
            address: Yup.string()
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
        }),
        onSubmit: async (values) => {
            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            const data = {
                fullName: values.fullName,
                phoneNumber: values.phoneNumber,
                address: values.address,
            }

            if (user.fullName === data.fullName
                && user.phoneNumber === data.phoneNumber
                && user.address === data.address) {
                return;
            }

            const res = await Api.Patch(`/user/update-info/${user.userId}`, data);
            //console.log(loginData);

            if (!res.isSuccess) {
                setStatus(prevState => ({
                    ...prevState,
                    isError: true,
                    errorMessage: "Đã có lỗi xảy ra",
                    isSubmit: false,
                }));

                return;
            }

            setStatus(prevState => ({
                ...prevState,
                isSubmit: false,
            }));

            setUserInfo(data);

            toast.success("Lưu thông tin thành công", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
            });
        },
    })

    const uploadAvatar = async (id, image) => {

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
            return "";
        }

        return resData.response;
    }

    const fileInputRef = useRef();

    const handleFileChange = async (event) => {
        const file = event.target.files[0];

        const url = await uploadAvatar(user.userId, file);

        setAvatarUrl(url);
    };

    return (
        <PageLayout title="Hồ sơ">
            <section className="mx-auto max-w-screen-xl py-10">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                    Hồ sơ
                </h1>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6 h-auto">
                            <div className="text-center mb-6">
                                <img className="mx-auto h-24 w-24 rounded-full" src={`${API_URL}${user && user.avatarUrl && user.avatarUrl !== "" ? user.avatarUrl : "/upload/user/default-avatar.png"}`} alt="" />
                                <h2 className="text-xl font-semibold mt-2">{user?.fullName}</h2>
                                <p className="text-gray-600">{user?.role === "ADMIN" ? "Quản trị viên" : "Khách"}</p>
                                <button
                                    className="mt-4 bg-indigo-700 text-white py-2 px-4 rounded hover:opacity-[0.9] hover:cursor-pointer"
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    Chọn ảnh
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="">
                                <h2 className="text-2xl font-semibold mb-6">Thông tin tài khoản</h2>
                                <form className="grid grid-cols-2 gap-4" onSubmit={formik.handleSubmit}>
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
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            autoComplete="off"
                                            spellCheck="false"
                                            value={formik.values.phoneNumber || ''}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                            <p className="mt-1 ml-1 text-red-600 text-sm">
                                                {formik.errors.phoneNumber}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ</label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            autoComplete="off"
                                            spellCheck="false"
                                            value={formik.values.address || ''}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.address && formik.touched.address && (
                                            <p className="mt-1 ml-1 text-red-600 text-sm">
                                                {formik.errors.address}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        disabled={status.isSubmit}
                                        type="submit"
                                        className="col-span-2 bg-indigo-700 text-white py-2 px-4 rounded hover:opacity-[0.9] hover:cursor-pointer">
                                        Lưu thay đổi
                                    </button>
                                </form>
                                {
                                    status.errorMessage !== "" && status.isError
                                        ? (
                                            <p className="ml-1 text-sm text-red-600" style={{
                                                marginTop: '0.25rem',
                                            }}>
                                                {status.errorMessage}
                                            </p>
                                        )
                                        : null
                                }
                            </div>
                            <hr className="my-8" />
                            <ChangePasswordSection user={user} />
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}