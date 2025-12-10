import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "app/api";
import PageLayout from "components/page-layout";
import { toast } from "react-toastify";

export default function RegisterPage() {

    const navigate = useNavigate();

    const [status, setStatus] = useState({
        firstSubmit: false,
        isError: false,
        errorMessage: "",
        isSubmit: false,
        isSuccess: false,
        successMessage: "",
    });

    const [confirmedTerms, setConfirmedTerms] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            fullName: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("ÄÃ¢y lÃ  dá»¯ liá»‡u báº¯t buá»™c")
                .email("Email khÃ´ng há»£p lá»‡")
                .min(6, `Cáº§n Ã­t nháº¥t 6 kÃ½ tá»±`)
                .max(255, `KhÃ´ng thá»ƒ vÆ°á»£t quÃ¡ 255 kÃ½ tá»±`),
            fullName: Yup.string()
                .required("ÄÃ¢y lÃ  dá»¯ liá»‡u báº¯t buá»™c")
                .min(6, `Cáº§n Ã­t nháº¥t 6 kÃ½ tá»±`)
                .max(255, `KhÃ´ng thá»ƒ vÆ°á»£t quÃ¡ 255 kÃ½ tá»±`),
            password: Yup.string()
                .required("ÄÃ¢y lÃ  dá»¯ liá»‡u báº¯t buá»™c")
                .min(6, `Cáº§n Ã­t nháº¥t 6 kÃ½ tá»±`)
                .max(255, `KhÃ´ng thá»ƒ vÆ°á»£t quÃ¡ 255 kÃ½ tá»±`),
            confirmPassword: Yup.string()
                .required("ÄÃ¢y lÃ  dá»¯ liá»‡u báº¯t buá»™c")
                .oneOf([Yup.ref('password'), null], 'Máº­t kháº©u pháº£i trÃ¹ng khá»›p')
        }),
        onSubmit: async (values, { resetForm }) => {

            if (!confirmedTerms) {
                setStatus(prevState => ({
                    isError: true,
                    errorMessage: "Báº¡n chÆ°a Ä‘á»“ng Ã½ vá»›i Ä‘iá»u khoáº£n sá»­ dá»¥ng",
                    isSubmit: false,
                }));

                return;
            }

            setStatus(prevState => ({
                ...prevState,
                isSubmit: true,
            }));

            const data = {
                email: values.email,
                fullName: values.fullName,
                password: values.password,
            }

            const registerData = await Api.Post("/auth/register", data);

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
                isError: false,
                isSuccess: true,
                successMessage: "Báº¡n Ä‘Ã£ Ä‘Äƒng kÃ½ thÃ nh cÃ´ng! Má»™t email xÃ¡c nháº­n Ä‘Ã£ Ä‘Æ°á»£c gá»­i Ä‘áº¿n hÃ²m thÆ° cá»§a báº¡n. Vui lÃ²ng kiá»ƒm tra hÃ²m thÆ° Ä‘áº¿n vÃ  thá»±c hiá»‡n theo hÆ°á»›ng dáº«n trong email Ä‘á»ƒ hoÃ n táº¥t quÃ¡ trÃ¬nh Ä‘Äƒng kÃ½."
            }));

            resetForm();

            toast.success("ÄÄƒng kÃ½ thÃ nh cÃ´ng");

            //navigate("/auth/login");
        },
    })

    return (
        <PageLayout title="ÄÄƒng kÃ½">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    ÄÄƒng kÃ½
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
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Há» tÃªn</label>
                        <input
                            type="text"
                            name="fullName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Há» vÃ  tÃªn"
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
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Máº­t kháº©u</label>
                        <input
                            type="password"
                            name="password"
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
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nháº­p láº¡i máº­t kháº©u</label>
                        <input
                            type="password"
                            name="confirmPassword"
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
                            <input
                                onChange={(e) => setConfirmedTerms(e.target.value)}
                                aria-describedby="terms"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">TÃ´i Ä‘á»“ng Ã½ vá»›i <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/terms">Äiá»u khoáº£n sá»­ dá»¥ng</Link></label>
                        </div>
                    </div>
                    <button
                        disabled={status.isSubmit}
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Táº¡o tÃ i khoáº£n
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
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Báº¡n Ä‘Ã£ cÃ³ tÃ i khoáº£n ? <Link to="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">ÄÄƒng nháº­p</Link>
                    </p>
                </form>
            </div>
        </PageLayout>

    )
}
