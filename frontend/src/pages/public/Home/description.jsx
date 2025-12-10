export default function DescriptionSection() {
    return (
        <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 lg:h-screen">
            <div className="px-4 py-20 mx-auto max-w-7xl">
                <div className="flex flex-wrap">
                    <div className="relative w-full mb-10 lg:mb-0 lg:mr-20 lg:w-2/5">
                        <div className="absolute z-10 hidden w-full h-[500px] bg-indigo-400 rounded -top-6 left-6 lg:block"></div>
                        <img
                            className="relative z-20 object-cover w-full h-[500px] rounded"
                            src="https://i.pinimg.com/564x/56/53/19/565319df58e19953437f14b894ab9609.jpg"
                            alt="feature"
                        />
                    </div>
                    <div className="flex-1 pl-0 lg:pl-4 h-[600px]">
                        <div className="mb-12">
                            <div className="relative">
                                <h1 className="absolute -top-14 -left-44 text-[120px] font-bold opacity-5">FEATURE</h1>
                                <h1 className="text-3xl font-bold dark:text-white">
                                    Gia tri noi bat <span className="text-indigo-500">E-Shop</span>
                                </h1>
                                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                    <div className="flex-1 h-2 bg-indigo-200"></div>
                                    <div className="flex-1 h-2 bg-indigo-400"></div>
                                    <div className="flex-1 h-2 bg-indigo-600"></div>
                                </div>
                            </div>
                            <p className="text-lg text-base text-gray-500">
                                E-Shop tap trung vao trai nghiem khach hang, san pham chat luong va gia ca hop ly.
                                He thong ho tro tu van nhanh, giao hang linh hoat va chinh sach doi tra ro rang.
                            </p>
                        </div>
                        <div className="mb-[100px] grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                            <FeatureCard title="Ho tro nhanh" description="Doi ngu ho tro 24/7 thong qua email va hotline." />
                            <FeatureCard title="Van hanh lien tuc" description="He thong luon san sang phuc vu don hang moi." />
                            <FeatureCard title="Bao hanh ro rang" description="Chinh sach doi/tra minh bach, bao hanh ro rang." />
                            <FeatureCard title="Tron ven trai nghiem" description="Mang den trai nghiem mua sam thoai mai cho moi khach hang." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, description }) {
    return (
        <div className="w-full p-8 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                <span className="text-white font-bold"></span>
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{description}</p>
        </div>
    );
}
