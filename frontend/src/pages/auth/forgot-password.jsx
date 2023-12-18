import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import PageLayout from "components/page-layout";
import { useApiStatus } from "hooks/use-api-status";
import Logo from "images/logo.png";
import Api from "app/api";
import { useState } from "react";

export default function ForgotPasswordPage() {

    const navigate = useNavigate();

    const [status, setStatus] = useState({
        firstSubmit: false,
        isError: false,
        errorMessage: "",
        isSubmit: false,
        isSuccess: false,
        successMessage: "",
    });

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .email("Email không hợp lệ")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
        }),
        onSubmit: async (values, { resetForm }) => {

            setStatus(prevState => ({
                ...prevState,
                isSubmit: true,
            }));

            const data = {
                email: values.email,
            }

            const res = await Api.Post("/mail/forgot-password", data);

            if (!res.isSuccess) {
                setStatus(prevState => ({
                    isError: true,
                    errorMessage: "Đã có lỗi xảy ra, vui lòng kiểm tra lại thông tin của bạn.",
                    isSubmit: false,
                }));

                return;
            }

            setStatus(prevState => ({
                ...prevState,
                isSubmit: false,
                isError: false,
                isSuccess: true,
                successMessage: "Một email xác nhận đã được gửi đến hòm thư của bạn. Vui lòng kiểm tra hòm thư đến và thực hiện theo hướng dẫn trong email để hoàn tất quá trình."
            }));

            resetForm();

            //navigate("/auth/login");
        },
    })

    return (
        <PageLayout title="Quên mật khẩu">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Quên mật khẩu?
                </h1>
                <p className="font-light text-gray-500 dark:text-gray-400">Đừng lo! Hãy để lại email của bạn và chúng tôi sẽ giúp bạn đặt lại mật khẩu!</p>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            value={formik.values.email || ''}
                            onChange={formik.handleChange}
                            type="text"
                            name="email"
                            placeholder="ten@gmail.com"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {formik.errors.email && formik.touched.email && (
                            <p className="mt-1 ml-1 text-red-600 text-sm">
                                {formik.errors.email}
                            </p>
                        )}
                    </div>
                    <button
                        disabled={status.isSubmit}
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Đặt lại mật khẩu
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
                    {
                        status.successMessage !== "" && status.isSuccess
                            ? (
                                <p className="ml-1 text-green-600 text-sm" style={{
                                    marginTop: '0.25rem',
                                }}>
                                    {status.successMessage}
                                </p>
                            )
                            : null
                    }
                </form>
            </div>
        </PageLayout>
    )
}