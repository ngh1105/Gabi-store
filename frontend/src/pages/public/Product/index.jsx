import { Link, useLocation, useParams } from "react-router-dom";
import Slider from "./slider";
import PageLayout from "components/page-layout";
import PageTitle from "components/page-title";
import { API_URL } from "app/config";
import { useEffect, useMemo, useState } from "react";
import Api from "app/api";
import utils from "utils";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/cart.slice";
import ProductItem from "components/product-item";
import { useProductPaginate } from "./use-paginate";
import { toast } from 'react-toastify';

export default function ProductPage() {

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                let res = await Api.Get("/category");
                if (!res.isSuccess) {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }

                setCategories(res.response);

                res = await Api.Get("/brand");
                if (!res.isSuccess) {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }

                setBrands(res.response);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const PRODUCTS_PER_PAGE = 9;
    const {
        items, setItems, totalItems,
        selectedCategories, setSelectedCategories,
        selectedBrands, setSelectedBrands,
        onSortItems, setTotalPages,
        onSearchItems, Pagination
    } = useProductPaginate(PRODUCTS_PER_PAGE);

    // Handle redirect from home page
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const category = queryParams.get('category');
    const brand = queryParams.get('brand');

    useEffect(() => {
        if (category && category > 0) {
            setSelectedCategories([parseInt(category)]);
        }

        if (brand && brand > 0) {
            setSelectedBrands([parseInt(brand)]);
        }
    }, [category, brand]);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get(`/product`);
                if (!res.isSuccess) {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }

                setTotalPages(Math.ceil(res.response.length / PRODUCTS_PER_PAGE));
                setItems(res.response);

                //onSortItems((data) => data);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const handleSortProduct = (option) => {

        onSortItems((data) => {
            switch (option) {
                case "latest": {

                    const sortedData = [...data].sort((a, b) => {
                        // Convert createdAt strings to Date objects for comparison
                        const dateA = new Date(a.createdAt);
                        const dateB = new Date(b.createdAt);

                        // Sort in descending order (latest first)
                        return dateB - dateA;
                    });

                    return sortedData;
                    break;
                }
                case "mostPopular": {

                    const sortedData = [...data].sort((a, b) => b.viewCount - a.viewCount);
                    return sortedData;

                    break;
                }
                case "lowestPrice": {

                    const sortedData = [...data].sort((a, b) => a.price - b.price);
                    return sortedData;

                    break;
                }
                default: {
                    return data; // Return unsorted data for unknown options
                }
            }
        });
    }

    const handleCategoryChange = (categoryId) => {
        // Check if the category is already selected
        if (selectedCategories.includes(categoryId)) {
            // If selected, remove it from the array
            setSelectedCategories((prevSelected) =>
                prevSelected.filter((id) => id !== categoryId)
            );
        } else {
            // If not selected, add it to the array
            setSelectedCategories((prevSelected) => [...prevSelected, categoryId]);
        }
    };

    const handleBrandChange = (brandId) => {
        // Check if the category is already selected
        if (selectedBrands.includes(brandId)) {
            // If selected, remove it from the array
            setSelectedBrands((prevSelected) =>
                prevSelected.filter((id) => id !== brandId)
            );
        } else {
            // If not selected, add it to the array
            setSelectedBrands((prevSelected) => [...prevSelected, brandId]);
        }
    };

    useEffect(() => {
        onSortItems((data) => data);
    }, [selectedCategories, selectedBrands, totalItems]);

    return (
        <PageLayout title="Sản phẩm">
            <Slider />
            <section className="py-5 bg-gray-50 dark:bg-gray-800">
                <div className="px-4 py-4 mx-auto max-w-7xl lg:py-6 md:px-6">
                    {/* Breadcumb */}

                    <nav className="flex mb-3" >
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Trang chủ
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 hover:text-indigo-600">Sản phẩm</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className="flex flex-wrap mb-24 -mx-3 ">
                        <div className="w-full pr-4 lg:w-1/4 lg:block  ">
                            <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                                <h2 className="text-2xl font-bold dark:text-gray-400">
                                    Danh mục
                                </h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                                <ul>
                                    {
                                        categories.map((obj, index) => {
                                            return (
                                                <li className="mb-4" key={index}>
                                                    <label
                                                        className="flex items-center dark:text-gray-400 "
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 mr-2"
                                                            onChange={() => handleCategoryChange(obj.id)}
                                                            checked={selectedCategories.includes(obj.id)}
                                                        />
                                                        <span className="text-lg">{obj.name}</span>
                                                    </label>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-900">
                                <h2 className="text-2xl font-bold dark:text-gray-400">
                                    Thương hiệu
                                </h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                                <ul>
                                    {
                                        brands.map((obj, index) => {
                                            return (
                                                <li className="mb-4" key={index}>
                                                    <label
                                                        className="flex items-center dark:text-gray-400 "
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 mr-2"
                                                            onChange={() => handleBrandChange(obj.id)}
                                                            checked={selectedBrands.includes(obj.id)}
                                                        />
                                                        <span className="text-lg">{obj.name}</span>
                                                    </label>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-3 lg:w-3/4 ">
                            <div className="px-3 ">
                                <div className=" items-center justify-between hidden px-4 py-2 mb-4 bg-gray-100 md:flex dark:bg-gray-900 ">
                                    {/* input search */}

                                    <div className="">
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                                </svg>
                                            </div>
                                            <input
                                                onChange={(e) => onSearchItems(e.target.value)}
                                                type="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ps-10 p-2.5  "
                                                placeholder="Tìm kiếm sản phẩm" required />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <select
                                            defaultValue="latest"
                                            onChange={(e) => handleSortProduct(e.target.value)}
                                            className="block w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ">
                                            <option value="latest">Mới nhất</option>
                                            <option value="mostPopular">Phổ biến nhất</option>
                                            <option value="lowestPrice">Giá thấp nhất</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* All product */}
                            <div className="grid grid-cols-3 auto-cols-max gap-4">
                                {
                                    items.map((obj, index) => {
                                        return (
                                            <ProductItem key={index} product={obj} />
                                        )
                                    })
                                }
                            </div>
                            <div className="flex justify-center mt-6">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
