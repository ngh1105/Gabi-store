import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AboutPage() {
    return (
        <section className="flex items-center py-10 bg-stone-100 xl:min-h-screen font-poppins dark:bg-gray-800  ">
            <div className="justify-center flex-1 max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative">
                            <img
                                src="https://file.hstatic.net/1000184601/file/profile-img-5_b6ef82190aac43aba3d03e990d826458.jpg"
                                alt
                                className="relative z-40 object-cover w-full h-100 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                            />
                            <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 flex items-center">
                        <div className="relative w-full">
                            <h1 className="absolute -top-1/4 left-0 transform -translate-y-1/2 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                                GABI Store
                            </h1>
                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                Hành trình phát triển
                            </h1>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Có mặt từ năm 2009, với những nỗ lực không ngừng, Gabi Store đã
                                vươn mình mạnh mẽ và trở thành thương hiệu thời trang dành cho
                                cặp đôi đầu tiên tại Việt Nam. Trải qua 13 năm hình thành và
                                phát triển, Gabi Store hoàn thiện chuỗi hệ thống bán lẻ với 45
                                cửa hàng trực thuộc trên toàn quốc và đa dạng hơn về dòng sản
                                phẩm
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mt-10">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 flex items-center">
                        <div className="relative w-full">
                            <h1 className="absolute -top-1/2 left-0 transform -translate-y-1/2 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                                GABI
                            </h1>
                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                Hướng đến thời trang bền vững
                            </h1>
                            <p className="mt-6 mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Gabi Store chú trọng phát triển những sản phẩm hướng đến thời
                                trang bền vững bằng việc sử dụng các chất liệu thân thiện với
                                môi trường như: vải cotton, vải lanh, vải café, vải nhựa tái
                                chế,… Bên cạnh đó, Gabi Store còn thực hiện các chiến dịch nhằm
                                nâng cao nhận thức của người tiêu dùng về việc bảo vệ môi trường
                                & xây dựng thương hiệu thời trang hướng đến sự bền vững với các
                                chiến dịch: “Experience Nature” hợp tác cùng ca sĩ Trọng Hiếu,
                                “Experience The Change” hợp tác cùng game thủ Lê Vi & vận động
                                viên karate Trang Cẩm Lành.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative">
                            <img
                                src="https://file.hstatic.net/1000184601/file/profile-new-2_c3d71ea46248436699cc8b296fc2aeea.jpg"
                                alt
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
                                alt
                                className="relative z-40 object-cover w-full h-100 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                            />
                            <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 flex items-center">
                        <div className="relative w-full">
                            <h1 className="absolute -top-1/2 left-0 transform -translate-y-1/2 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                                GABI Store
                            </h1>
                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                Tầm nhìn & sứ mệnh 2024
                            </h1>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Mang đến những sản phẩm thời trang ứng dụng công nghệ tiên tiến
                                và dịch vụ vượt mong đợi cho khách hàng. Là người bạn đồng hành
                                đáng tin cậy trên chặng đường phát triển. Tạo ra môi trường làm
                                việc chuyên nghiệp, đạt được hiệu quả cao, đãi ngộ công bằng và
                                cùng nhau hưởng thụ thành quả đạt được từ sự nỗ lực không ngừng
                                của đội ngũ. Dung hòa lợi ích của công ty với trách nhiệm bảo vệ
                                môi trường và đóng góp tích cực vì sự phát triển của cộng đồng
                                xã hội.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mt-10">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 flex items-center">
                        <div className="relative w-full">
                            <h1 className="absolute -top-1/2 left-0 transform -translate-y-1/2 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                                GABI
                            </h1>
                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                WELCOME TO NEW GABI STORE
                            </h1>
                            <p className="mt-6 mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                GABI STORE là cửa hàng thời trang nam uy tín, chất lượng và luôn
                                đặt sự hài lòng khách hàng lên hàng đầu. Khi đến với GABI STORE,
                                bạn luôn là một vị khách đặc biệt, sẽ luôn có những sản phẩm
                                chất lượng, cùng với giá siêu hạt dẻ và đi kèm theo nhiều ưu
                                đãi, đảm bảo đến với GABI STORE bạn sẽ hài lòng vì chất lượng
                                sản phẩm lẫn dịch vụ
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative">
                            <img
                                src="https://file.hstatic.net/1000184601/file/profile-img-8_84ceaf2387d94838be96a16c13245a5d.jpg"
                                alt
                                className="relative z-40 object-cover w-full h-100 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                            />
                            <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -top-6 left-6 lg:block transform rotate-180"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
