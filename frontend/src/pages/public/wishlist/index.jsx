import Api from "app/api";
import PageLayout from "components/page-layout";
import { useAuth } from "hooks/use-auth";
import { usePaginate } from "hooks/use-paginate";
import { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmptyWishlist from "./empty-wishlist";
import { API_URL } from "app/config";
import utils from "utils";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/cart.slice";

export default function WishlistPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        if (!user) {
            navigate("/auth/login");
        }
    }, [user, navigate]);

    const ITEMS_PER_PAGE = 4;
    const {
        items, setItems, totalItems,
        //onSortItems, 
        setTotalPages,
        //onSearchItems, 
        Pagination,
        //setCurrentPage
    } = usePaginate(ITEMS_PER_PAGE);

    const fecthData = useCallback(async () => {

        if (!user) return; // Add check for user

        const res = await Api.Get(`/wishlist/find-all/${user.userId}`);
        if (!res.isSuccess) {
            toast.error("Đã có lỗi xảy ra");
            return;
        }

        //console.log(res.response);
        setTotalPages(Math.ceil(res.response.length / ITEMS_PER_PAGE));
        setItems(res.response);
    }, [user, setItems, setTotalPages, ITEMS_PER_PAGE]);

    useEffect(() => {
        (async () => {
            await fecthData();
        })();

    }, [fecthData]);

    const handleUnliked = async (productId) => {
        if (!isAuthenticated()) {
            return;
        }

        await Api.Post(`/wishlist/unlike`, {
            productId: productId,
            userId: user.userId
        });

        await fecthData();
    }

    const handleAddToCartOne = (obj) => {
        dispatch(addToCart({
            idProduct: obj.productId,
            name: obj.Product.name,
            imageUrl: obj.Product.imageUrl,
            price: obj.Product.price,
            amount: 1,
            color: "Theo hÃ¬nh",
            size: "Tá»± do",
        }));

        toast.success("ÄÃ£ thÃªm vÃ o giá» hÃ ng", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
        });
    }

    const handleAddToCartAll = () => {
        totalItems.forEach((obj, index) => {
            dispatch(addToCart({
                idProduct: obj.productId,
                name: obj.Product.name,
                imageUrl: obj.Product.imageUrl,
                price: obj.Product.price,
                amount: 1,
                color: "Theo hÃ¬nh",
                size: "Tá»± do",
            }));
        })

        toast.success("ÄÃ£ thÃªm táº¥t cáº£ vÃ o giá» hÃ ng", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
        });
    }

    return (
        <>
            <PageLayout title="YÃªu thÃ­ch">
                <section className="mx-auto max-w-screen-xl py-10">
                    <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                        YÃªu thÃ­ch
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="lg:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">Sản phẩm</th>
                                            <th className="text-left font-semibold">ÄÆ¡n giÃ¡</th>
                                            <th className="text-center font-semibold">Thao tÃ¡c</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            totalItems && totalItems.length > 0 && items.map((obj, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="py-4 w-80">
                                                            <div className="flex gap-2">
                                                                <img
                                                                    className="w-16 h-16 rounded mt-1"
                                                                    src={`${API_URL}${obj.Product?.imageUrl}`}
                                                                    alt="" />
                                                                <div className="">
                                                                    <p className="font-semibold">
                                                                        {obj.Product?.name}
                                                                    </p>
                                                                    <div>
                                                                        <div className="flex items-center gap-2 mt-1">
                                                                            <h2 className="text-sm opacity-80">
                                                                                MÃ u sáº¯c: <span className="text-bold">Theo hÃ¬nh</span>
                                                                            </h2>

                                                                        </div>
                                                                        <h2 className="text-sm mt-1 opacity-80">
                                                                            KÃ­ch cá»¡: <span className="text-bold">Tá»± do</span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-4">{utils.formatVND(obj.Product?.price)}</td>
                                                        <td className="">
                                                            <div className="flex justify-center items-center gap-4">
                                                                <svg
                                                                    className="w-3 h-3 text-blue-500 dark:text-white hover:cursor-pointer"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 18 18"
                                                                    onClick={() => handleAddToCartOne(obj)}
                                                                >
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                                </svg>
                                                                <svg className="w-3 h-3 text-red-500 hover:cursor-pointer"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                    onClick={() => handleUnliked(obj.productId)}
                                                                >
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {items.length <= 0 ? <EmptyWishlist /> : null}
                            <div className="flex justify-center mt-6">
                                <Pagination />
                            </div>
                        </div>
                        <div className="lg:w-1/4">
                            <div className="">
                                <Link to="/product">
                                    <button
                                        onClick={() => { }}
                                        className="text-indigo-500 w-full py-4 px-4 border border-indigo-500 rounded-lg hover:bg-indigo-600 hover:border-indigo-600 hover:text-gray-100">
                                        KhÃ¡m phÃ¡ thÃªm
                                    </button>
                                </Link>

                                <button
                                    disabled={items.length === 0}
                                    onClick={() => { handleAddToCartAll() }}
                                    className="bg-indigo-700 text-white py-4 px-4 rounded-lg mt-4 w-full hover:opacity-[0.9]">
                                    ThÃªm vÃ o giá» hÃ ng
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </PageLayout>
        </>
    )
}
