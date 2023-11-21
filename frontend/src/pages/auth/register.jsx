import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "app/api";
import PageLayout from "components/page-layout";

export default function RegisterPage() {

    const navigate = useNavigate();

    const [status, setStatus] = useState({
        isError: false,
        errorMessage: "",
        isSubmit: false,
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            fullName: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .email("Email không hợp lệ")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            fullName: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            password: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            confirmPassword: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .oneOf([Yup.ref('password'), null], 'Mật khẩu phải trùng khớp')
        }),
        onSubmit: async (values) => {
            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            const data = {
                email: values.email,
                fullName: values.fullName,
                password: values.password,
            }

            const registerData = await Api.Post("auth/register", data);

            if (!registerData.isSuccess) {
                setStatus(prevState => ({
                    isError: true,
                    errorMessage: registerData.response.message,
                    isSubmit: false,
                }));

                return;
            }

            setStatus(prevState => ({
                ...prevState,
                isSubmit: false,
            }));

            navigate("/auth/login");
        },
    })

    return (
        <PageLayout title="Đăng ký">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Đăng ký
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="ten@gmail.com"
                            autoComplete="off"
                            spellCheck="false"
                            value={formik.values.email || ''}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <p className="mt-1 ml-1 text-sm text-red-600">
                                {formik.errors.email}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ tên</label>
                        <input
                            type="text"
                            name="fullName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Họ và tên"
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
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập lại mật khẩu</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Tôi đồng ý với <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Điều khoản sử dụng</a></label>
                        </div>
                    </div>
                    <button
                        disabled={status.isSubmit}
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Tạo tài khoản
                    </button>
                    {
                        status.errorMessage !== "" && status.isError
                            ? (
                                <p className="ml-1 text-red-600 text-sm" style={{
                                    marginTop: '0.25rem',
                                }}>
                                    {status.errorMessage}
                                </p>
                            )
                            : null
                    }
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Bạn đã có tài khoản ? <Link to="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng nhập</Link>
                    </p>
                </form>
            </div>
        </PageLayout>

    )
}