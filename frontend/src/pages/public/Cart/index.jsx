import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
    <section className=" bg-gray-100 h-auto font-poppins dark:bg-gray-700 ">
      <div className="justify-center h-auto w-full flex-1 px-1 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <h2 className="mb-10 text-2xl font-bold text-center dark:text-gray-400">
          Giỏ hàng
        </h2>
        <div className="px-10 w-full lg:w-9/12"> 
        {/* ẩn class trên */}
          <div className="relative flex flex-wrap items-center px-6 mb-8 -mx-4 bg-white border rounded-md border-gray-200 dark:border-gray-700 xl:justify-between border-opacity-40">
            <label
              className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
              htmlFor="checkbox"
              data-ripple-dark="true"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-indigo-700y-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-indigo-700y-500 before:opacity-0 before:transition-opacity checked:border-indigo-700 checked:bg-indigo-700 checked:before:bg-indigo-700 hover:before:opacity-10"
                id="checkbox"
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </label>

            <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
              <div className="flex items-center">
                <a className="block mb-1 text-xl  dark:text-gray-400" href="#">
                  Sản phẩm
                </a>
              </div>
            </div>
            <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
              <div className="flex items-center">
                <a
                  className="block mb-1 text-sm text-gray-500 dark:text-gray-100"
                  href="#"
                >
                  Loại hàng
                </a>
              </div>
            </div>
            <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
              <div className="flex items-center">
                <a
                  className="block mb-1 text-sm text-gray-500 dark:text-gray-100"
                  href="#"
                >
                  Loại hàng
                </a>
              </div>
            </div>
            <div className="w-full  px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
              <div className="flex items-center">
                <a
                  className="block mb-1 text-sm text-gray-500 dark:text-gray-100"
                  href="#"
                >
                  Số lượng
                </a>
              </div>
            </div>
            <div className="w-full  px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
              <div className="flex items-center">
                <a
                  className="block mb-1 text-sm text-gray-500 dark:text-gray-100"
                  href="#"
                >
                  Thành tiền
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-wrap">
          <div className="w-full lg:w-9/12">
            <div className="px-10">
              <div className="relative flex flex-wrap items-center px-6 mb-8 -mx-4 bg-white border rounded-md border-gray-200 dark:border-gray-700 xl:justify-between border-opacity-40">
                <label
                  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-indigo-700y-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-indigo-700y-500 before:opacity-0 before:transition-opacity checked:border-indigo-700 checked:bg-indigo-700 checked:before:bg-indigo-700 hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>
                <div className="w-full flex items-center justify-center mb-2 lg:mb-0 h-96 md:h-44 md:w-44">
                  <img
                    src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/October2023/AtPL100-258-6.jpg"
                    alt
                    className="object-cover h-40 p-2"
                  />
                </div>
                <div className="w-full px-4 mb-6 md:w-auto xl:mb-0">
                  <a
                    className="block mb-5 text-xl font-medium dark:text-gray-400 hover:underline"
                    href="#"
                  >
                    Aádasdasda
                  </a>
                  <div className="flex flex-wrap">
                    <p className="mr-4 text-sm font-medium">
                      <span className="dark:text-gray-400">Màu:</span>
                      <span className="ml-2 text-gray-500 dark:text-gray-400">
                        A
                      </span>
                    </p>
                    <p className="text-sm font-medium dark:text-gray-400">
                      <span>Size:</span>
                      <span className="ml-2 text-gray-500">38</span>
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 xl:w-auto">
                  <span className="text-sm font-medium text-indigo-700 dark:text-gray-400 ">
                    <span className="text-sm">$</span>
                    <span className="text-lg">544.90</span>
                  </span>
                </div>
                <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
                  <div className="flex items-center ">
                    <div className="flex flex-wrap items-center ">
                      <div className="mb-4 mr-4 lg:mb-0">
                        <div className="w-28">
                          <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                            <button className="w-20 h-full text-gray-600 bg-gray-300 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                              <span className="m-auto text-2xl font-thin">
                                -
                              </span>
                            </button>
                            <input
                              type="number"
                              className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                              placeholder={1}
                            />
                            <button className="w-20 h-full text-gray-600 bg-gray-300 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                              <span className="m-auto text-2xl font-thin">
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 xl:w-auto">
                  <span className="text-sm font-medium text-indigo-700 dark:text-gray-400 ">
                    <span className="text-sm">$</span>
                    <span className="text-lg">544.90</span>
                  </span>
                </div>
                <button className="absolute top-1 right-5 text-gray-300 lg:mt-6 lg:-mr-4 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-6 h-6 bi bi-x-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/12">
            <div className="px-6 fixed mb-14">
              <div>
                <h2 className="mb-6 text-xl font-bold dark:text-gray-400">
                  Tổng tiền
                </h2>
                <div className="flex items-center justify-between px-10 text-sm py-1 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                  <span className="w-full">Phí giao hàng</span>
                  <span className="flex text-indigo-700 items-center text-xl">
                    <span className="text-lg">10,000</span>
                    <span className=" text-sm">đ</span>
                  </span>
                </div>
                <div className="flex items-center justify-between px-10 text-sm py-1 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                  <span className="w-full">Tổng thanh toán</span>
                  <span className="flex text-indigo-700 items-center text-xl">
                    <span className="text-lg">710,70</span>
                    <span className=" text-sm">đ</span>
                  </span>
                </div>
                <button
                  className="inline-block w-full px-24 py-1.5 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-indigo-700 lg:w-auto hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 rounded-xl"
                  href="#"
                >
                  Thanh Toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
