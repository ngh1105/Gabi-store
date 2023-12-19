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

export const ChangePasswordSection = ({ user }) => {

    const { status, setStatus } = useApiStatus();

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            oldPassword: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
            newPassword: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
            confirmPassword: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu mới phải trùng khớp')
        }),
        onSubmit: async (values, { resetForm }) => {

            console.log("wtffff ?");

            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            const data = {
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
            }

            const res = await Api.Patch(`/user/update-password/${user.userId}`, data);
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

            resetForm();

            toast.success("Lưu thông tin thành công", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
            });
        },
    });

    return (
        <div className="">
            <h2 className="text-2xl font-semibold mb-6">Đổi mật khẩu</h2>
            <form className="grid grid-cols-2 gap-4" onSubmit={formik.handleSubmit}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu cũ</label>
                    <input
                        type="password"
                        name="oldPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        autoComplete="off"
                        spellCheck="false"
                        value={formik.values.oldPassword || ''}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.oldPassword && formik.touched.oldPassword && (
                        <p className="mt-1 ml-1 text-red-600 text-sm">
                            {formik.errors.oldPassword}
                        </p>
                    )}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu mới</label>
                    <input
                        type="password"
                        name="newPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        autoComplete="off"
                        spellCheck="false"
                        value={formik.values.newPassword || ''}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.newPassword && formik.touched.newPassword && (
                        <p className="mt-1 ml-1 text-red-600 text-sm">
                            {formik.errors.newPassword}
                        </p>
                    )}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        autoComplete="off"
                        spellCheck="false"
                        value={formik.values.confirmPassword || ''}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <p className="mt-1 ml-1 text-red-600 text-sm">
                            {formik.errors.confirmPassword}
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
    )
}