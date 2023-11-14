import Api from "app/api";
import { useAuth } from "auth/use-auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginPage() {

    const navigate = useNavigate();

    const [status, setStatus] = useState({
        isError: false,
        errorMessage: "",
        isSubmit: false,
    });

    const { user, setLocalUser } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .email("Email không hợp lệ")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            password: Yup.string()
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
                email: values.email,
                password: values.password,
            }

            const loginData = await Api.Post("auth/login", data, {
                withCredentials: true,
            });
            //console.log(loginData);

            if (!loginData.isSuccess) {
                setStatus(prevState => ({
                    isError: true,
                    errorMessage: loginData.response.message,
                    isSubmit: false,
                }));

                return;
            }

            setStatus(prevState => ({
                ...prevState,
                isSubmit: false,
            }));

            setLocalUser(loginData.response);

            navigate("/");
        },
    })

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng nhập
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="name@company.com"
                        autoComplete="off"
                        spellCheck="false"
                        value={formik.values.email || ''}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p className="italic mt-1 ml-1 text-red-500 text-sm">
                            {formik.errors.email}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
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
                        <p className="italic mt-1 ml-1 text-red-500 text-sm">
                            {formik.errors.password}
                        </p>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Ghi nhớ đăng nhập</label>
                        </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Quên mật khẩu ?</a>
                </div>
                <button
                    disabled={status.isSubmit}
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Đăng nhập
                </button>
                {
                    status.errorMessage !== "" && status.isError
                        ? (
                            <p className="italic ml-1 text-red-500 text-sm" style={{
                                marginTop: '0.25rem',
                            }}>
                                {status.errorMessage}
                            </p>
                        )
                        : null
                }
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Bạn chưa có tài khoản ? <Link to="/auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng ký</Link>
                </p>
            </form>
        </div>
    )
}