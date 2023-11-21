import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

function BestSeller() {

    const [bestSeller, setBestSeller] = useState([]);

    return (
        <div className="w-[1320px] m-auto mb-[100px]">
        <section className="flex items-center py-16 dark:bg-gray-800 font-poppins">
            <div className="p-4 mx-auto max-w-6xl">
                <h2 className="pb-4  font-bold text-center text-gray-800 text-[24px] dark:text-gray-400 uppercase">
                    Bán chạy nhất
                </h2>
                <div className="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400" />


                <div className="flex flex-wrap items-center ">
                    <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                        <div className="border border-gray-200 rounded-md dark:border-gray-800 shadow p-2 ">
                            <div className="relative bg-gray-200">
                                <a href="#" className>
                                    <img
                                        src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                        alt=""
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
                                        alt=""
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
                                        alt=""
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
                                        alt=""
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
                                        alt=""
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
                                        alt=""
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
            </div>
        </section>
    </div>
    );
}

export default BestSeller;
