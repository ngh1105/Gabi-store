import React from 'react';
import { Link } from 'react-router-dom';

function Story() {
    return (
        <div>
            <img src="https://mcdn.coolmate.me/image/September2023/mceclip5_29.jpg" alt=""
            />
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-1 gap-4 mt-8">
                    <img className="w-[450px] h-[650px] rounded-lg"
                        src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/DSC04764_copy_35.jpg" alt="office content 1" />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-2xl tracking-tight font-medium text-gray-900 dark:text-white">ÁO THỜI TRANG NAM CHẤT</h2>
                    <p className="mb-4 text-[17px]">Áo Nam <span className="font-bold">Gabi Store </span> là những mẫu áo cao cấp dành cho nam giới được thiết kế theo xu hướng thanh
                        lịch, đơn giản, trẻ trung, năng động. Bên cạnh đó, <span className="font-bold">Gabi Store </span> luôn coi trọng sự đa năng nên
                        những chiếc áo dành cho nam luôn được thiết kế để có thể mặc trong mọi sự kiện khác nhau như
                        đi làm, đi chơi, dạo phố, hẹn hò, chơi thể thao,... trở thành người bạn đồng hành của các
                        chàng trai trong cuộc sống hằng ngày.</p>
                    <p className='mb-4 text-[17px]'> Về tổng thể, áo nam thời trang tại <span className="font-bold">Gabi Store </span> được thiết kế với đa dạng kiểu dáng khác nhau, từ
                        áo tay ngắn đến áo tay dài phù hợp với mọi vóc dáng và phong cách. Áo được may từ những chất
                        liệu cao cấp có nguồn gốc từ thiên nhiên, vừa thân thiện với môi trường vừa an toàn cho làn
                        da của người mặc.</p>
                    <p className='mb-4 text-[17px]'> Mặc dù đi theo lối thiết kế đơn giản nhưng áo nam chính hãng tại  <span className="font-bold">Gabi Store </span> vẫn có những họa
                        tiết độc đáo, mang xu hướng mới lạ, tạo điểm nhấn riêng. </p>
                    <p className='mb-4 text-[17px]'>   Bên cạnh đó, với tiêu chí <span className="font-bold"> "Good Mood - Good Day"</span>, nên các sản phẩm áo nam cao cấp tại <span className="font-bold">Gabi Store </span>
                        cũng có những thiết kế basic, dễ dàng phối đồ dành cho các bạn nam. </p>

                    <p className='mb-4 text-[17px]'>  Giờ đây, bạn có thể khám phá những mẫu áo nam hàng hiệu, đẹp nhất, mới nhất tại hệ thống cửa
                        hàng áo nam trên toàn Việt Nam, những shop áo nam của <span className="font-bold">Gabi Store </span> đã có mặt tại những thành phố
                        lớn như Hà Nội, Đà Nẵng, Bình Thuận, Nha Trang, Hồ Chí Minh, Cà Mau,..</p>
                </div>
            </div>
        </div>
    );
}

export default Story;
