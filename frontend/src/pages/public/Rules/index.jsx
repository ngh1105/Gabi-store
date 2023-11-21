import React from "react";
import classNames from "classnames/bind";
import styles from "./Rules.module.scss";

function Rules() {
    return (
        // <div className={cx('wrapper')}>
        //     <div className={cx('inner')}>
        //         <h2 className={cx('rules')}>điều khoản sử dụng</h2>

        //         <div className={cx('inner-content')}>
        //             <div className={cx('inner-top')}>
        //                 <h3>Giới thiệu chung</h3>
        //                 <p>
        //                     Khi khách hàng truy cập vào ứng dụng Gabi Store, website order.thecoffeehouse.com hoặc
        //                     đặt hàng qua hotline 18006936 của Gabi Store có nghĩa là khách hàng đã đồng ý với các
        //                     điều khoản này. Gabi Store có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần
        //                     nào trong Điều khoản sử dụng này vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được
        //                     đăng trên trang web, ứng dụng mà không cần thông báo trước.
        //                 </p>

        //                 <p>
        //                     Khi khách hàng tiếp tục sử dụng dịch vụ giao hàng của Gabi Store, sau khi các thay đổi
        //                     về Điều khoản này được đăng tải, có nghĩa là khách hàng chấp nhận với những thay đổi đó.
        //                     Khách hàng vui lòng kiểm tra thường xuyên các quy định và điều khoản dưới đây để cập nhật
        //                     những thay đổi của chúng tôi.
        //                 </p>
        //             </div>

        //             <hr />

        //             <div className={cx('inner-top')}>
        //                 <h3>Chính sách Tài khoản Người dùng</h3>
        //                 <p>
        //                     Khách hàng cam kết và cung cấp thông tin chính xác nhằm mục đích nhận được phục vụ tốt nhất
        //                     từ Gabi Store
        //                 </p>

        //                 <p>Mỗi số điện thoại chỉ tạo được một (01) tài khoản cho mục đích sử dụng cá nhân.</p>

        //                 <p>
        //                     Để đảm bảo quyền lợi, khách hàng không chia sẻ thông tin tài khoản (tên truy cập và mật
        //                     khẩu) cho người khác sử dụng tài khoản Gabi Store, hoặc chuyển nhượng tài khoản cho
        //                     bất kỳ ai khác mà chưa thông qua Gabi Store.
        //                 </p>

        //                 <p>
        //                     Gabi Store có quyền khóa tài khoản hoặc khóa một phần tính năng của tài khoản (như
        //                     tính năng Đặt hàng/ Tích điểm..) của khách hàng khi Gabi Store phát hiện khách hàng vi
        //                     phạm điều khoản hoặc chính sách của công ty hoặc có hành vi mua hàng không trung thực điển
        //                     hình như:
        //                 </p>

        //                 <p>Tạo các đơn hàng ảo, hoặc đánh giá ảo.</p>

        //                 <p>Không nhận đơn hàng đã đặt mà không cung cấp lý do chính đáng.</p>

        //                 <p>Có dấu hiệu lừa đảo hoặc lạm dụng các mã giảm giá và chương trình khuyến mãi để trục lợi</p>

        //                 <p>
        //                     Các trường hợp khác mà hệ thống của Gabi Store phát hiện được. Tùy từng trường hợp,
        //                     Gabi Store sẽ có biện pháp xử lý thích hợp, bao gồm khóa tài khoản mà không cần thông
        //                     báo trước.
        //                 </p>

        //                 <p>
        //                     Tài khoản bị khóa hoặc khóa một phần tính năng sẽ được cấp lại sau khi hoàn thành quá trình
        //                     xác minh qua các chứng từ/thông tin khách hàng cung cấp chứng minh việc mua hàng (hóa đơn,
        //                     hình ảnh sản phẩm đã mua,..) và có sự đồng thuận giữa khách hàng và Gabi Store.
        //                 </p>
        //             </div>

        //             <hr />

        //             <div className={cx('inner-top')}>
        //                 <h3>Giới thiệu về các loại dịch vụ</h3>
        //                 <p>
        //                     Dịch vụ “Giao hàng”: là dịch vụ mà khách hàng đặt sản phẩm ngay tại nhà và được The Coffee
        //                     House giao hàng tận nơi.
        //                 </p>

        //                 <p className={cx('first')}>
        //                     Sau khi khách hàng đặt hàng thành công, Gabi Store sẽ thực hiện đơn hàng và giao hàng
        //                     đến địa chỉ mà khách hàng đã chọn.
        //                 </p>

        //                 <p>
        //                     Dịch vụ “Mang đi” (tại ứng dụng Gabi Store): là dịch vụ mà khách hàng có thể đặt món
        //                     trước và đến Gabi Store nhận sản phẩm mang đi.
        //                 </p>

        //                 <p className={cx('first')}>
        //                     Sau khi chọn hình thức "Mang Đi" và đặt hàng thành công, khách hàng chủ động đến Cửa hàng đã
        //                     chọn trên đơn hàng để nhận sản phẩm.
        //                 </p>
        //             </div>

        //             <hr />

        //             <div className={cx('inner-top')}>
        //                 <h3>Chấp nhận đơn hàng và giá cả</h3>
        //                 <p>
        //                     Tất cả các đơn hàng sau khi được Xác nhận đặt hàng sẽ được Gabi Store xử lý tự động và
        //                     thực hiện đơn hàng. Trong một số trường hợp, Gabi Store sẽ chủ động liên hệ khách hàng
        //                     để xác nhận lại thông tin đơn hàng qua cuộc gọi nếu các thông tin trên đơn hàng của khách
        //                     hàng cung cấp chưa đầy đủ.
        //                 </p>

        //                 <p>
        //                     Gabi Store có quyền từ chối hoặc hủy bỏ đơn hàng của khách hàng vì bất kỳ lý do gì
        //                     liên quan đến lỗi kỹ thuật, hệ thống một cách khách quan sau khi đã liên hệ thông báo với
        //                     khách hàng. Trường hợp liên hệ 3 lần liên tục không thành công trong vòng 30 phút, chúng tôi
        //                     sẽ tự động hủy đơn hàng của quý khách. Gabi Store rất tiếc vì chưa thể hoàn thành đơn
        //                     hàng của quý khách trong trường hợp này.
        //                 </p>

        //                 <p>
        //                     {' '}
        //                     Gabi Store cam kết sẽ cung cấp thông tin giá cả chính xác nhất cho khách hàng. Tuy
        //                     nhiên, đôi lúc vẫn có sai sót xảy ra, ví dụ như trường hợp giá sản phẩm không hiển thị chính
        //                     xác trên trang web hoặc sai giá, tùy theo từng trường hợp chúng tôi sẽ liên hệ hướng dẫn xử
        //                     lý hoặc thông báo hủy đơn hàng đó cho khách hàng.
        //                 </p>
        //             </div>

        //             <hr />

        //             <div className={cx('inner-top')}>
        //                 <h3>Thay đổi thông tin đặt hàng</h3>
        //                 <p>
        //                     Khách hàng vui lòng cung cấp thông tin đầy đủ và chính xác ngay khi hoàn tất đặt hàng trên
        //                     tại Gabi Store.
        //                 </p>

        //                 <p>
        //                     Gabi Store chỉ chấp nhận thay đổi thông tin trên đơn hàng bao gồm: địa chỉ giao hàng,
        //                     thông tin người nhận, thời gian giao nhận trước bước “Thực hiện đơn hàng” trên ứng dụng. Tùy
        //                     thuộc từng trường hợp có thể hỗ trợ khách hàng sau khi kiểm tra với cửa hàng thực hiện đơn
        //                     hàng và đơn vị vận chuyển, Gabi Store sẽ liên hệ thông tin cho khách hàng hoặc có
        //                     quyền từ chối hỗ trợ.
        //                 </p>
        //             </div>

        //             <hr />

        //             <div className={cx('inner-top')}>
        //                 <h3>Phương thức thanh toán</h3>
        //                 <p>
        //                     Khách hàng được quyền lựa chọn hình thức thanh toán phù hợp với nhu cầu, Gabi Store
        //                     cung cấp các phương thức thanh toán cho đơn hàng như sau:
        //                 </p>

        //                 <p className={cx('first')}>Thanh toán tiền mặt (COD): khách hàng thanh toán khi nhận hàng.</p>

        //                 <p className={cx('first')}>
        //                     Thanh toán trực tuyến bằng thẻ nội địa (ATM), thẻ quốc tế (Visa, master…) qua cổng thanh
        //                     toán
        //                 </p>

        //                 <p className={cx('first')}>
        //                     Thanh toán trực tuyến bằng các ví điện tử như Momo, Zalo Pay, Shopee Pay...
        //                 </p>
        //             </div>

        //             <hr />

        //             <div className={cx('inner-top')}>
        //                 <h3>Chính sách sử dụng dịch vụ</h3>
        //                 <p>Khách hàng được quyền chủ động chọn loại dịch vụ để sử dụng khi bắt đầu đặt đơn hàng.</p>

        //                 <p>
        //                     Với đơn hàng của dịch vụ "Giao hàng" và "Mang đi", khách hàng vui lòng không sử dụng tại Cửa
        //                     hàng.
        //                 </p>

        //                 <p>Gabi Store có quyền từ chối hỗ trợ giao hàng với đơn hàng của dịch vụ “Mang đi”.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <section class="bg-white dark:bg-gray-900">
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
                            ĐIỀU KHOẢN{" "}
                        </h1>
                    </div>
                </div>
            </div>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 font-bold text-[18px] text-4xl tracking-tight  text-gray-900 dark:text-white">ĐIỀU KHOẢN SỬ DỤNG</h2>
                    <h2 class="mb-4 font-light text-[18px] text-4xl tracking-tight  text-gray-900 dark:text-white">Giới thiệu chung</h2>
                    <p class="mb-4 font-light text-[18px] ">Khi khách hàng truy cập vào ứng dụng Gabi Store, website order.thecoffeehouse.com hoặc
                        đặt hàng qua hotline 18006936 của Gabi Store có nghĩa là khách hàng đã đồng ý với các
                        điều khoản này. Gabi Store có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần
                        nào trong Điều khoản sử dụng này vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được
                        đăng trên trang web, ứng dụng mà không cần thông báo trước.</p>
                    <p class="mb-4 font-light text-[18px] ">Khi khách hàng tiếp tục sử dụng dịch vụ giao hàng của Gabi Store, sau khi các thay đổi
                        về Điều khoản này được đăng tải, có nghĩa là khách hàng chấp nhận với những thay đổi đó.
                        Khách hàng vui lòng kiểm tra thường xuyên các quy định và điều khoản dưới đây để cập nhật
                        những thay đổi của chúng tôi.</p>
                    <h2 class="mb-4  text-[18px] text-3xl tracking-tight font-bold text-gray-900 dark:text-white">CHÍNH SÁCH TÀI KHOẢN NGƯỜI DÙNG</h2>
                    <p class="mb-4 font-light text-[18px] ">  Khách hàng cam kết và cung cấp thông tin chính xác nhằm mục đích nhận được phục vụ tốt nhất
                        từ Gabi Store
                        <p>Mỗi số điện thoại chỉ tạo được một (01) tài khoản cho mục đích sử dụng cá nhân.</p>

                    </p>
                    <p class="mb-4 font-light text-[18px] "> Để đảm bảo quyền lợi, khách hàng không chia sẻ thông tin tài khoản (tên truy cập và mật
                        khẩu) cho người khác sử dụng tài khoản Gabi Store, hoặc chuyển nhượng tài khoản cho
                        bất kỳ ai khác mà chưa thông qua Gabi Store. </p>

                    <p class="mb-4 font-light text-[18px] ">  Gabi Store có quyền khóa tài khoản hoặc khóa một phần tính năng của tài khoản (như
                        tính năng Đặt hàng/ Tích điểm..) của khách hàng khi Gabi Store phát hiện khách hàng vi
                        phạm điều khoản hoặc chính sách của công ty hoặc có hành vi mua hàng không trung thực điển
                        hình như:</p>

                    <h2 class="mb-4  text-[18px] text-3xl tracking-tight font-bold text-gray-900 dark:text-white">GIỚI THIỆU VỀ CÁC LOẠI DỊCH VỤ</h2>

                    <p class="mb-4 font-light text-[18px] "> Dịch vụ “Giao hàng”: là dịch vụ mà khách hàng đặt sản phẩm ngay tại nhà và được The Coffee
                        House giao hàng tận nơi.</p>

                    <h2 class="mb-4 text-[18px] text-3xl tracking-tight font-bold text-gray-900 dark:text-white">MỤC ĐÍCH SỬ DỤNG THÔNG TIN</h2>
                    <p class="mb-4 font-light text-[18px] ">   Sau khi khách hàng đặt hàng thành công, Gabi Store sẽ thực hiện đơn hàng và giao hàng
                        đến địa chỉ mà khách hàng đã chọn.
                        Dịch vụ “Mang đi” (tại ứng dụng Gabi Store): là dịch vụ mà khách hàng có thể đặt món
                        trước và đến Gabi Store nhận sản phẩm mang đi.
                        Sau khi chọn hình thức "Mang Đi" và đặt hàng thành công, khách hàng chủ động đến Cửa hàng đã
                        chọn trên đơn hàng để nhận sản phẩm.</p>

                    <h2 class="mb-4 text-[18px] text-3xl tracking-tight font-bold text-gray-900 dark:text-white">CHẤP NHẬN ĐƠN HÀNG VÀ GIÁ CẢ</h2>
                    <p class="mb-4 font-light text-[18px]">Tất cả các đơn hàng sau khi được Xác nhận đặt hàng sẽ được Gabi Store xử lý tự động và
                        thực hiện đơn hàng. Trong một số trường hợp, Gabi Store sẽ chủ động liên hệ khách hàng
                        để xác nhận lại thông tin đơn hàng qua cuộc gọi nếu các thông tin trên đơn hàng của khách
                        hàng cung cấp chưa đầy đủ.</p>
                    <p class="mb-4 font-light text-[18px] ">  Gabi Store có quyền từ chối hoặc hủy bỏ đơn hàng của khách hàng vì bất kỳ lý do gì
                        liên quan đến lỗi kỹ thuật, hệ thống một cách khách quan sau khi đã liên hệ thông báo với
                        khách hàng. Trường hợp liên hệ 3 lần liên tục không thành công trong vòng 30 phút, chúng tôi
                        sẽ tự động hủy đơn hàng của quý khách. Gabi Store rất tiếc vì chưa thể hoàn thành đơn
                        hàng của quý khách trong trường hợp này.</p>
                    <p class="mb-4 font-light text-[18px] ">   Gabi Store cam kết sẽ cung cấp thông tin giá cả chính xác nhất cho khách hàng. Tuy
                        nhiên, đôi lúc vẫn có sai sót xảy ra, ví dụ như trường hợp giá sản phẩm không hiển thị chính
                        xác trên trang web hoặc sai giá, tùy theo từng trường hợp chúng tôi sẽ liên hệ hướng dẫn xử
                        lý hoặc thông báo hủy đơn hàng đó cho khách hàng.</p>
                    <p class="mb-4 font-light text-[18px] ">Công ty, công ty mẹ, công ty con, công ty liên kết của Công ty, đại lý, nhà thầu, đơn vị
                        cung cấp dịch vụ của Công ty, hoặc bên thứ ba, có liên quan đến việc Công ty cung cấp Sản
                        Phẩm - Dịch Vụ cho Quý khách mới được tiếp cận Thông Tin Khách Hàng để thực hiện Mục Đích
                        như quy định bên trên.</p>

                    <h2 class="mb-4  text-[18px] text-3xl tracking-tight font-bold text-gray-900 dark:text-white">THAY ĐỔI THÔNG TIN ĐẶT HÀNG</h2>
                    <p class="mb-4 font-light text-[18px] "> Khách hàng vui lòng cung cấp thông tin đầy đủ và chính xác ngay khi hoàn tất đặt hàng trên
                        tại Gabi Store.
                        Gabi Store chỉ chấp nhận thay đổi thông tin trên đơn hàng bao gồm: địa chỉ giao hàng,
                        thông tin người nhận, thời gian giao nhận trước bước “Thực hiện đơn hàng” trên ứng dụng. Tùy
                        thuộc từng trường hợp có thể hỗ trợ khách hàng sau khi kiểm tra với cửa hàng thực hiện đơn
                        hàng và đơn vị vận chuyển, Gabi Store sẽ liên hệ thông tin cho khách hàng hoặc có
                        quyền từ chối hỗ trợ.</p>

                    <h2 class="mb-4  text-[18px] text-3xl tracking-tight font-bold text-gray-900 dark:text-white">PHƯƠNG THỨC THANH TOÁN</h2>
                    <p class="mb-4 font-light text-[18px] "> Khách hàng được quyền lựa chọn hình thức thanh toán phù hợp với nhu cầu, Gabi Store
                        cung cấp các phương thức thanh toán cho đơn hàng như sau:</p>
                    <h2 class="mb-4 text-[18px] text-3xl tracking-tight font-bold text-gray-900 dark:text-white">KHÁCH HÀNG THANH TOÁN KHI NHẬN HÀNG</h2>
                    <p class="mb-4 font-light text-[18px] "> Khách hàng được quyền chủ động chọn loại dịch vụ để sử dụng khi bắt đầu đặt đơn hàng.</p>
                    <p class="mb-4 font-light text-[18px] ">  Thanh toán trực tuyến bằng các ví điện tử như Momo, Zalo Pay, Shopee Pay...</p>
                    <p class="mb-4 font-light text-[18px] ">Email: gabi_store@gmail.com</p>
                    <p class="mb-4 font-light text-[18px] ">Hotline: 028.71.087.088</p>

                    <h2 class="mb-4 text-[18px] text-3xl tracking-tight font-bold text-gray-900 dark:text-white">CHÍNH SÁCH SỬ DỤNG DỊCH VỤ</h2>
                    <p class="mb-4 font-light text-[18px] "> Với đơn hàng của dịch vụ "Giao hàng" và "Mang đi", khách hàng vui lòng không sử dụng tại Cửa
                        hàng.
                        Gabi Store có quyền từ chối hỗ trợ giao hàng với đơn hàng của dịch vụ “Mang đi”.</p>
                </div>
            </div>
        </section>
    );
}

export default Rules;
