import { useFormik } from "formik";
import { useApiStatus } from "hooks/use-api-status";
import PageLayout from "components/page-layout";
import * as Yup from "yup";
import { useAuth } from "hooks/use-auth";
import Api from "app/api";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import utils from "utils";
import { toast } from "react-toastify";
import { API_URL } from "app/config";
import { clearCart } from "redux/cart.slice";

export default function CheckoutPage() {

    const paymentOptions = useMemo(() => [
        {
            id: "cod-checkbox",
            name: "COD",
            image: `${API_URL}/upload/payment/cod.jpg`,
        },
        {
            id: "momo-checkbox",
            name: "Ví điện tử Momo",
            image: `${API_URL}/upload/payment/momo.png`,
        },
        {
            id: "zalo-checkbox",
            name: "Ví điện tử ZaloPay",
            image: `${API_URL}/upload/payment/zalo.webp`,
        },
    ], []);

    const navigate = useNavigate();

    const { status, setStatus } = useApiStatus();

    const { user } = useAuth();

    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, cartItem) => acc + cartItem.amount * cartItem.price, 0)
    }, [cart]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: user.fullName,
            email: user.email,
            address: user.address,
            phoneNumber: user.phoneNumber,
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
            phoneNumber: Yup.number()
                .required("Đây là dữ liệu bắt buộc")
                .typeError("Dữ liệu phải là một số"),
        }),
        onSubmit: async (values) => {
            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            const data = {
                fullName: values.fullName,
                address: values.address,
                email: values.email,
                phoneNumber: values.phoneNumber,
                totalPrice: totalPrice,
                paymentMethod: "COD",
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
    })

    return (
        <PageLayout title="Thanh toán">
            <section className="mx-auto max-w-screen-xl py-10">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
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
                        <ul className="shadow-md w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            {
                                paymentOptions.map((obj, index) => {
                                    return (
                                        <li key={index} className="w-full border-b border-gray-200 dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input
                                                    name="check"
                                                    id={obj.id}
                                                    type="radio"
                                                    className="w-4 h-4 text-indigo-600 bg-gray-100 border-indigo-300 rounded-full focus:ring-indigo-500 focus:ring-2"
                                                />
                                                <label
                                                    htmlFor={obj.id}
                                                    className="w-full ml-5 py-3 ms-2 items-center text-sm font-medium text-gray-900 flex dark:text-gray-300"
                                                >
                                                    <img
                                                        src={obj.image}
                                                        className="w-12 mr-2"
                                                        alt=""
                                                    />
                                                    {obj.name}
                                                </label>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

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
                                className="bg-indigo-700 text-white py-2 px-4 rounded-lg mt-4 w-full">
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </PageLayout>
    );
}
