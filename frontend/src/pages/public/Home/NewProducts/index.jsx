import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewProducts({ type }) {

    return (
        <div className="mx-auto max-w-screen-xl">
        <section className="">
            <div className="p-4 mx-auto">
                <h2 className="pb-4 font-bold text-center text-gray-800 text-[24px] dark:text-gray-400 uppercase">
                    Gợi ý dành cho bạn
                </h2>
                <div className="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400" />

                <h3 class="ml-2 text-lg text-indigo-500 text-center font-semibold dark:text-white uppercase">
                    Hàng mới về
                </h3>
                <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-[20px]">
                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                            <Link
                                href="#"
                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                            >
                                Thêm vào giỏ
                            </Link>
                        </div>
                    </div>

                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                {/* Love */}
                <h3 class="ml-2 my-5 leading-[20px] text-lg text-indigo-500  dark:text-indigo-400 font-semibold dark:text-white uppercase">
                    Sản phẩm yêu thích
                </h3>
                <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-[20px]">
                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                            <Link
                                href="#"
                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                            >
                                Thêm vào giỏ
                            </Link>
                        </div>
                    </div>

                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                <h3 class="ml-2 my-5 leading-[20px] text-lg text-indigo-500  dark:text-indigo-400 font-semibold dark:text-white uppercase">
                    Sản phẩm được quan tâm
                </h3>
                <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-[20px]">
                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                            <Link
                                href="#"
                                className="flex justify-center px-4 py-2 bg-indigo-700 text-gray-100 border border-indigo-300 rounded-full hover:opacity-[0.9]"
                            >
                                Thêm vào giỏ
                            </Link>
                        </div>
                    </div>

                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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

                    <div className="  border-gray-200 rounded-md dark:border-gray-800 shadow p-2 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
                        <div className="relative  border">
                            <a href="#" className="relative block h-64 overflow-hidden">
                                <img
                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                    alt
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
            </div>
        </section>
    </div>
    );
}

export default NewProducts;
