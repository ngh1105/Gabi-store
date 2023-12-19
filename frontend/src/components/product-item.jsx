import { API_URL } from "app/config";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "redux/cart.slice";
import utils from "utils";
import { toast } from "react-toastify";
import { useAuth } from "hooks/use-auth";
import { Tooltip } from 'flowbite-react';
import { useEffect, useState } from "react";
import Api from "app/api";

export default function ProductItem({ product, isNew }) {

    const { user, isAuthenticated } = useAuth();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (obj) => {
        if (!isAuthenticated()) {
            navigate("/auth/login");
            return;
        }

        dispatch(addToCart({
            idProduct: obj.id,
            name: obj.name,
            imageUrl: obj.imageUrl,
            price: obj.price,
            amount: 1,
            color: "Theo hình",
            size: "Tự do",
        }));

        toast.success("Đã thêm vào giỏ hàng", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
        });
    }

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        (async () => {
            if (!isAuthenticated()) {
                return;
            }

            const res = await Api.Get(`/wishlist/is-liked/${user.userId}/${product.id}`);

            if (!res.isSuccess) {
                toast.error("Đã có lỗi xảy ra");
                return;
            }

            setIsLiked(res.response.isLiked);
        })();

    }, []);

    const handleLiked = async () => {
        if (!isAuthenticated()) {
            return;
        }

        await Api.Post(`/wishlist/like`, {
            productId: product.id,
            userId: user.userId
        });

        setIsLiked(true);
    }

    const handleUnliked = async () => {
        if (!isAuthenticated()) {
            return;
        }

        await Api.Post(`/wishlist/unlike`, {
            productId: product.id,
            userId: user.userId
        });

        setIsLiked(false);
    }

    return (
        <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2">
            <div className="relative bg-gray-200">
                <Link
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                    to={`/product-detail/${product.id}`}
                >
                    <img
                        src={`${API_URL}${product.imageUrl}`}
                        alt=""
                        className="object-cover w-full h-56 mx-auto "
                    />
                </Link>
                {
                    isNew && isNew === true
                        ? (
                            <div className="absolute top-0 right-0 z-10 m-2 flex items-center justify-center p-2 text-center bg-red-600 ">
                                <span className="relative text-base font-normal text-gray-100 ">
                                    New
                                </span>
                            </div>
                        )
                        : null
                }
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-between mb-2 min-h-[3rem]">
                    <h3 className="w-full text-xl font-medium dark:text-gray-400 text-ellipsis line-clamp-2">
                        {product.name}
                    </h3>
                </div>
                <div className="mb-4 text-lg flex justify-between items-center">
                    <span className="text-red-400 dark:text-gray-400">
                        {utils.formatVND(product.price)}
                    </span>
                    <span className="ml-2 text-gray-400 dark:text-gray-400">
                        {
                            (isLiked && user) ? (
                                <div onClick={() => handleUnliked()} className="hover:cursor-pointer">
                                    <svg
                                        width={16}
                                        height={16}
                                        className="text-red-500 dark:text-gray-400 bi bi-heart"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 18">
                                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                    </svg>
                                </div>
                            )
                                : (
                                    <div onClick={() => handleLiked()} className="hover:cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="text-red-500 dark:text-gray-400 bi bi-heart"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                    </div>
                                )
                        }
                    </span>
                </div>

                <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                >
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    )
}