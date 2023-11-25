import styles from "./Product.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Banner from "./Banner";
import Shirt from "./Shirt";
import Polo from "./Polo";
import Pants from "./Pants";
export { default as Shirt } from "./Shirt";
export { default as Polo } from "./Polo";
export { default as Pants } from "./Pants";

const cx = classNames.bind(styles);

function ProductAll() {
  return (
    // <div className={cx('wrapper')}>
    //     <Banner />
    //     <div className={cx('inner')}>

    //             <Shirt/>
    //             <Polo/>
    //             <Pants/>
    //     </div>
    // </div>

    <div className="">
      <Banner />
      <section className="py-20 bg-gray-50 font-poppins dark:bg-gray-800  ">
        <div className="px-4 py-4 mx-auto max-w-7xl lg:py-6 md:px-6">
          {/* Breadcumb */}

          <nav className="flex mb-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Trang chủ
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sản phẩm
                  </a>
                </div>
              </li>
            </ol>
          </nav>

          <div className="flex flex-wrap mb-24 -mx-3 ">
            <div className="w-full pr-4 lg:w-1/4 lg:block  ">
              <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                <h2 className="text-2xl font-bold dark:text-gray-400">
                  Loại sản phẩm
                </h2>
                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                <ul>
                  <li className="mb-4">
                    <label
                      htmlFor
                      className="flex items-center dark:text-gray-400"
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2" />
                      <span className="text-lg">Tất cả sản phẩm</span>
                    </label>
                  </li>

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
                  {/* <h2 className="text-2xl dark:text-gray-400">
                    Search Results for items
                  </h2> */}

                  {/* input search */}

                  <form>
                    <div className="flex items-center">
                      <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button"
                      >
                        Tất cả sản phẩm
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div
                        id="dropdown"
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
                        <input
                          type="search"
                          id="search-dropdown"
                          className=" w-[300px]  block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                          placeholder="Bạn đang muốn tìm..."
                          required
                        />
                        <button
                          type="submit"
                          className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-indigo-700 rounded-r-lg border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                          <span className="sr-only">Search</span>
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <a
                        href="#"
                        className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-5 h-5 bi bi-list"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-5 h-5 bi bi-grid-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="inline-block h-full p-2 mr-6 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-5 h-5 bi bi-grid-3x3-gap-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <select
                        name
                        id
                        className="block w-40 text-base bg-gray-100 dark:text-gray-400 dark:bg-gray-900"
                      >
                        <option value>Mới nhất</option>
                        <option value>Phổ biến nhất</option>
                        <option value>Giá thấp nhất</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-[30px] my-[20px] font-semibold">
                Tất cả sản phẩm
              </h1>

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

        {/* Comment */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
          <div className="max-w-[1320px] mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                Discussion (20)
              </h2>
            </div>
            <form className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={6}
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </form>
            <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      dateTime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
                <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownComment1"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                Very straight-to-point article. Really worth time reading. Thank
                you! But tools are just the instruments for the UX designers.
                The knowledge of the design tools are as important as the
                creation of the design strategy.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </button>
                
              </div>
            </article>
            <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="Jese Leos"
                    />
                    Jese Leos
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      dateTime="2022-02-12"
                      title="February 12th, 2022"
                    >
                      Feb. 12, 2022
                    </time>
                  </p>
                </div>
                <button
                  id="dropdownComment2Button"
                  data-dropdown-toggle="dropdownComment2"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownComment2"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                Much appreciated! Glad you liked it ☺️
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </button>
              </div>
            </article>
            <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie Green"
                    />
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      dateTime="2022-03-12"
                      title="March 12th, 2022"
                    >
                      Mar. 12, 2022
                    </time>
                  </p>
                </div>
                <button
                  id="dropdownComment3Button"
                  data-dropdown-toggle="dropdownComment3"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownComment3"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                The article covers the essentials, challenges, myths and stages
                the UX designer should consider while creating the design
                strategy.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </button>
              </div>
            </article>
            <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                      alt="Helene Engels"
                    />
                    Helene Engels
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time pubdate dateTime="2022-06-23" title="June 23rd, 2022">
                      Jun. 23, 2022
                    </time>
                  </p>
                </div>
                <button
                  id="dropdownComment4Button"
                  data-dropdown-toggle="dropdownComment4"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownComment4"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                Thanks for sharing this. I do came from the Backend development
                and explored some of the tools to design my Side Projects.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </button>
              </div>
            </article>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProductAll;
