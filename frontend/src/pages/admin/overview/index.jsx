export default function OverviewPage(){
    return(
        <>
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

              
        </>
    )
}