import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import PageTitle from "components/page-title";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { decreaseAmountInCart, increaseAmountInCart, removeFromCart } from "redux/cart.slice";
import utils from "utils";
import EmptyCart from "./empty-cart";

export default function CartPage() {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleDecreaseCount = (currProduct) => {
        if (currProduct.amount <= 1) {
            return;
        }

        dispatch(decreaseAmountInCart({
            idProduct: currProduct.idProduct,
            amountToDecrease: 1,
        }))
    };

    const handleIncreaseCount = (currProduct) => {
        dispatch(increaseAmountInCart({
            idProduct: currProduct.idProduct,
            amountToIncrease: 1,
        }))
    }

    const handleDeleteItem = (idProduct) => {
        dispatch(removeFromCart(idProduct));
    }

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, cartItem) => acc + cartItem.amount * cartItem.price, 0)
    }, [cart]);

    const navigate = useNavigate();

    const handleCheckoutButton = () => {
        navigate("/checkout");
    }

    return (
        <PageLayout title="Giỏ hàng">
            <section className="mx-auto max-w-screen-xl py-10">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                    Giỏ hàng
                </h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="lg:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Sản phẩm</th>
                                        <th className="text-left font-semibold">Đơn giá</th>
                                        <th className="text-center font-semibold">Số lượng</th>
                                        <th className="text-center font-semibold">Tổng cộng</th>
                                        <th className="text-center font-semibold"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((obj, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="py-4 w-80">
                                                        <div className="flex gap-2">
                                                            <img
                                                                className="w-16 h-16 rounded mt-1"
                                                                src={`${API_URL}${obj.imageUrl}`}
                                                                alt="Default avatar" />
                                                            <div className="">
                                                                <p className="font-semibold">
                                                                    {obj.name}
                                                                </p>
                                                                <div>
                                                                    <div className="flex items-center gap-2 mt-1">
                                                                        <h2 className="text-sm dark:text-gray-400 opacity-80">
                                                                            Màu sắc:
                                                                        </h2>
                                                                        <div className="w-4 h-4 bg-cyan-300" />
                                                                    </div>
                                                                    <h2 className="text-sm mt-1 opacity-80">
                                                                        Kích cỡ: <span className="text-bold">XL</span>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4">{utils.formatVND(obj.price)}</td>
                                                    <td className="py-4 px-3 items-center ">
                                                        <div className="flex justify-center items-center">
                                                            <button
                                                                className="border rounded-md px-2 mr-2"
                                                                onClick={() => handleDecreaseCount(obj)}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="text-center w-3">{obj.amount}</span>
                                                            <button
                                                                className="border rounded-md px-2 ml-2"
                                                                onClick={() => handleIncreaseCount(obj)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 text-center">{utils.formatVND(obj.totalPrice)}</td>
                                                    <td className="hover:cursor-pointer"
                                                        onClick={() => handleDeleteItem(obj.idProduct)}>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                        </svg>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        {cart.length <= 0 ? <EmptyCart /> : null}
                    </div>
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">Thành tiền</h2>
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
                                disabled={cart.length === 0}
                                onClick={handleCheckoutButton}
                                className="bg-indigo-700 text-white py-2 px-4 rounded-lg mt-4 w-full">
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}