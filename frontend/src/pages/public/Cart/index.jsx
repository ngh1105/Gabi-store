import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
    <div className="bg-gray-100 h-full pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold m-6">Giỏ hàng</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Sản phẩm</th>
                    <th className="text-left font-semibold">Đơn giá</th>
                    <th className="text-center font-semibold">Số lượng</th>
                    <th className="text-center font-semibold">Tổng cộng</th>
                    <th className="text-center font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 w-80">
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 mr-4"
                          src="https://via.placeholder.com/150"
                          alt="Product image"
                        />
                        <div className="pt-1 -mb-3" >
                        <span className="font-semibold w-52 -ml-2  ">
                          Product name
                        </span>
                        <div className="flex flex-wrap -ml-2 ">
                          <div class="flex items-center w-44">
                            <h2 class=" mr-2 text-sm dark:text-gray-400 opacity-80">
                              Màu sắc
                            </h2>
                            <div class="flex flex-wrap -mx-1 -mb-2">
                              <button class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                                <div class="w-4 h-4 bg-cyan-300"></div>
                              </button>
                              <button class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                <div class="w-4 h-4 bg-green-300 "></div>
                              </button>
                              <button class="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                <div class="w-4 h-4 bg-red-200 "></div>
                              </button>
                            </div>
                          </div>
                          <div class="flex items-center w-52 mb-2 ">
                            <h2 class="mr-2 text-sm dark:text-gray-400 opacity-80">
                              Size:
                            </h2>
                            <div class="flex flex-wrap mx-2 -mb-2">
                              <button class="py-1 mb-2 mr-1 border w-5 h-8 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                                XL
                              </button>
                              <button class="py-1 mb-2 mr-1 border w-5 h-8 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                                S
                              </button>
                              <button class="py-1 mb-2 mr-1 border w-5 h-8 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                                M
                              </button>
                              <button class="py-1 mb-2 mr-1 border w-5 h-8 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                                XS
                              </button>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">$19.99</td>
                    <td className="py-4 px-3 items-center ">
                      <div className="flex justify-center items-center">
                        <button className="border rounded-md px-2 mr-2">
                          -
                        </button>
                        <span className="text-center w-3">1</span>
                        <button className="border rounded-md px-2 ml-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-center">$19.99</td>
                    <td className="pl-3">
                      <button>
                        <svg
                          className="w-3 h-3 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  {/* More product rows */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Thành tiền</h2>
              <div className="flex justify-between mb-2">
                <span>Tổng đơn hàng</span>
                <span>10,000đ</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Phí vận chuyển</span>
                <span>10,000đ</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Tổng cộng</span>
                <span className="font-semibold">21.980đ</span>
              </div>
              <button className="bg-indigo-700 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
