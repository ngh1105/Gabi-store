import Button from 'components/Button';
import styles from './Policy.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Policy() {
    return (
        // <div className={cx('wrapper')}>
        //     <div className={cx('inner')}>
        //         <h3>Chính sách đổi trả</h3>
        //         <p>Thật khó chịu nếu phải làm công tác đổi/ trả cho đơn hàng vừa mua!</p>
        //         <p>
        //             Và cũng không mấy dễ chịu khi đọc những trang "Chính sách đổi trả" dài ngoằng và đủ thứ điều ràng
        //             buộc (thường là như thế)
        //         </p>
        //         <p>Do đó GabiStore sẽ viết ngắn gọn nhất có thể, cơ bản là:</p>
        //         <p>
        //             - Khách hàng <span>được đổi hoặc trả MIỄN PH</span>Í sản phẩm trong vòng <span>60 ngày</span> kể từ
        //             ngày nhận được sản phẩm.
        //         </p>
        //         <p>
        //             - Bất kỳ sản phẩm nào đặt mua tại GabiStore (ngoại trừ Outlet, sản phẩm Săn deal, sản phẩm đặt riêng
        //             theo yêu cầu và sản phẩm Pre-Order phiên bản số lượng giới hạn, không về thêm hàng) cũng được áp
        //             dụng chính sách này, kể cả sản phẩm đã giặt hay cắt mác. (Ai mà chịu được một chiếc áo quá rộng hay
        //             quần sịp quá chật chứ)
        //         </p>
        //         <p>
        //             - Trường hợp trả, GabiStore sẽ hoàn lại tiền hàng (không bao gồm tiền phí vận chuyển nếu có) cho
        //             khách trong vòng 24h qua TÀI KHOẢN NGÂN HÀNG của khách (không tính Thứ 7, CN và ngày lễ). Đồng thời,
        //             GabiStore sẽ đến tận nơi lấy hàng trả và không thu thêm bất cứ phí gì (Khách hàng cũng có thể tự gởi
        //             lại hàng cho GabiStore)
        //         </p>
        //         <h3>3 Bước nhanh chóng để đổi trả:</h3>
        //         <p>
        //             <span>Bước 1</span>: Điền thông tin Đổi/ Trả hàng ở đây, hoặc qua số hotline 1900272737.
        //         </p>
        //         <p>
        //             <span>Bước 2</span>: Nhận cuộc gọi xác nhận từ GabiStore về sản phẩm và thời gian nhận hàng
        //         </p>
        //         <p>
        //             <span>Bước 3</span>: Ngay khi xác nhận chúng tôi sẽ gởi bạn đơn hàng mới (hoặc lấy đơn hàng về), bạn
        //             chỉ cần gởi hàng cần đổi/trả cho shipper là được.
        //         </p>
        //         <h3>Đối với việc trả hàng:</h3>
        //         <p>
        //             Chúng tôi sẽ hoàn lại số tiền hàng (sau khi đã trừ 25.000 VNĐ phí ship hàng) vào tài khoản mà bạn
        //             cung cấp tối đa trong 24h làm việc (không tính thứ 7 & Chủ Nhật) sau khi yêu cầu hoàn tiền được CSKH
        //             xác nhận.
        //         </p>
        //         <h3>Lưu ý:</h3>
        //         <p>- GabiStore hỗ trợ đổi tối đa 3 lần/1 khách hàng.</p>
        //         <p>
        //             - GabiStore có quyền quyết định dừng việc hỗ trợ đổi trả và trả lại tiền cho khách hàng nếu phát hiện
        //             khách hàng sử dụng chính sách để trục lợi (như việc đổi quá nhiều lần).
        //         </p>
        //         <p>
        //             - Với các đơn sàn TMĐT thì sẽ áp dụng chính sách trả hàng của sàn TMĐT. Tuy nhiên, trường hợp quá
        //             thời gian trả hàng của sàn TMĐT sẽ được áp dụng chính sách trả hàng của GabiStore
        //         </p>
        //         <h3>Chúng tôi làm gì với hàng đổi trả:</h3>
        //         <li>Áo thun, quần short: thu gom và gởi cho các chương trình từ thiện</li>
        //         <li>Bít tất, boxer: huỷ bỏ 100%</li>
        //        <Link to="/deliverInfo"> <Button primary className={cx('return')}>Tiếp tục thanh toán</Button></Link>
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
                            CHÍNH SÁCH ĐỔI TRẢ{" "}
                        </h1>
                    </div>
                </div>
            </div>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-[20px] tracking-tight font-bold text-gray-900 dark:text-white">CHÍNH SÁCH ĐỔI TRẢ</h2>
                    <p class="mb-4 font-light text-[18px]">Thật khó chịu nếu phải làm công tác đổi/ trả cho đơn hàng vừa mua!</p>
                    <p class="mb-4 font-light text-[18px]"> Và cũng không mấy dễ chịu khi đọc những trang "Chính sách đổi trả" dài ngoằng và đủ thứ điều ràng
                        buộc (thường là như thế)</p>
                    <p class="mb-4 font-light text-[18px]">Do đó GabiStore sẽ viết ngắn gọn nhất có thể, cơ bản là:</p>
                    <p class="mb-4 font-light text-[18px]"> - Khách hàng được đổi hoặc trả MIỄN PHÍ sản phẩm trong vòng 60 ngày kể từ
                        ngày nhận được sản phẩm.</p>

                    <p class="mb-4 font-light text-[18px]"> - Bất kỳ sản phẩm nào đặt mua tại GabiStore (ngoại trừ Outlet, sản phẩm Săn deal, sản phẩm đặt riêng
                        theo yêu cầu và sản phẩm Pre-Order phiên bản số lượng giới hạn, không về thêm hàng) cũng được áp
                        dụng chính sách này, kể cả sản phẩm đã giặt hay cắt mác. (Ai mà chịu được một chiếc áo quá rộng hay
                        quần sịp quá chật chứ)</p>
                    <p class="mb-4 font-light text-[18px]"> - Trường hợp trả, GabiStore sẽ hoàn lại tiền hàng (không bao gồm tiền phí vận chuyển nếu có) cho
                        khách trong vòng 24h qua TÀI KHOẢN NGÂN HÀNG của khách (không tính Thứ 7, CN và ngày lễ). Đồng thời,
                        GabiStore sẽ đến tận nơi lấy hàng trả và không thu thêm bất cứ phí gì (Khách hàng cũng có thể tự gởi
                        lại hàng cho GabiStore)</p>

                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">3 Bước nhanh chóng để đổi trả:</h2>
                    <p class="mb-4 font-light text-[18px]">Bước 1: Điền thông tin Đổi/ Trả hàng ở đây, hoặc qua số hotline 1900272737.</p>
                    <p class="mb-4 font-light text-[18px]">Bước 1: Điền thông tin Đổi/ Trả hàng ở đây, hoặc qua số hotline 1900272737.</p>
                    <p class="mb-4 font-light text-[18px]">Bước 3: Ngay khi xác nhận chúng tôi sẽ gởi bạn đơn hàng mới (hoặc lấy đơn hàng về), bạn
                        chỉ cần gởi hàng cần đổi/trả cho shipper là được.</p>

                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">ĐỐI VỚI VIỆC TRẢ HÀNG:</h2>
                    <p class="mb-4 font-light text-[18px]">Chúng tôi sẽ hoàn lại số tiền hàng (sau khi đã trừ 25.000 VNĐ phí ship hàng) vào tài khoản mà bạn
                        cung cấp tối đa trong 24h làm việc (không tính thứ 7 & Chủ Nhật) sau khi yêu cầu hoàn tiền được CSKH
                        xác nhận.</p>

                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">LƯU Ý:</h2>
                    <p class="mb-4 font-light text-[18px]">- GabiStore hỗ trợ đổi tối đa 3 lần/1 khách hàng.</p>
                    <p class="mb-4 font-light text-[18px]"> - GabiStore có quyền quyết định dừng việc hỗ trợ đổi trả và trả lại tiền cho khách hàng nếu phát hiện
                        khách hàng sử dụng chính sách để trục lợi (như việc đổi quá nhiều lần).</p>
                    <p class="mb-4 font-light text-[18px]"> - Với các đơn sàn TMĐT thì sẽ áp dụng chính sách trả hàng của sàn TMĐT. Tuy nhiên, trường hợp quá
                        thời gian trả hàng của sàn TMĐT sẽ được áp dụng chính sách trả hàng của GabiStore</p>

                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">CHÚNG TÔI LÀM GÌ VỚI HÀNG ĐỔI TRẢ:</h2>
                    <p class="mb-4 font-light text-[18px]">Áo thun, quần short: thu gom và gởi cho các chương trình từ thiện</p>
                    <p class="mb-4 font-light text-[18px]">Bít tất, boxer: huỷ bỏ 100%</p>
                    <Link to="/deliverInfo"> <Button primary className={cx('return')}>Tiếp tục thanh toán</Button></Link>

                </div>
            </div>
        </section>
    );
}

export default Policy;
