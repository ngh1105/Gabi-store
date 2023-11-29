import { API_URL } from "app/config";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "redux/cart.slice";
import utils from "utils";
import { toast } from "react-toastify";
import { useAuth } from "hooks/use-auth";

export default function ProductItem({ product }) {

    const { isAuthenticated } = useAuth();

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
        }));

        toast.success("Đã thêm vào giỏ hàng");
    }

    return (
        <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
            <div className="relative bg-gray-200">
                <Link to={`/product-detail/${product.id}`}>
                    <img
                        src={`${API_URL}${product.imageUrl}`}
                        alt=""
                        className="object-cover w-full h-56 mx-auto "
                    />
                </Link>
                {
                    product.isNew && product.isNew === true
                        ? (
                            <div className="absolute top-0 right-0 z-10 m-2 flex items-center justify-center p-2 text-center bg-red-600 ">
                                <span className="relative text-base font-normal text-gray-100 ">
                                    {" "}
                                    New
                                </span>
                            </div>
                        )
                        : null
                }
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="w-full text-xl font-medium dark:text-gray-400">
                        {product.name}
                    </h3>
                </div>
                <div className="mb-4 ">
                    <p className="text-lg flex justify-between">
                        <span className="text-red-400 dark:text-gray-400">
                            {utils.formatVND(product.price)}
                        </span>
                        <span className="ml-2 text-gray-400  dark:text-gray-400">
                            <a href="#">
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
                            </a>
                        </span>
                    </p>
                </div>

                <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                >
                    Thêm vào giỏ
                </button>
            </div>
        </div>
    )
}