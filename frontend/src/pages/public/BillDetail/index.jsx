import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

function BillDetail() {
  return (
    <section className=" h-full  xl:h-full font-poppins dark:bg-gray-700 ">
      <p className=" text-center text-2xl font-bold dark:text-gray-400">
        Đơn hàng đã được xác nhận
      </p>
      <p className=" text-center text-sm font-bold text-gray-400 dark:text-gray-400">
        Cảm ơn !
      </p>
      <div className="justify-center h-full flex-1 px-1 py-6 mx-auto max-w-7xl lg:py-4 md:px-48">
        <div className="flex flex-wrap bg-zinc-50 border-solid border-2 border-gray-200 rounded-xl h-full">
          <div className="w-full lg:w-1/2">
            <div className="px-5 pb-2">
              <p className=" mt-3 pb-2 ml-2 text-sm font-semibold dark:text-gray-400">
                Thông tin đơn hàng
              </p>
              <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                Mã đơn hàng: #123
              </p>
              <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                Ngày đặt hàng: 21/02/2003
              </p>
            </div>
            <hr className=" w-96 flex ml-8 mb-3 border-1 border-gray-300" />
            <div className="px-5 pb-2">
              <p className=" mt-3 pb-2 ml-2 text-sm font-semibold dark:text-gray-400">
                Thông tin giao hàng
              </p>
              <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                Địa chỉ giao hàng: 300 Nguyễn Tri Phương, Dĩ An, Bình Dương
              </p>
              <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                Tên người nhận: Diên Phúc
              </p>
              <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                Số điện thoại: 0963535922
              </p>
            </div>
            <hr className=" w-96 flex ml-8 mb-3 border-1 border-gray-300" />
            <div className="px-5 pb-2">
              <p className=" mt-3 pb-2 ml-2 text-sm font-semibold dark:text-gray-400">
                Phương thức thanh toán
              </p>
              <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                COD: 25,000đ
              </p>
            </div>
          </div>
          <div className="w-full border-solid border-l-4 border-l-gray-100 lg:w-1/2">
            <section className=" body-font overflow-hidden bg-gray-50">
              <div className="container">
                <p className="mt-2 pb-2 ml-6 text-sm font-semibold dark:text-gray-400">
                  Sản phẩm đã đặt
                </p>
                <div className="lg:w-4/5 pl-6 pb-4 flex flex-wrap  ">
                  <img
                    alt="ecommerce"
                    className=" lg:w-1/3 lg:h-1/3 w-3/5 flex text-center justify-center items-center object-cover object-center rounded-xl border border-gray-200"
                    src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/October2023/AtPL100-258-6.jpg"
                  />
                  <div className="lg:w-1/2 w-full lg:pl-1 lg:py-1 lg:mt-0">
                    <h1 className="text-gray-900 w-full text-left ml-3 mb-2 text-sm lg:p-0 title-font font-medium">
                      Apple Watch Series 7
                    </h1>
                    <div class="flex items-center mb-2 w-80">
                      <h2 class=" mr-2 ml-3 text-sm dark:text-gray-400 opacity-80">
                        Màu sắc:
                      </h2>
                      <div class="flex flex-wrap -mx-1 -mb-2">
                        <button class="py-1 mb-2 mr-1 w-11 dark:text-gray-400 ">
                          <div class="w-4 h-4 bg-cyan-300"></div>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center w-80 mb-2">
                      <h2 class="mr-2 ml-3 text-sm dark:text-gray-400 opacity-80">
                        Size:
                      </h2>
                      <div class="flex flex-wrap mx-1 -mb-2">
                        <p class="py-1 mb-2 mr-1 text-sm dark:text-gray-400">
                          XL
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center w-80 mb-2">
                      <h2 class="mr-2 ml-3 text-sm dark:text-gray-400 opacity-80">
                        Số lượng:
                      </h2>
                      <div class="flex flex-wrap mx-1 -mb-2">
                        <p class="py-1 mb-2 mr-1 text-sm dark:text-gray-400">
                          1
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <p className="text-gray-900 ml-3 lg:p-0 title-font font-medium mb-1 title-font text-xl">
                        58.00đ
                      </p>
                    </div>
                  </div>
                </div>
                <hr className=" w-96 flex ml-8 mb-6 border-1 border-gray-300" />
                <div className="lg:w-4/5 pl-6 pb-4 flex flex-wrap  ">
                  <img
                    alt="ecommerce"
                    className=" lg:w-1/3 lg:h-1/3 w-3/5 flex text-center justify-center items-center object-cover object-center rounded-xl border border-gray-200"
                    src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/October2023/AtPL100-258-6.jpg"
                  />
                  <div className="lg:w-1/2 w-full lg:pl-1 lg:py-1 lg:mt-0">
                    <h1 className="text-gray-900 text-left ml-3 mb-2 text-sm lg:p-0 title-font font-medium">
                      Tên sản phẩm
                    </h1>
                    <div class="flex items-center mb-2 w-80">
                      <h2 class=" mr-2 ml-3 text-sm dark:text-gray-400 opacity-80">
                        Màu sắc:
                      </h2>
                      <div class="flex flex-wrap -mx-1 -mb-2">
                        <button class="py-1 mb-2 mr-1 w-11 dark:text-gray-400 ">
                          <div class="w-4 h-4 bg-cyan-300"></div>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center w-80 mb-2">
                      <h2 class="mr-2 ml-3 text-sm dark:text-gray-400 opacity-80">
                        Size:
                      </h2>
                      <div class="flex flex-wrap mx-1 -mb-2">
                        <p class="py-1 mb-2 mr-1 text-sm dark:text-gray-400">
                          XL
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center w-80 mb-2">
                      <h2 class="mr-2 ml-3 text-sm dark:text-gray-400 opacity-80">
                        Số lượng:
                      </h2>
                      <div class="flex flex-wrap mx-1 -mb-2">
                        <p class="py-1 mb-2 mr-1 text-sm dark:text-gray-400">
                          1
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <p className="text-gray-900 ml-3 lg:p-0 title-font font-medium mb-1 title-font text-xl">
                        58.00đ
                      </p>
                    </div>
                  </div>
                </div>
                <hr className=" w-96 flex ml-8" />
                <div className="bg-white shadow-md p-6">
                  <div className="flex justify-between">
                    <span>Tổng đơn hàng</span>
                    <span>10,000đ</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BillDetail;
