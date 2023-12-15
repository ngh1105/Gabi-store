
export default function DescriptionSection() {
    return (

        <>
            <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 lg:h-screen">
                <div className="px-4 py-20 mx-auto max-w-7xl">
                    <div className="flex flex-wrap">
                        <div className="relative w-full mb-10 lg:mb-0 lg:mr-20 lg:w-2/5">
                            <div className="absolute z-10 hidden w-full h-[500px] bg-indigo-400 rounded -top-6 left-6 lg:block"></div>
                            <img
                                className="relative z-20 object-cover w-full h-[500px] rounded"
                                src="https://i.pinimg.com/564x/56/53/19/565319df58e19953437f14b894ab9609.jpg"
                            />
                        </div>
                        <div className="flex-1 pl-0 lg:pl-4 h-[600px]">
                            <div className="mb-12">
                                <div className="relative">
                                    <h1 className="absolute -top-14 -left-44 text-[120px] font-bold opacity-5">
                                        {" "}
                                        FEATURE
                                    </h1>
                                    <h1 className="text-3xl font-bold dark:text-white">
                                        {" "}
                                        Đặc điểm <span className="text-indigo-500">
                                            GABISTORE
                                        </span>{" "}
                                    </h1>
                                    <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                        <div className="flex-1 h-2 bg-indigo-200"></div>
                                        <div className="flex-1 h-2 bg-indigo-400"></div>
                                        <div className="flex-1 h-2 bg-indigo-600"></div>
                                    </div>
                                </div>
                                <p className="text-lg text-base text-gray-500">
                                    Chúng tôi luôn cam kết đem lại cho bạn những trải nghiệm tuyệt
                                    vời cùng với sản phẩm luôn đảm bảo tính thẫm mỹ, bền và giá cả
                                    phải chăng. Bạn sẽ luôn yên tâm khi sử dụng sản phẩm và dịch
                                    vụ bên chúng tôi
                                </p>
                            </div>
                            <div className="mb-[100px] grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                                <div className="w-full p-8 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                                    <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={30}
                                            height={30}
                                            fill="currentColor"
                                            className="text-white"
                                            viewBox="0 0 16 16"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 19 18"
                                            >
                                                <path
                                                    d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"
                                                    className="text-white"
                                                />
                                            </svg>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white">
                                        {" "}
                                        Luôn luôn hỗ trợ khách hàng{" "}
                                    </h3>
                                </div>
                                <div className="w-full p-8 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                                    <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={30}
                                            height={30}
                                            fill="currentColor"
                                            className="text-white"
                                            viewBox="0 0 16 16"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" className="text-white">
                                                </path>

                                            </svg>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white">
                                        {" "}
                                        Làm việc 24/7{" "}
                                    </h3>
                                </div>
                                <div className="w-full p-8 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                                    <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={30}
                                            height={30}
                                            fill="currentColor"
                                            className="text-white"
                                            viewBox="0 0 16 16"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 16 18"
                                            >
                                                <path
                                                    d="M8 18A18.55 18.55 0 0 1 0 3l8-3 8 3a18.549 18.549 0 0 1-8 15Z"
                                                    className="text-white"
                                                />
                                            </svg>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white">
                                        {" "}
                                        Chính sách bảo hành tốt nhất{" "}
                                    </h3>
                                </div>
                                <div className="w-full p-8 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                                    <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={30}
                                            height={30}
                                            fill="currentColor"
                                            className="text-white"
                                            viewBox="0 0 16 16"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z" className="text-white">
                                                </path>

                                            </svg>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-black dark:text-white">
                                        {" "}
                                        Luôn rạng rỡ khi đón khách{" "}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
