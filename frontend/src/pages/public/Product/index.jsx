import { Link } from "react-router-dom";
import Slider from "./slider";
import PageLayout from "components/page-layout";
import PageTitle from "components/page-title";
import { API_URL } from "app/config";

function ProductPage() {
    return (
        <PageLayout title="Sản phẩm">
            <Slider />
            <section className="py-5 bg-gray-50 font-poppins dark:bg-gray-800">
                <div className="px-4 py-4 mx-auto max-w-7xl lg:py-6 md:px-6">
                    {/* Breadcumb */}

                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Trang chủ
                                </a>
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
                                    Loại hàng
                                </h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                                <ul>
                                    <li className="mb-4">
                                        <label
                                            htmlFor
                                            className="flex items-center dark:text-gray-400 "
                                        >
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg">Áo Polo</span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label
                                            htmlFor
                                            className="flex items-center dark:text-gray-400 "
                                        >
                                            <input type="checkbox" className="w-4 h-4 mr-2 " />
                                            <span className="text-lg capitalize">
                                                Áo thun thể thao
                                            </span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label
                                            htmlFor
                                            className="flex items-center dark:text-gray-400"
                                        >
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg capitalize">Quần short nam</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-900">
                                <h2 className="text-2xl font-bold dark:text-gray-400 ">
                                    Kích thước
                                </h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                                <div className="flex flex-wrap -mx-2 -mb-2">
                                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                                        XL
                                    </button>
                                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                                        S
                                    </button>
                                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                                        M
                                    </button>
                                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                                        XS
                                    </button>
                                </div>
                            </div>
                            <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                                <h2 className="text-2xl font-bold dark:text-gray-400">
                                    Màu sắc
                                </h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                                <div className="flex flex-wrap -mx-2 -mb-2">
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-emerald-400" />
                                    </button>
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-blue-700" />
                                    </button>
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-rose-600" />
                                    </button>
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-amber-700" />
                                    </button>
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-green-700" />
                                    </button>
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-pink-400" />
                                    </button>
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-indigo-400" />
                                    </button>
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-cyan-600" />
                                    </button>
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-stone-400" />
                                    </button>
                                    <button className="p-1 mb-2 mr-4 ">
                                        <div className="w-5 h-5 bg-yellow-400" />
                                    </button>
                                </div>
                            </div>

                            {/* Box */}
                        </div>
                        <div className="w-full px-3 lg:w-3/4 ">
                            <div className="px-3 ">
                                <div className=" items-center justify-between hidden px-4 py-2 mb-4 bg-gray-100 md:flex dark:bg-gray-900 ">
                                    {/* input search */}

                                    <form>
                                        <div className="flex items-center">
                                            <div
                                                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul
                                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdown-button"
                                                >
                                                    <li>
                                                        <button
                                                            type="button"
                                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Áo Polo
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            type="button"
                                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize"
                                                        >
                                                            Áo thun thể thao
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            type="button"
                                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize"
                                                        >
                                                            quần short nam
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="relative w-full">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                                    </svg>
                                                </div>
                                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Tìm kiếm sản phẩm" required />
                                            </div>
                                        </div>
                                    </form>

                                    <div className="flex items-center justify-between">

                                        <select className="block w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value selected>Mới nhất</option>
                                            <option value>Phổ biến nhất</option>
                                            <option value>Giá thấp nhất</option>
                                        </select>

                                    </div>
                                </div>
                            </div>

                            {/* All product */}
                            <div className="flex flex-wrap items-center ">
                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>
                                            <div className="absolute top-0 right-0 z-10 m-2 flex items-center justify-center p-2 text-center bg-red-600 ">
                                                <span className="relative text-base font-normal text-gray-100 ">
                                                    {" "}
                                                    New
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                    <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                                        <div className="relative bg-gray-200">
                                            <a href="#" className>
                                                <img
                                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                    alt
                                                    className="object-cover w-full h-56 mx-auto "
                                                />
                                            </a>

                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="w-full text-xl font-medium dark:text-gray-400">
                                                    Product name
                                                </h3>
                                            </div>
                                            <div className="mb-4 ">
                                                <p className="text-lg flex justify-between">
                                                    <span className="text-red-400 dark:text-gray-400">
                                                        $800.00
                                                    </span>
                                                    <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                        <a href="#" className>
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

                                            <a
                                                href="#"
                                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                                            >
                                                Thêm vào giỏ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end mt-6">
                                <nav aria-label="page-navigation">
                                    <ul className="flex list-style-none">
                                        <li className="page-item disabled ">
                                            <a
                                                href="#"
                                                className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-indigo-600"
                                            >
                                                Trước
                                            </a>
                                        </li>
                                        <li className="page-item ">
                                            <a
                                                href="#"
                                                className="relative block px-3 py-1.5 mr-3 text-base hover:text-indigo-700 transition-all duration-300 hover:bg-indigo-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-indigo-600"
                                            >
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item ">
                                            <a
                                                href="#"
                                                className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-indigo-100 rounded-md mr-3  "
                                            >
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item ">
                                            <a
                                                href="#"
                                                className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-indigo-100 rounded-md mr-3 "
                                            >
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item ">
                                            <a
                                                href="#"
                                                className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-indigo-100 rounded-md "
                                            >
                                                Sau
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}

export default ProductPage;
