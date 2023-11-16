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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 mr-4"
                          src="https://via.placeholder.com/150"
                          alt="Product image"
                        />
                        <span className="font-semibold">Product name</span>
                      </div>
                    </td>
                    <td className="py-4">$19.99</td>
                    <td className="py-4 items-center ">
                      <div className="flex justify-center items-center">
                        <button className="border rounded-md py-2 px-4 mr-2">
                          -
                        </button>
                        <span className="text-center w-8">1</span>
                        <button className="border rounded-md py-2 px-4 ml-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-center">$19.99</td>
                  </tr>
                  {/* More product rows */}
                </tbody>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 mr-4"
                          src="https://via.placeholder.com/150"
                          alt="Product image"
                        />
                        <span className="font-semibold">Product name</span>
                      </div>
                    </td>
                    <td className="py-4">$19.99</td>
                    <td className="py-4 items-center ">
                      <div className="flex justify-center items-center">
                        <button className="border rounded-md py-2 px-4 mr-2">
                          -
                        </button>
                        <span className="text-center w-8">1</span>
                        <button className="border rounded-md py-2 px-4 ml-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-center">$19.99</td>
                  </tr>
                  {/* More product rows */}
                </tbody>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 mr-4"
                          src="https://via.placeholder.com/150"
                          alt="Product image"
                        />
                        <span className="font-semibold">Product name</span>
                      </div>
                    </td>
                    <td className="py-4">$19.99</td>
                    <td className="py-4 items-center ">
                      <div className="flex justify-center items-center">
                        <button className="border rounded-md py-2 px-4 mr-2">
                          -
                        </button>
                        <span className="text-center w-8">1</span>
                        <button className="border rounded-md py-2 px-4 ml-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-center">$19.99</td>
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
