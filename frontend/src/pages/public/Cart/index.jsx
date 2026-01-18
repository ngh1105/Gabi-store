import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import PageTitle from "components/page-title";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { decreaseAmountInCart, increaseAmountInCart, removeFromCart } from "redux/cart.slice";
import utils from "utils";
import EmptyCart from "./empty-cart";
import { usePaginate } from "hooks/use-paginate";
import { useAuth } from "hooks/use-auth";

export default function CartPage() {

    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            navigate("/auth/login");
        }
    }, [user]);

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

    const handleCheckoutButton = () => {
        navigate("/checkout");
    }

    const ITEMS_PER_PAGE = 4;
    const {
        items, setItems, totalItems,
        onSortItems, setTotalPages,
        onSearchItems, Pagination,
    } = usePaginate(ITEMS_PER_PAGE);

    useEffect(() => {
        if (cart && cart.length > 0) {
            setTotalPages(Math.ceil(cart.length / ITEMS_PER_PAGE));
            setItems(cart);
        }
    }, [cart])

    return (
        <PageLayout title="Giá» hÃ ng">
            <section className="mx-auto max-w-screen-xl py-10">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                    Giá» hÃ ng
                </h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="lg:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Sản phẩm</th>
                                        <th className="text-left font-semibold">ÄÆ¡n giÃ¡</th>
                                        <th className="text-center font-semibold">Số lượng</th>
                                        <th className="text-center font-semibold">Tá»•ng cá»™ng</th>
                                        <th className="text-center font-semibold"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.length > 0 && items.map((obj, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="py-4 w-80">
                                                        <div className="flex gap-2">
                                                            <img
                                                                className="w-16 h-16 rounded mt-1"
                                                                src={`${API_URL}${obj.imageUrl}`}
                                                                alt="" />
                                                            <div className="">
                                                                <p className="font-semibold">
                                                                    {obj.name}
                                                                </p>
                                                                <div>
                                                                    <div className="flex items-center gap-2 mt-1">
                                                                        <h2 className="text-sm opacity-80">
                                                                            MÃ u sáº¯c: <span className="text-bold">{obj.color ? obj.color : "Theo hÃ¬nh"}</span>
                                                                        </h2>

                                                                    </div>
                                                                    <h2 className="text-sm mt-1 opacity-80">
                                                                        KÃ­ch cá»¡: <span className="text-bold">{obj.size ? obj.size : "Tá»± do"}</span>
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
                        <div className="flex justify-center mt-6">
                            <Pagination />
                        </div>
                    </div>
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">ThÃ nh tiá»n</h2>
                            <div className="flex justify-between mb-2">
                                <span>Tá»•ng Ä‘Æ¡n hÃ ng</span>
                                <span>{utils.formatVND(totalPrice)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>PhÃ­ váº­n chuyá»ƒn</span>
                                <span>0 Ä‘</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">Tá»•ng cá»™ng</span>
                                <span className="font-semibold">{utils.formatVND(totalPrice)}</span>
                            </div>
                            <button
                                disabled={cart.length === 0}
                                onClick={handleCheckoutButton}
                                className="bg-indigo-700 text-white py-2 px-4 rounded-lg mt-4 w-full hover:opacity-[0.9] hover:cursor-pointer">
                                Äáº·t hÃ ng
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
