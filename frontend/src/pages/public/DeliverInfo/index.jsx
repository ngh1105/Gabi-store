import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DeliverInfo() {
  return (
    <section className=" h-full  xl:h-screen font-poppins dark:bg-gray-700 ">
      <div className="justify-center h-full flex-1 px-1 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div className="flex flex-wrap bg-gray-100 border-solid border-2 border-gray-200 rounded-xl h-full">
          <div className="w-full lg:w-7/12">
            <div className="px-5">
              <p className="mb-1 mt-3 ml-2 text-base font-bold dark:text-gray-400">
                Thông tin vận chuyển
              </p>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <div className="mt-2.5">
                    <input
                      placeholder="Họ và tên"
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="given-name"
                      className="block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5">
                    <input
                      placeholder="Số điện thoại"
                      type="text"
                      name="sdt"
                      id="sdt"
                      autoComplete="family-name"
                      className="block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-3">
                  <input
                    placeholder="Email"
                    type="text"
                    name="=email"
                    id="=email"
                    autoComplete="organization"
                    className="block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-3">
                  <input
                    placeholder="Địa chỉ"
                    type="text"
                    name="=adress"
                    id="=adress"
                    autoComplete="organization"
                    className="block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-3">
                  <input
                    placeholder="Ghi chú"
                    type="text"
                    name="=adress"
                    id="=adress"
                    autoComplete="organization"
                    className="block w-full h-auto rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <p className="mb-3 mt-3 ml-1 text-base font-bold dark:text-gray-400">
                Phương thức thanh toán
              </p>

              <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <div className="w-full border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      name="check"
                      id="cod-checkbox"
                      type="radio"
                      defaultValue
                      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded-full focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="cod-checkbox"
                      className="w-full ml-5 py-3 ms-2 text-sm text-gray-900 dark:text-gray-300"
                    >
                      COD
                    </label>
                  </div>
                  </div>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                    name="check"
                      id="bank-checkbox"
                      type="radio"
                      defaultValue
                      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded-full focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="bank-checkbox"
                      className="w-full ml-5 py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Ngân hàng
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                    name="check"
                      id="Ví điện tử Momo-checkbox"
                      type="radio"
                      defaultValue
                      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded-full focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="Ví điện tử Momo-checkbox"
                      className="w-full ml-5 py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Ví điện tử Momo
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                    name="check"
                      id="Ví điện tử ZaloPay-checkbox"
                      type="radio"
                      defaultValue
                      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded-full focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="Ví điện tử ZaloPay-checkbox"
                      className="w-full ml-5 py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Ví điện tử ZaloPay
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="px-6 mb-14">
              <div className="mb-10">
                <span className="mb-6 text-sm font-bold text-gray-700 dark:text-gray-400">
                  Apply Coupon
                </span>
                <input
                  type="text"
                  className="flex-1 w-full px-8 py-2 mt-4 font-normal placeholder-gray-400 border dark:bg-gray-800 rounded-xl dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400"
                  placeholder="x304k45"
                  required
                />
                <a
                  className="inline-block w-full px-40 py-1.5 mt-4 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-blue-500 lg:w-full lg:px-28 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  href="#"
                >
                  Apply
                </a>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-bold dark:text-gray-400">
                  Cart totals
                </h2>
                <div className="flex items-center justify-between px-10 py-1 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                  <span>Subtotal</span>
                  <span className="flex items-center text-xl">
                    <span className="text-lg">710,70</span>
                    <span className=" text-sm">đ</span>
                  </span>
                </div>
                <div className="flex items-center justify-between px-10 py-1 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                  <span>Shipping</span>
                  <span className="flex items-center text-xl">
                    <span className="text-lg">10,00</span>
                    <span className=" text-sm">đ</span>
                  </span>
                </div>
                <div className="flex items-center justify-between px-10 py-1 mb-6 font-medium leading-8 bg-gray-100 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                  <span>Total</span>
                  <span className="flex items-center text-xl text-blue-500 dark:text-blue-400">
                    <span className="text-lg">720,70</span>
                    <span className=" text-sm">đ</span>
                  </span>
                </div>
                <a
                  className="inline-block w-full px-40 py-1.5 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-blue-500 lg:w-full lg:px-28 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  href="#"
                >
                  Thanh Toán
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverInfo;
