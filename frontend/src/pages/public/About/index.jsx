import React from "react";

export default function AboutPage() {
    return (
        <section className="flex items-center py-10 bg-stone-100 xl:min-h-screen font-poppins dark:bg-gray-800">
            <div className="justify-center flex-1 max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative">
                            <img
                                src="https://file.hstatic.net/1000184601/file/profile-img-5_b6ef82190aac43aba3d03e990d826458.jpg"
                                alt="about"
                                className="relative z-40 object-cover w-full h-100 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                            />
                            <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 flex items-center">
                        <div className="relative w-full">
                            <h1 className="absolute -top-1/4 left-0 transform -translate-y-1/2 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                                E-Shop
                            </h1>
                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                Hanh trinh phat trien
                            </h1>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                E-Shop huong toi trai nghiem mua sam hien dai, ket hop san pham thoi trang
                                chat luong va dich vu cham soc khach hang chu dong. Chung toi lien tuc cai tien
                                de phuc vu tot hon moi ngay.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mt-10">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 flex items-center">
                        <div className="relative w-full">
                            <h1 className="absolute -top-1/2 left-0 transform -translate-y-1/2 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                                E-Shop
                            </h1>
                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                Huong den ben vung
                            </h1>
                            <p className="mt-6 mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Chung toi uu tien chat lieu than thien moi truong va quy trinh san xuat trach nhiem.
                                Cam ket mang lai san pham ben vung, thoi trang va tu te voi moi truong.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative">
                            <img
                                src="https://file.hstatic.net/1000184601/file/profile-new-2_c3d71ea46248436699cc8b296fc2aeea.jpg"
                                alt="sustainable"
                                className="relative z-40 object-cover w-full h-100 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                            />
                            <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -top-6 left-6 lg:block transform rotate-180"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mt-10">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative">
                            <img
                                src="https://sackim.com/wp-content/uploads/2022/02/mau-poster-thoi-trang-dep-3.jpg"
                                alt="vision"
                                className="relative z-40 object-cover w-full h-100 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                            />
                            <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 flex items-center">
                        <div className="relative w-full">
                            <h1 className="absolute -top-1/2 left-0 transform -translate-y-1/2 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                                E-Shop
                            </h1>
                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                Tam nhin & su menh
                            </h1>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Muc tieu cua E-Shop la mang den san pham chat luong, gia tri thuc te va dich vu
                                dang tin cay. Chung toi xay dung moi truong lam viec cong bang va khuyen khich doi moi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
