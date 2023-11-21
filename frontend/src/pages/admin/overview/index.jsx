import PageLayout from "components/page-layout";

export default function OverviewPage() {
    return (
        <PageLayout title="Tổng quan">
            <section className="px-4 pt-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-4xl font-bold dark:text-gray-300">$1239</p>
                            <button className="text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-medium text-gray-500 dark:text-gray-400">Loại hàng</h2>
                            <span className="inline-block px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">58%</span>
                        </div>
                        <div className="relative w-full h-1 mb-2 bg-gray-200 rounded">
                            <div className="absolute top-0 left-0 w-4/6 h-full bg-blue-500 rounded ">
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">tháng trươc</p>
                    </div>
                    <div className="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-4xl font-bold dark:text-gray-300">$1,00</p>
                            <button className="text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-medium text-gray-500 dark:text-gray-400">Sản phẩm</h2>
                            <span className="inline-block px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">80%</span>
                        </div>
                        <div className="relative w-full h-1 mb-2 bg-gray-200 rounded">
                            <div className="absolute top-0 left-0 w-10/12 h-full bg-red-500 rounded ">
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">tháng trước</p>
                    </div>
                    <div className="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-4xl font-bold dark:text-gray-300">$289</p>
                            <button className="text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-medium text-gray-500 dark:text-gray-400">Người dùng</h2>
                            <span className="inline-block px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">95%</span>
                        </div>
                        <div className="relative w-full h-1 mb-2 bg-gray-200 rounded">
                            <div className="absolute top-0 left-0 w-11/12 h-full bg-green-500 rounded ">
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">tháng trước</p>
                    </div>
                </div>
            </section>
            <section className="px-4 py-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 ">
                        <div className="flex flex-wrap justify-between mb-6">
                            <h2 className="py-1 text-xl font-semibold capitalize border-b border-blue-500 dark:text-gray-400">
                                Những đơn hàng gần đây
                            </h2>
                            <a href className="px-4 py-2 text-sm text-white capitalize bg-blue-500 rounded ">Xem tất cả</a>
                        </div>
                        <div>
                            <div className="flex justify-between mb-4">
                                <div className="flex gap-2">
                                    <img src="https://i.postimg.cc/x8LtrkfV/kenny-eliason-HIz-Gn9-FZDFU-unsplash.jpg" alt className="object-cover w-14 h-14" />
                                    <div className>
                                        <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                                            Quần đùi
                                        </h2>
                                        <div className="text-gray-400">Đã đặt</div>
                                    </div>
                                </div>
                                <div className><span className="font-medium text-blue-400">Số lượng:1</span></div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="flex gap-2">
                                    <img src="https://i.postimg.cc/K8qmN64m/pexels-javon-swaby-2783873.jpg" alt className="object-cover w-14 h-14" />
                                    <div className>
                                        <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                                            Đồng hồ
                                        </h2>
                                        <div className="text-gray-400">Đã đặt</div>
                                    </div>
                                </div>
                                <div className><span className="font-medium text-blue-400">Số lượng:1</span></div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="flex gap-2">
                                    <img src="https://i.postimg.cc/sgKB6VR6/ryan-plomp-a-Ctb-RTwu-M-unsplash-1.jpg" alt className="object-cover w-14 h-14" />
                                    <div className>
                                        <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                                            Giày thể thao
                                        </h2>
                                        <div className="text-gray-400">Đã đặt</div>
                                    </div>
                                </div>
                                <div className><span className="font-medium text-blue-400">Số lượng:1</span></div>
                            </div>
                            <div className="flex justify-between ">
                                <div className="flex gap-2">
                                    <img src="https://i.postimg.cc/XqBnTJBL/pink-sweater-front.jpg" alt className="object-cover w-14 h-14" />
                                    <div className>
                                        <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                                            Áo thun nam
                                        </h2>
                                        <div className="text-gray-400">Đã mua</div>
                                    </div>
                                </div>
                                <div className><span className="font-medium text-blue-400">Số lượng:1</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900">
                        <div className="flex flex-wrap justify-start mb-6">
                            <h2 className="py-1 text-xl font-semibold capitalize border-b border-blue-500 dark:text-gray-400">
                                Lịch</h2>
                        </div>
                        <div>
                            <div className="flex items-center justify-between px-4">
                                <span tabIndex={0} className="text-base font-bold text-gray-800 focus:outline-none dark:text-gray-100">Tháng 11
                                    2023</span>
                                <div className="flex items-center">
                                    <button aria-label="calendar backward" className="text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                    </button>
                                    <button aria-label="calendar forward" className="ml-3 text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-6 overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="flex justify-center w-full">
                                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                                        Su</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex justify-center w-full">
                                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                                        Mo</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex justify-center w-full">
                                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                                        Tu</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex justify-center w-full">
                                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                                        We</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex justify-center w-full">
                                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                                        Th</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex justify-center w-full">
                                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                                        Fr</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex justify-center w-full">
                                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                                        Sa</p>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pt-6">
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                </div>
                                            </td>
                                            <td className="pt-6">
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                </div>
                                            </td>
                                            <td className="pt-6">
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        1
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pt-6">
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        2
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="pt-6">
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base text-gray-500 dark:text-gray-400">3</p>
                                                </div>
                                            </td>
                                            <td className="pt-6">
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base text-gray-500 dark:text-gray-400">4</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        5
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        6
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        7
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        8
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        9
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base text-gray-500 dark:text-gray-400">10</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base text-gray-500 dark:text-gray-400">11</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        12
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        13
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        14
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        15
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        16
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base text-gray-500 dark:text-gray-400">17</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base text-gray-500 dark:text-gray-400">18</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        19
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="w-full h-full">
                                                    <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                        <a role="link" tabIndex={0} className="flex items-center justify-center w-8 h-8 text-base font-medium text-white bg-blue-600 rounded hover:bg-blue-500 ">20</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        21
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        22
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        23
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base text-gray-500 dark:text-gray-400">24</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base text-gray-500 dark:text-gray-400">25</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        26
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        27
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        28
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        29
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                                                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                        30
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </PageLayout>
    )
}