import Api from "app/api";
import { useAuth } from "hooks/use-auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import PageLayout from "components/page-layout";
import { useApiStatus } from "hooks/use-api-status";

export default function LoginPage() {

    const navigate = useNavigate();

    const { status, setStatus } = useApiStatus();

    const { user, setLocalUser } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("ÄÃ¢y lÃ  dá»¯ liá»‡u báº¯t buá»™c")
                .email("Email khÃ´ng há»£p lá»‡")
                .min(6, `Cáº§n Ã­t nháº¥t 6 kÃ½ tá»±`)
                .max(255, `KhÃ´ng thá»ƒ vÆ°á»£t quÃ¡ 255 kÃ½ tá»±`),
            password: Yup.string()
                .required("ÄÃ¢y lÃ  dá»¯ liá»‡u báº¯t buá»™c")
                .min(6, `Cáº§n Ã­t nháº¥t 6 kÃ½ tá»±`)
                .max(255, `KhÃ´ng thá»ƒ vÆ°á»£t quÃ¡ 255 kÃ½ tá»±`),
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

            const loginData = await Api.Post("/auth/login", data, {
                withCredentials: true,
            });
            //console.log(loginData);

            if (!loginData.isSuccess) {
                setStatus(prevState => ({
                    ...prevState,
                    isError: true,
                    errorMessage: "TÃªn tÃ i khoáº£n hoáº·c máº­t kháº©u khÃ´ng chÃ­nh xÃ¡c",
                    isSubmit: false,
                }));

                return;
            }

            if (loginData.isSuccess
                && loginData.response.isEmailVerified === false) {

                setStatus(prevState => ({
                    ...prevState,
                    isError: true,
                    errorMessage: "Email cá»§a báº¡n chÆ°a Ä‘Æ°á»£c xÃ¡c thá»±c, vui lÃ²ng kiá»ƒm tra hÃ²m thÆ° Ä‘áº¿n vÃ  thá»±c hiá»‡n theo hÆ°á»›ng dáº«n trong email",
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
        <PageLayout title="ÄÄƒng nháº­p">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    ÄÄƒng nháº­p
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
                            <p className="mt-1 ml-1 text-red-600 text-sm">
                                {formik.errors.email}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Máº­t kháº©u</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            autoComplete="off"
                            spellCheck="false"
                            value={formik.values.password || ''}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <p className="mt-1 ml-1  text-sm text-red-600">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>
                    <button
                        disabled={status.isSubmit}
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        ÄÄƒng nháº­p
                    </button>
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

                    <div className="flex items-center justify-between">
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Báº¡n chÆ°a cÃ³ tÃ i khoáº£n ? <Link to="/auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">ÄÄƒng kÃ½</Link>
                        </p>
                        <Link to="/auth/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">QuÃªn máº­t kháº©u ?</Link>
                    </div>
                </form>
            </div>
        </PageLayout>
    )
}
