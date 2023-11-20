import React from 'react';
import classNames from 'classnames/bind';
import styles from './StoryDetail.module.scss';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import { useMemo, useState } from "react"

const cx = classNames.bind(styles);

function StoryDetail() {
    const tabs = useMemo(() => [
        {

            img1: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://img.freepik.com/free-vector/friendly-seamstresses-measuring-woman-clothes-sewing-modern-atelier_1284-58890.jpg?size=626&ext=jpg&ga=GA1.1.544104556.1700111454&semt=ais",
            img3: "https://img.freepik.com/free-photo/creating-clothes_1098-12751.jpg?size=626&ext=jpg&ga=GA1.1.544104556.1700111454&semt=ais",
            img4: "https://img.freepik.com/free-photo/workshop-is-full-work-by-tailors_329181-14375.jpg?size=626&ext=jpg&ga=GA1.1.544104556.1700111454&semt=ais",
            img5: "https://img.freepik.com/free-photo/colorful-equality-lettering-with-pencils_23-2148415302.jpg?size=626&ext=jpg&ga=GA1.1.544104556.1700111454&semt=ais",
            title1: "HƯỚNG ĐẾN THỜI TRANG BỀN VỮNG",
            title2:"Theo tiêu chí 3E, một doanh nghiệp, tổ chức hay quốc gia muốn theo đuổi tính bền vững cần phải đảm bảo tiêu chí sau:",
            title3: "1. Ecology – Hệ sinh thái:",
            title4: "2. Economics – Sự phát triển kinh tế:",
            title5: "3. Social Equity – Công bằng xã hội:",
            content1v1: "Thời trang bền vững là một xu hướng mới của ngành thời trang, nhằm giảm thiểu tác động tiêu cực của ngành công nghiệp thời trang đến môi trường và xã hội.",
            content1v2: "Theo đó, các sản phẩm thời trang bền vững được sản xuất từ nguyên liệu tái chế, sử dụng quy trình sản xuất xanh, và có khả năng tái chế hoặc phân hủy sinh học cao.",
            content1v3: "Ngoài ra, thời trang bền vững còn đòi hỏi các doanh nghiệp thời trang phải đảm bảo quyền lợi và điều kiện làm việc cho người lao động trong chuỗi cung ứng, và tôn trọng các giá trị đạo đức và xã hội.",
            content1v4: "Các doanh nghiệp thời trang có thể áp dụng nhiều giải pháp để hướng đến thời trang bền vững, bao gồm sử dụng nguyên liệu tái chế, tối ưu hóa quy trình sản xuất, tăng cường quản lý kho.",
            content1v5: "Tìm kiếm đối tác vận chuyển chi phí thấp, và tìm kiếm thị trường mới để xuất khẩu sản phẩm.",
            content2v1: "Tiêu chí liên quan đến việc bảo vệ các hệ thống và chức năng tự nhiên của Trái Đất. Tiêu chí này có thể hiểu đơn giản là các hoạt động nhằm bảo vệ môi trường sống và giảm lượng chất thải độc hại ra môi trường tự nhiên. Các hoạt động này vừa giúp bảo vệ môi trường sống trong hiện tại, vừa tạo một môi trường đáng sống hơn cho các thế hệ tương lai.",
            content3v1: "Tiêu chí này đảm bảo rằng mọi người đều có thể tiếp cận với các nguồn tài nguyên để đảm bảo mức sống chất lượng cao và đầy đủ nhất. Ngoài ra, tiêu chí này đòi hỏi các hoạt động giúp phát triển kinh tế nhưng không làm ảnh hưởng đến môi trường hoặc các thế hệ tương lai..",
            content4v1:"Công bằng xã hội giải quyết vấn đề phân bổ không đồng đều về mọi phương diện giữa các cá nhân với nhau.",
            content4v2:"Nếu bạn quan tâm đến thời trang bền vững, hãy tham khảo bài viết của GabiStore. Bài viết này cung cấp thông tin về xu hướng thời trang bền vững, nguồn gốc của thuật ngữ Sustainability, tiêu chí của tính bền vững, và nhiều hơn nữa.",
        },
    ])
    return (
        tabs.map((bnm, index) => {
            return (
                // <div key={index}>
                //     <div
                //         className="object-cover w-full bg-center bg-cover h-[15rem] "
                //         style={{
                //             backgroundImage:
                //                 "url(https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
                //         }}
                //     >
                //         <div className="flex items-center justify-center w-full h-full bg-blue-800 bg-opacity-50 ">
                //             <div className="text-center">
                //                 <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
                //                     CÂU CHUYỆN CỦA CHÚNG TÔI{" "}
                //                 </h1>
                //             </div>
                //         </div>
                //     </div>
                //     {/*  End Banner */}

                //     {/* Content 1 */}
                //     <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                //         <div className="grid grid-cols-2 gap-4 mt-8">
                //             <img className="w-full rounded-lg" src={bnm.img1} alt="office content 1" />
                //             <img className="mt-4 w-full lg:mt-10 rounded-lg" src={bnm.img2} alt="office content 2" />
                //         </div>
                //         <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                //             <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 dark:text-white">{bnm.title1}</h2>
                //             <p className="mb-4 text-[18px]">{bnm.content1v1}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content1v2}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content1v3}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content1v4}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content1v5}</p>
                //         </div>

                //     </div>
                //     {/* End Content 1 */}

                //     {/* Content 2 */}
                //     <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                //         <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                //             <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 dark:text-white">{bnm.title2}</h2>
                //             <p className="mb-4 text-[18px]">{bnm.content2v1}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content2v2}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content2v3}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content2v4}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content2v5}</p>
                //         </div>
                //         <div className="grid grid-cols-2 gap-4 mt-8">
                //             <img className="w-full rounded-lg" src={bnm.img1} alt="office content 2" />
                //             <img className="mt-4 w-full lg:mt-10 rounded-lg" src={bnm.img2} alt="office content 2" />
                //         </div>
                //     </div>
                //     {/* End Content 2 */}

                //     {/* Content 3 */}
                //     <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                //         <div className="grid grid-cols-2 gap-4 mt-8">
                //             <img className="w-full rounded-lg" src={bnm.img1} alt="office content 2" />
                //             <img className="mt-4 w-full lg:mt-10 rounded-lg" src={bnm.img2} alt="office content 2" />
                //         </div>
                //         <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                //             <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 dark:text-white">{bnm.title3}</h2>
                //             <p className="mb-4 text-[18px]">{bnm.content3v1}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content3v2}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content3v3}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content3v4}</p>
                //             <p className='mb-4 text-[18px]'>{bnm.content3v5}</p>
                //         </div>

                //     </div>
                //     {/* End Content 3 */}
                // </div>        
                <section className="pb-11 dark:bg-gray-900">

                    <div className="max-w-screen-xl mx-auto">
                        <div className="grid lg:grid-cols-[70%,1fr]  gap-4  pt-9 pb-7">
                            <div>
                                <div className="p-4 ">
                                    <img
                                        src={bnm.img1}
                                        className="object-cover w-full rounded-md h-96"
                                    />
                                    <div className="flex mt-6 mb-4 ">
                                        <a
                                            href="#"
                                            class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="w-4 h-4 mr-1 bi bi-eye"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="w-4 h-4 mr-1 bi bi-eye"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    
                                    <div className=" font-poppins dark:text-gray-400">
                                        <h2 className="mb-4 text-2xl font-semibold font-poppins dark:text-gray-300">
                                        {bnm.title1}
                                        </h2>
                                        <p className='font-light'>{bnm.content1v1}</p>
                                        <p className='font-light'>{bnm.content1v2}</p>
                                        <p className='font-light'>{bnm.content1v3}</p>
                                        <p className='font-light'>{bnm.content1v4}</p>
                                        <p className='font-light'>{bnm.content1v5}</p>
                                        <p className="pb-4"></p>
                                        <img
                                            src={bnm.img2}
                                            className="object-cover w-full rounded-md h-96"
                                        />
                                    </div>

                                    <div className=" pt-3 font-poppins dark:text-gray-400">
                                    <h2 className="mb-3 text-2xl font-semibold font-poppins dark:text-gray-300">
                                        {bnm.title2}
                                        </h2>
                                        <h2 className="mb-3 text-2xl font-semibold font-poppins dark:text-gray-300">
                                        {bnm.title3}
                                        </h2>
                                        <p className='font-light'>{bnm.content2v1}</p>
                                        <p className="pb-4"></p>
                                        <img
                                            src={bnm.img3}
                                            className="object-cover w-full rounded-md h-96"
                                        />
                                    </div>

                                    <div className=" pt-3 font-poppins dark:text-gray-400">
                                        <h2 className="mb-3 text-2xl font-semibold font-poppins dark:text-gray-300">
                                        {bnm.title4}
                                        </h2>
                                        <p className='font-light'>{bnm.content3v1}</p>
                                        <p className="pb-4"></p>
                                        <img
                                            src={bnm.img4}
                                            className="object-cover w-full rounded-md h-96"
                                        />
                                    </div>
                                   
                                    <div className=" pt-3 font-poppins dark:text-gray-400">
                                        <h2 className="mb-3 text-2xl font-semibold font-poppins dark:text-gray-300">
                                        {bnm.title5}
                                        </h2>
                                        <p className='font-light'>{bnm.content4v1}</p>
                                        <p className="pb-4"></p>
                                        <img
                                            src={bnm.img5}
                                            className="object-cover w-full rounded-md h-96"
                                        />
                                        <p className='pt-3 font-light'>{bnm.content4v2}</p>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <h2 className="pb-2 mt-4 text-lg font-semibold text-gray-900 dark:text-gray-400 font-poppins">
                                        Tags
                                    </h2>
                                    <div className="w-16 mb-3 border-b-2 border-blue-500 dark:border-gray-400 inset-px" />
                                    <div className="flex flex-wrap gap-2 my-4 font-poppins ">
                                        <a
                                            className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-gray-800 hover:text-white"
                                            href="#"
                                        >
                                            Corporate
                                        </a>
                                        <a
                                            className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 hover:text-white dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-gray-800"
                                            href="#"
                                        >
                                            Business
                                        </a>
                                        <a
                                            className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 hover:text-white dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-gray-800"
                                            href="#"
                                        >
                                            Field
                                        </a>
                                    </div>
                                    <div className="flex flex-wrap items-center ">
                                        <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                            <div className="border border-gray-200 rounded-md dark:border-gray-800">
                                                <div className="relative bg-gray-200">
                                                    <a href="#" className>
                                                        <img
                                                            src="https://i.postimg.cc/NGCTCW70/pexels-mike-250288.jpg"
                                                            alt
                                                            className="object-cover w-full h-56 mx-auto "
                                                        />
                                                    </a>
                                                    <div className="absolute top-0 right-0 z-10 m-1 flex items-center justify-center w-16 h-16 p-5 text-center text-gray-100 bg-red-600 rounded-full shadow-xl ">
                                                        <span className="relative text-base font-semibold text-gray-200 ">
                                                            Mới nhất
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-xl font-medium dark:text-gray-400">
                                                            Product name
                                                        </h3>
                                                        <a href="#" className>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="text-red-500 dark:text-gray-400 bi bi-heart"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="mb-4 ">
                                                        <p className="text-lg flex justify-between">
                                                            <span className="text-red-400 dark:text-gray-400">
                                                                $800.00
                                                            </span>
                                                            <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                                Lượt xem : 160
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <a
                                                        href="#"
                                                        className="flex justify-center px-4 py-2 text-indigo-600 border border-indigo-300 rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-indigo-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                                                    >
                                                        Thêm vào giỏ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                            <div className="border border-gray-200 rounded-md dark:border-gray-800">
                                                <div className="relative bg-gray-200">
                                                    <a href="#" className>
                                                        <img
                                                            src="https://i.postimg.cc/8CbfR3zN/light-grey-t-shirt-front.jpg"
                                                            alt
                                                            className="object-cover w-full h-56 mx-auto "
                                                        />
                                                    </a>
                                                </div>
                                                <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-xl font-medium dark:text-gray-400">
                                                            Product name
                                                        </h3>
                                                        <a href="#" className>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="text-red-500 dark:text-gray-400 bi bi-heart"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="mb-4 ">
                                                        <p className="text-lg flex justify-between ">
                                                            <span className="text-red-400 dark:text-gray-400">
                                                                $900.00
                                                            </span>
                                                            <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                                Lượt xem : 160
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <a
                                                        href="#"
                                                        className="flex justify-center px-4 py-2 text-indigo-600 border border-indigo-300 rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-indigo-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                                                    >
                                                        Thêm vào giỏ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                            <div className="border border-gray-200 rounded-md dark:border-gray-800">
                                                <div className="relative bg-gray-200">
                                                    <a href="#" className>
                                                        <img
                                                            src="https://i.postimg.cc/pdd5BChj/pexels-nathan-j-hilton-4277508.jpg"
                                                            alt
                                                            className="object-cover w-full h-56 mx-auto "
                                                        />
                                                    </a>
                                                </div>
                                                <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-xl font-medium dark:text-gray-400">
                                                            Product name
                                                        </h3>
                                                        <a href="#" className>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="text-red-500 dark:text-gray-400 bi bi-heart"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="mb-4 ">
                                                        <p className="text-lg flex justify-between ">
                                                            <span className="text-red-400 dark:text-gray-400">
                                                                $1000.00
                                                            </span>
                                                            <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                                Lượt xem : 160
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <a
                                                        href="#"
                                                        className="flex justify-center px-4 py-2 text-indigo-600 border border-indigo-300 rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-indigo-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                                                    >
                                                        Thêm vào giỏ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                            <div className="border border-gray-200 rounded-md dark:border-gray-800">
                                                <div className="relative bg-gray-200">
                                                    <a href="#" className>
                                                        <img
                                                            src="https://i.postimg.cc/XvTNykw4/black-front-sweater.jpg"
                                                            alt
                                                            className="object-cover w-full h-56 mx-auto "
                                                        />
                                                    </a>
                                                </div>
                                                <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-xl font-medium dark:text-gray-400">
                                                            Product name
                                                        </h3>
                                                        <a href="#" className>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="text-red-500 dark:text-gray-400 bi bi-heart"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="mb-4 ">
                                                        <p className="text-lg flex justify-between ">
                                                            <span className="text-red-400 dark:text-gray-400">
                                                                $700.00
                                                            </span>
                                                            <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                                Lượt xem : 160
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <a
                                                        href="#"
                                                        className="flex justify-center px-4 py-2 text-indigo-600 border border-indigo-300 rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-indigo-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                                                    >
                                                        Thêm vào giỏ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                            <div className="border border-gray-200 rounded-md dark:border-gray-800">
                                                <div className="relative bg-gray-200">
                                                    <a href="#" className>
                                                        <img
                                                            src="https://i.postimg.cc/wjCnXfbf/pexels-timothy-paule-ii-2002717.jpg"
                                                            alt
                                                            className="object-cover w-full h-56 mx-auto "
                                                        />
                                                    </a>
                                                    <div className="absolute top-0 right-0 z-10 m-2 flex items-center justify-center p-2 text-center bg-indigo-600 ">
                                                        <span className="relative text-base font-normal text-gray-100 ">
                                                            New
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-xl font-medium dark:text-gray-400">
                                                            Product name
                                                        </h3>
                                                        <a href="#" className>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="text-red-500 dark:text-gray-400 bi bi-heart"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="mb-4 ">
                                                        <p className="text-lg flex justify-between ">
                                                            <span className="text-red-400 dark:text-gray-400">
                                                                $600.00
                                                            </span>
                                                            <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                                Lượt xem : 160
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <a
                                                        href="#"
                                                        className="flex justify-center px-4 py-2 text-indigo-600 border border-indigo-300 rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-indigo-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                                                    >
                                                        Thêm vào giỏ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                                            <div className="border border-gray-200 rounded-md dark:border-gray-800">
                                                <div className="relative bg-gray-200">
                                                    <a href="#" className>
                                                        <img
                                                            src="https://i.postimg.cc/tghbJjN7/pexels-web-donut-19090.jpg"
                                                            alt
                                                            className="object-cover w-full h-56 mx-auto "
                                                        />
                                                    </a>
                                                </div>
                                                <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-xl font-medium dark:text-gray-400">
                                                            Product name
                                                        </h3>
                                                        <a href="#" className>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="text-red-500 dark:text-gray-400 bi bi-heart"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="mb-4 ">
                                                        <p className="text-lg flex justify-between ">
                                                            <span className="text-red-400 dark:text-gray-400">
                                                                $900.00
                                                            </span>
                                                            <span className="ml-2 text-gray-400  dark:text-gray-400">
                                                                Lượt xem : 160
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <a
                                                        href="#"
                                                        className="flex justify-center px-4 py-2 text-indigo-600 border border-indigo-300 rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-indigo-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                                                    >
                                                        Thêm vào giỏ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 lg:px-0">
                                <div className="px-2 pt-4 lg:px-0 dark:border-gray-700">
                                    <div>
                                        <h2 className="pb-2 text-lg font-semibold leading-5 tracking-tight text-gray-900 dark:text-gray-300 ">
                                            CÓ THỂ BẠN QUAN TÂM
                                        </h2>
                                        <div className="w-16 mb-5 border-b-2 border-blue-400 inset-px " />
                                        <div className="flex w-full mb-4 border-b border-gray-200 dark:border-gray-700">
                                            <div>
                                                <img
                                                    className="object-cover w-20 h-20 mr-4 rounded"
                                                    src="https://i.postimg.cc/SKtsKrRX/pexels-marc-mueller-380769.jpg"
                                                    alt
                                                />
                                            </div>
                                            <div className="flex-1 mb-5">
                                                <h2 className="mb-1 text-base font-medium tracking-tight text-gray-700 hover:text-blue-600 dark:text-gray-400">
                                                    <a href="#">
                                                        Top 11 mẫu đồng phục tiếp viên hàng không đẹp chuyên
                                                        nghiệp
                                                    </a>
                                                </h2>
                                                <a
                                                    href="#"
                                                    className="flex items-center mr-6 no-underline "
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-3 h-3 text-blue-600 dark:text-blue-400 bi bi-calendar"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                    </svg>
                                                    <span className="ml-2 text-xs text-gray-500 dark:text-blue-400 hover:text-blue-600">
                                                        May10, 2022
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex w-full mb-4 border-b border-gray-200 dark:border-gray-700">
                                            <div>
                                                <img
                                                    className="object-cover w-20 h-20 mr-4 rounded"
                                                    src="https://i.postimg.cc/63GLBzwc/aqq.jpg"
                                                    alt
                                                />
                                            </div>
                                            <div className="flex-1 mb-5">
                                                <h2 className="mb-1 text-base font-medium tracking-tight text-gray-700 hover:text-blue-600 dark:text-gray-400">
                                                    <a href="#">
                                                        Bí kíp tạo dáng chụp ảnh nam đẹp ngầu như mẫu nam Hàn
                                                        Quốc
                                                    </a>
                                                </h2>
                                                <a
                                                    href="#"
                                                    className="flex items-center mr-6 no-underline "
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-3 h-3 text-blue-600 dark:text-blue-400 bi bi-calendar"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                    </svg>
                                                    <span className="ml-2 text-xs text-gray-500 hover:text-blue-600 dark:text-blue-400 ">
                                                        May 10, 2022
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex w-full mb-4 ">
                                            <div>
                                                <img
                                                    className="object-cover w-20 h-20 mr-4 rounded"
                                                    src="https://i.postimg.cc/PqC1MKLH/pexels-pixabay-38271.jpg"
                                                    alt
                                                />
                                            </div>
                                            <div className="flex-1 mb-5">
                                                <h2 className="mb-1 text-base font-medium tracking-tight text-gray-700 hover:text-blue-600 dark:text-gray-400">
                                                    <a href="#">
                                                        Bí kíp phối đồ tập gym nam cực chất lại thoải mái cho
                                                        chàng
                                                    </a>
                                                </h2>
                                                <a
                                                    href="#"
                                                    className="flex items-center mr-6 no-underline"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-3 h-3 text-blue-600 dark:text-blue-400 bi bi-calendar"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                    </svg>
                                                    <span className="ml-2 text-xs text-gray-500 hover:text-blue-600 dark:text-blue-400 ">
                                                        May 10, 2022
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4  rounded-md dark:border-gray-800 dark:bg-gray-800">
                                    <Link to="/product">
                                        <img
                                            src="https://bizweb.dktcdn.net/100/438/408/themes/930060/assets/article_banner_1.jpg?1700022409557"
                                            alt
                                            className="object-cover w-full rounded-md h-96"
                                        />
                                    </Link>
                                </div>
                                <div className="p-4 mb-4 bg-white border rounded-md shadow dark:bg-gray-800 dark:border-gray-900">
                                    <h2 className="py-2 my-2 text-xl font-semibold leading-5 tracking-tight text-gray-900 font-montserrat lg:text-2xl dark:text-gray-400 lg:mt-3 ">
                                        ĐĂNG KÍ NHẬN TIN
                                    </h2>
                                    <input
                                        type="email "
                                        name="email "
                                        id="email "
                                        autoComplete="email "
                                        required
                                        placeholder="Nhập email"
                                        className="w-full px-2 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-400 dark:border-gray-800 focus:outline-none focus:border-indigo-500 focus-ring-1 focus:ring-indigo-500 "
                                    />
                                    <button className="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-gray-100 uppercase bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 dark:focus:ring-0 focus:ring-offset-2 dark:focus:ring-offset-0 focus:ring-blue-500 ">
                                        ĐĂNG KÍ
                                    </button>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Đăng kí để nhận thông tin khuyển mãi, sản phẩm mới từ GABI
                                        Store
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })


    );
}

export default StoryDetail;
