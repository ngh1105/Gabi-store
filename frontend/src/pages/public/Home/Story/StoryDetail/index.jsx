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

            img1: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png",
            img2: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png",
            title1: "HƯỚNG ĐẾN THỜI TRANG BỀN VỮNG",
            title2: "CÂU CHUYỆN CỦA CHÚNG TÔI",
            title3: "TẦM NHÌN & SỨ MỆNH 2023",
            content1v1: "Thời trang bền vững là một xu hướng mới của ngành thời trang, nhằm giảm thiểu tác động tiêu cực của ngành công nghiệp thời trang đến môi trường và xã hội.",
            content1v2: "Theo đó, các sản phẩm thời trang bền vững được sản xuất từ nguyên liệu tái chế, sử dụng quy trình sản xuất xanh, và có khả năng tái chế hoặc phân hủy sinh học cao.",
            content1v3: "Ngoài ra, thời trang bền vững còn đòi hỏi các doanh nghiệp thời trang phải đảm bảo quyền lợi và điều kiện làm việc cho người lao động trong chuỗi cung ứng, và tôn trọng các giá trị đạo đức và xã hội.",
            content1v4: "Các doanh nghiệp thời trang có thể áp dụng nhiều giải pháp để hướng đến thời trang bền vững, bao gồm sử dụng nguyên liệu tái chế, tối ưu hóa quy trình sản xuất, tăng cường quản lý kho.",
            content1v5: "Tìm kiếm đối tác vận chuyển chi phí thấp, và tìm kiếm thị trường mới để xuất khẩu sản phẩm.",
            content2v1: "Áo Nam Gabi Store thành lập vào năm 2022 với sứ mệnh quốc tế rõ ràng và mục đích trang phục cho những người trẻ gắn bó với môi trường những người sống trong cộng đồng và có mối quan hệ với nhau.",
            content2v2: "GabiStore phát triển cùng tốc độ với khách hàng của mình, luôn theo dõi các công nghệ mới, các phong trào xã hội và các xu hướng nghệ thuật hoặc âm nhạc mới nhất.",
            content2v3: "Tất cả những điều này có thể được nhìn thấy không chỉ trong thiết kế của nó mà còn trong các cửa hàng.",
            content2v4: "Những người trẻ tuổi có phong cách ăn mặc giản dị, tránh xa những khuôn mẫu và muốn cảm thấy thoải mái khi mặc bất cứ thứ gì họ mặc. Để đáp ứng nhu cầu của họ.",
            content2v5: "Gabi Store nắm bắt những xu hướng quốc tế mới nhất, kết hợp chúng với những ảnh hưởng thường thấy trên đường phố và trong các câu lạc bộ thời trang nhất, đồng thời sửa đổi chúng theo phong cách của họ để biến chúng thành những bộ quần áo thoải mái và dễ m",
            content3v1: "Thời trang nam Gabi Store phong cách hiện đại, nam tính và sành điệu, mang đến cho khách hàng chuỗi giá trị cung ứng sản phẩm, dịch vụ khác biệt và thân thiện với môi trường.",
            content3v2: "Gabi Store sẽ xây dựng chuỗi cung ứng thời trang khép kín chất lượng cao đạt tiêu chuẩn quốc tế, và sẽ cung cấp các giải pháp thời trang toàn diện và phù hợp xu hướng của thời đại.",
            content3v3: "Gabi Store sẽ cố gắng phát triển thương hiệu của riêng mình để trở thành một trong những thương hiệu mạnh và được nhiều khách hàng trên toàn quốc biết tới.",
            content3v4: "Phát triển hệ thống phân phối rộng khắp và xuất khẩu là một trong những sứ mệnh của Thời trang nam Gabi Store cho năm 2023. Để đạt được mục tiêu này, công ty sẽ tập trung vào việc xây dựng chuỗi cung ứng thời trang khép kín chất lượng cao đạt tiêu chuẩn q",
            content3v5: "cung cấp các giải pháp thời trang toàn diện và phù hợp xu hướng của thời đại, đào tạo và phát triển nguồn nhân lực thời trang có năng lực cao, và phát triển hệ thống phân phối rộng khắp và xuất khẩu.",
        },
    ])
    return (
        tabs.map((bnm, index) => {
            return (
                <div key={index}>
                    <div
                        className="object-cover w-full bg-center bg-cover h-[15rem] "
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
                        }}
                    >
                        <div className="flex items-center justify-center w-full h-full bg-blue-800 bg-opacity-50 ">
                            <div className="text-center">
                                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
                                    CÂU CHUYỆN CỦA CHÚNG TÔI{" "}
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/*  End Banner */}

                    {/* Content 1 */}
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src={bnm.img1} alt="office content 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={bnm.img2} alt="office content 2" />
                        </div>
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 dark:text-white">{bnm.title1}</h2>
                            <p className="mb-4 text-[18px]">{bnm.content1v1}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content1v2}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content1v3}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content1v4}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content1v5}</p>
                        </div>

                    </div>
                    {/* End Content 1 */}

                    {/* Content 2 */}
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 dark:text-white">{bnm.title2}</h2>
                            <p className="mb-4 text-[18px]">{bnm.content2v1}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content2v2}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content2v3}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content2v4}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content2v5}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src={bnm.img1} alt="office content 2" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={bnm.img2} alt="office content 2" />
                        </div>
                    </div>
                    {/* End Content 2 */}

                    {/* Content 3 */}
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src={bnm.img1} alt="office content 2" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={bnm.img2} alt="office content 2" />
                        </div>
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 dark:text-white">{bnm.title3}</h2>
                            <p className="mb-4 text-[18px]">{bnm.content3v1}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content3v2}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content3v3}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content3v4}</p>
                            <p className='mb-4 text-[18px]'>{bnm.content3v5}</p>
                        </div>

                    </div>
                    {/* End Content 3 */}
                </div>


            )
        })


    );
}

export default StoryDetail;
