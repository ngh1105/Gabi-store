import Api from "app/api";
import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import { useEffect, useState } from "react";
import utils from "utils";

export default function OverviewPage() {

    const [categoryCount, setCategoryCount] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [recentBills, setRecentBills] = useState([]);
    const [revenues, setRevenues] = useState([]);

    async function fetchData() {
        const resCategory = await Api.Get("/category/count-total");
        setCategoryCount(resCategory.response);

        const resProduct = await Api.Get("/product/count-total");
        setProductCount(resProduct.response);

        const resUser = await Api.Get("/user/count-total");
        setUserCount(resUser.response);

        const resBills = await Api.Get("/bill-detail/find-recently?limit=4");
        setRecentBills(resBills.response);

        const resRevenues = await Api.Get("/bill/find-revenue?months=4");
        setRevenues(resRevenues.response);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PageLayout title="Tổng quan">
            <section className="px-4 pt-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-4xl font-bold dark:text-gray-300">{categoryCount}</p>
                            <button className="text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-medium text-gray-500 dark:text-gray-400">Loại hàng</h2>
                            <span className=""></span>
                        </div>
                        <div className="relative w-full h-1 mb-2 bg-gray-200 rounded">
                            <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded ">
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Toàn bộ</p>
                    </div>
                    <div className="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-4xl font-bold dark:text-gray-300">{productCount}</p>
                            <button className="text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-medium text-gray-500 dark:text-gray-400">Sản phẩm</h2>
                            <span className=""></span>
                        </div>
                        <div className="relative w-full h-1 mb-2 bg-gray-200 rounded">
                            <div className="absolute top-0 left-0 w-full h-full bg-red-500 rounded ">
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Toàn bộ</p>
                    </div>
                    <div className="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-4xl font-bold dark:text-gray-300">{userCount}</p>
                            <button className="text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-medium text-gray-500 dark:text-gray-400">Người dùng</h2>
                            <span className=""></span>
                        </div>
                        <div className="relative w-full h-1 mb-2 bg-gray-200 rounded">
                            <div className="absolute top-0 left-0 w-full h-full bg-green-500 rounded ">
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Toàn bộ</p>
                    </div>
                </div>
            </section>
            <section className="px-4 py-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 ">
                        <div className="flex flex-wrap justify-between mb-6">
                            <h2 className="py-1 text-xl font-semibold capitalize border-b border-indigo-500 dark:text-gray-400">
                                Được mua gần đây
                            </h2>
                        </div>
                        <div>
                            {
                                recentBills.map((obj, index) => {
                                    return (
                                        <div key={index} className="flex justify-between mb-4">
                                            <div className="flex gap-2">
                                                <img src={`${API_URL}${obj.imageUrl}`} alt="" className="object-cover w-14 h-14" />
                                                <div className>
                                                    <h2 className="py-1 text-lg font-medium">
                                                        {obj.name}
                                                    </h2>
                                                    <div className="text-gray-400">{utils.formatVND(obj.price * obj.quantity)}</div>
                                                </div>
                                            </div>
                                            <div className><span className="font-medium text-indigo-600">Số lượng: {obj.quantity}</span></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900">
                        <div className="flex flex-wrap justify-between mb-6">
                            <h2 className="py-1 text-xl font-semibold capitalize border-b border-indigo-500 dark:text-gray-400">
                                Doanh thu các tháng
                            </h2>
                        </div>
                        <div>
                            {
                                revenues.map((obj, index) => {
                                    return (
                                        <div key={index} className="flex gap-3 py-4 items-center border-b border-indigo-500">
                                            <h2 className="text-lg font-medium">
                                                {obj.date}:
                                            </h2>
                                            <div className><span className="text-lg text-green-500">{utils.formatVND(obj.revenue)}</span></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </PageLayout>
    )
}