import Api from "app/api";
import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import ProductItem from "components/product-item";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { addToCart } from "redux/cart.slice";
import utils from "utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-rating-stars-component";
import { useAuth } from "hooks/use-auth";
import CommentSection from "./comment";

export default function ProductDetailPage() {

    const { id } = useParams();

    const { user, isAuthenticated } = useAuth();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [currProduct, setCurrProduct] = useState({
        id: 0,
        categoryId: 0,
        name: "",
        price: 0,
        description: "",
    });

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await Api.Get(`/product/${id}`);

            if (!res.isSuccess) {
                toast.error("Có lỗi khi xem trang");
                navigate("/product");
                return;
            }

            setCurrProduct({
                id: res.response.id,
                name: res.response.name,
                imageUrl: res.response.imageUrl,
                price: res.response.price,
                description: res.response.description,
                categoryId: res.response.categoryId,
                brandId: res.response.brandId,
                colors: res.response.colors,
                sizes: res.response.sizes,
            });

            const res2 = await Api.Get(`/product/find-related/${id}`);
            setRelatedProducts(res2.response);
        })();

    }, [id]);

    const [count, setCount] = useState(1);
    const [color, setColor] = useState("Tự do");
    const [size, setSize] = useState("Tự do");

    const handleDecreaseCount = () => setCount((c) => count > 1 ? c - 1 : 1);
    const handleIncreaseCount = () => setCount((c) => c + 1);

    const handleAddToCart = () => {
        dispatch(addToCart({
            idProduct: currProduct.id,
            name: currProduct.name,
            imageUrl: currProduct.imageUrl,
            price: currProduct.price,
            amount: count,
            color: color,
            size: size,
        }));

        toast.success("Đã thêm vào giỏ hàng", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
        });
    }

    const [ratingScore, setRatingScore] = useState(0);
    const [ratingCount, setRatingCount] = useState(0);

    const fetchRatingData = async () => {
        let res = await Api.Get(`/rating/count-rating/${id}`);
        setRatingCount(res.response);

        res = await Api.Get(`/rating/get-score/${id}`);
        setRatingScore(res.response);
    }

    useEffect(() => {
        try {
            (async () => {
                await fetchRatingData();
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const handleRatingChange = async (newRating) => {
        //console.log(newRating);

        if (!isAuthenticated()) {
            return;
        }

        try {
            await Api.Post(`/rating/add-score`, {
                userId: parseInt(user.userId),
                productId: parseInt(id),
                score: newRating,
            });

            await fetchRatingData();

            toast.success("Đánh giá của bạn đã được lưu", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
            });
        }
        catch (err) {
            toast.error("Đã có lỗi xảy ra", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
            });
        }
    };

    return (
        <PageLayout title="Sản phẩm chi tiết">
            <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="sticky top-0 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                    <img src={`${API_URL}${currProduct.imageUrl}`} alt="" className="object-cover w-full lg:h-full " />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    {
                                        currProduct.isNew ? (
                                            <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                                        ) : null
                                    }
                                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                        {currProduct.name}
                                    </h2>
                                    <div className="flex items-center mb-6 gap-2">
                                        <ReactStars
                                            key={`stars_${ratingScore}`}
                                            count={5}
                                            value={ratingScore}
                                            onChange={handleRatingChange}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                        <p className="text-sm dark:text-gray-400 ">({ratingCount} lượt đánh giá)</p>
                                    </div>
                                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                        {currProduct.description}
                                    </p>
                                    <p className="inline-block mb-2 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        <span>{utils.formatVND(currProduct.price)}</span>
                                    </p>
                                </div>
                                <div className="flex items-center mb-8">
                                    <h2 className="mr-6 text-xl font-bold dark:text-gray-400">
                                        Màu sắc:</h2>
                                    <div className="flex flex-wrap -mx-2 -mb-2">
                                        {
                                            (!currProduct.colors || currProduct.colors.length <= 0)
                                                ? (
                                                    <button className="px-3 py-1 mb-2 mr-1 border border-indigo-400 text-indigo-600">
                                                        Tự do
                                                    </button>
                                                )
                                                : (
                                                    currProduct.colors.map((obj, index) => {
                                                        const activeClass = "px-3 py-1 mb-2 mr-1 border border-indigo-400 text-indigo-600";
                                                        const normalClass = "px-3 py-1 mb-2 mr-1 border hover:border-indigo-400 hover:text-indigo-600";
                                                        return (
                                                            <button
                                                                key={index}
                                                                className={color === obj ? activeClass : normalClass}
                                                                onClick={() => setColor(obj)}
                                                            >
                                                                {obj}
                                                            </button>
                                                        )
                                                    })
                                                )
                                        }
                                    </div>
                                </div>
                                <div className="flex items-center mb-8">
                                    <h2 className="mr-6 text-xl font-bold dark:text-gray-400">
                                        Kích cỡ:</h2>
                                    <div className="flex flex-wrap -mx-2 -mb-2">
                                        {
                                            (!currProduct.sizes || currProduct.sizes.length <= 0)
                                                ? (
                                                    <button className="px-3 py-1 mb-2 mr-1 border border-indigo-400 text-indigo-600">
                                                        Tự do
                                                    </button>
                                                )
                                                : (
                                                    currProduct.sizes.map((obj, index) => {
                                                        const activeClass = "px-3 py-1 mb-2 mr-1 border border-indigo-400 text-indigo-600";
                                                        const normalClass = "px-3 py-1 mb-2 mr-1 border hover:border-indigo-400 hover:text-indigo-600";
                                                        return (
                                                            <button
                                                                key={index}
                                                                className={size === obj ? activeClass : normalClass}
                                                                onClick={() => setSize(obj)}
                                                            >
                                                                {obj}
                                                            </button>
                                                        )
                                                    })
                                                )
                                        }
                                    </div>
                                </div>
                                <div className="mb-8 flex items-center gap-3">
                                    <label className="text-xl font-semibold text-gray-700 dark:text-gray-400">Số lượng:</label>
                                    <div className="flex justify-center items-center">
                                        <button
                                            className="border rounded-md px-2 mr-2"
                                            onClick={() => handleDecreaseCount(currProduct)}
                                        >
                                            -
                                        </button>
                                        <span className="text-center w-3">1</span>
                                        <button
                                            className="border rounded-md px-2 ml-2"
                                            onClick={() => handleIncreaseCount(currProduct)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center -mx-4 ">
                                    <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                        <button
                                            onClick={handleAddToCart}
                                            className="flex items-center justify-center w-full p-4 text-indigo-500 border border-indigo-500 rounded-md hover:bg-indigo-600 hover:border-indigo-600 hover:text-gray-100">
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                    <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                        <button className="flex items-center justify-center w-full p-4 text-indigo-500 border border-indigo-500 rounded-md hover:bg-indigo-600 hover:border-indigo-600 hover:text-gray-100">
                                            Thêm vào yêu thích
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="px-4">
                        <h2 className="pb-2 mt-4 text-lg font-semibold text-gray-900 dark:text-gray-400 font-poppins">
                            Có thể bạn quan tâm
                        </h2>
                        <div className="w-16 mb-3 border-b-2 border-blue-500 dark:border-gray-400 inset-px" />

                        <div className="">
                            <Carousel
                                responsive={{
                                    superLargeDesktop: {
                                        // the naming can be any, depends on you.
                                        breakpoint: { max: 4000, min: 3000 },
                                        items: 10
                                    },
                                    desktop: {
                                        breakpoint: { max: 3000, min: 1024 },
                                        items: 4,
                                    },
                                    tablet: {
                                        breakpoint: { max: 1024, min: 464 },
                                        items: 3
                                    },
                                    mobile: {
                                        breakpoint: { max: 464, min: 0 },
                                        items: 2
                                    }
                                }}
                                swipeable={false}
                                draggable={false}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                itemClass="px-2"
                            >
                                {
                                    relatedProducts.map((obj, index) => {
                                        return (
                                            <ProductItem key={index} product={obj} />
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <CommentSection />
                </div>
            </section>
        </PageLayout >
    )
}