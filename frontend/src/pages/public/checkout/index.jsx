import { useFormik } from "formik";
import { useApiStatus } from "hooks/use-api-status";
import PageLayout from "components/page-layout";
import * as Yup from "yup";
import { useAuth } from "hooks/use-auth";
import Api from "app/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import utils from "utils";
import { toast } from "react-toastify";
import { API_URL } from "app/config";
import { clearCart } from "redux/cart.slice";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": "ASwXpgYUU4U7UI7Ywdplx1OucAY_7asH3o74zdgWQ0C1YbES-qPouyarSfPLoVsYTnm2ogMfsdWR5YSj",
    currency: "USD",
    intent: "capture",
    locale: "vi_VN" // Set language to Vietnamese
};

export default function CheckoutPage() {

    const [paymentMethod, setPaymentMethod] = useState('COD');

    const navigate = useNavigate();

    const { status, setStatus } = useApiStatus();

    const { user } = useAuth();

    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!cart || cart.length <= 0) {
            navigate("/product");
        }
    }, [user]);

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, cartItem) => acc + cartItem.amount * cartItem.price, 0)
    }, [cart]);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: user?.fullName,
            email: user?.email,
            address: user?.address,
            phoneNumber: user?.phoneNumber,
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
            email: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .email("Email không hợp lệ")
                .min(6, `Cần ít nhất 6 ký tự`)
                .max(255, `Không thể vượt quá 255 ký tự`),
            address: Yup.string()
                .required("Đây là dữ liệu bắt buộc"),
            phoneNumber: Yup.string()
                .min(8, `Cần ít nhất 8 ký tự`)
                .matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
        }),
        onSubmit: async (values) => {
            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            console.log(paymentMethod);

            const data = {
                fullName: values.fullName,
                address: values.address,
                email: values.email,
                phoneNumber: values.phoneNumber,
                totalPrice: totalPrice,
                paymentMethod: paymentMethod,
                userId: parseInt(user.userId),
                details: cart.map((obj, index) => {
                    return {
                        billId: 0,
                        productId: obj.idProduct,
                        name: obj.name,
                        quantity: obj.amount,
                        price: obj.price,
                        imageUrl: obj.imageUrl,
                    }
                }),
            }

            const billData = await Api.Post("/bill", data);

            if (!billData.isSuccess) {
                console.log(billData.response);
                toast.error("Đã có lỗi xảy ra");

                setStatus(prevState => ({
                    isError: true,
                    errorMessage: billData.response.message,
                    isSubmit: false,
                }));

                return;
            }

            setStatus(prevState => ({
                ...prevState,
                isSubmit: false,
            }));

            dispatch(clearCart());

            navigate(`/bill-detail/${billData.response.id}`);
        },
    });

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then(async (details) => {
            const name = details.payer.name.given_name;
            setPaymentMethod("PAYPAL");
        });
    }

    useEffect(() => {
        if (paymentMethod === 'PAYPAL') {
            (async () => {
                await formik.submitForm();
            })();
        }
    }, [paymentMethod]);

    const handlePayPalClick = async () => {
        const errors = await formik.validateForm();
        if (Object.keys(errors).length !== 0) {
            // If there are errors, stop the checkout process
            return false;
        }
    };

    return (
        <PageLayout title="Thanh toán">
            <PayPalScriptProvider options={initialOptions}>
                <section className="mx-auto max-w-screen-xl py-10">
                    <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                        Thanh toán
                    </h1>
                    <form className="flex flex-col md:flex-row gap-4" onSubmit={formik.handleSubmit}>
                        <div className="md:w-2/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <div className="w-full">
                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ tên</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                                    <div className="mb-5">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                                    <div className="mb-5">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                                    <div className="mb-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ</label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mt-2">
                                <div className="flex justify-between mb-2">
                                    <span>Tổng đơn hàng</span>
                                    <span>{utils.formatVND(totalPrice)}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Phí vận chuyển</span>
                                    <span>0đ</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Tổng cộng</span>
                                    <span className="font-semibold">{utils.formatVND(totalPrice)}</span>
                                </div>
                                <button
                                    disabled={status.isSubmit}
                                    type="submit"
                                    className="bg-indigo-700 text-white py-4 px-4 rounded-lg mt-4 w-full">
                                    COD
                                </button>

                                <div className="mt-4" >
                                    <PayPalButtons
                                        onClick={handlePayPalClick}
                                        style={{ layout: "vertical" }}
                                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </PayPalScriptProvider>

        </PageLayout>
    );
}
