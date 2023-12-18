import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import PageTitle from "components/page-title";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PolicyPage() {
    return (
        <PageLayout title="Chính sách">
            <PageTitle name="Chính sách" imageUrl={`${API_URL}${"/upload/page/contact.avif"}`} />
            <div className="max-w-screen-xl mx-auto pb-6">
                <main className="mt-2">
                    <div className="flex flex-col lg:flex-row ">
                        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-4/4">
                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                Chính sách đổi trả
                            </h2>
                            <p className="pb-6">
                                Thật khó chịu nếu phải làm công tác đổi/ trả cho đơn hàng vừa mua!
                            </p>
                            <p className="pb-6">
                                {" "}
                                Và cũng không mấy dễ chịu khi đọc những trang "Chính sách đổi trả"
                                dài ngoằng và đủ thứ điều ràng buộc (thường là như thế)
                            </p>
                            <p className="pb-6">
                                {" "}
                                Do đó GABI Store sẽ viết ngắn gọn nhất có thể, cơ bản là:
                            </p>
                            <p className="pb-6">
                                {" "}
                                - Khách hàng <span>được đổi hoặc trả MIỄN PH</span>Í sản phẩm
                                trong vòng <span>60 ngày</span> kể từ ngày nhận được sản phẩm.
                            </p>
                            <p className="pb-6">
                                - Bất kỳ sản phẩm nào đặt mua tại Coolmate (ngoại trừ Outlet, sản
                                phẩm Săn deal, sản phẩm đặt riêng theo yêu cầu và sản phẩm
                                Pre-Order phiên bản số lượng giới hạn, không về thêm hàng) cũng
                                được áp dụng chính sách này, kể cả sản phẩm đã giặt hay cắt mác.
                                (Ai mà chịu được một chiếc áo quá rộng hay quần sịp quá chật chứ)
                            </p>
                            <p className="pb-6">
                                - Trường hợp trả, Coolmate sẽ hoàn lại tiền hàng (không bao gồm
                                tiền phí vận chuyển nếu có) cho khách trong vòng 24h qua TÀI KHOẢN
                                NGÂN HÀNG của khách (không tính Thứ 7, CN và ngày lễ). Đồng thời,
                                Coolmate sẽ đến tận nơi lấy hàng trả và không thu thêm bất cứ phí
                                gì (Khách hàng cũng có thể tự gởi lại hàng cho Coolmate)
                            </p>

                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                3 Bước nhanh chóng để đổi trả:
                            </h2>
                            <p className="pb-6">
                                <span>Bước 1</span>: Điền thông tin Đổi/ Trả hàng ở đây, hoặc qua
                                số hotline 0362378890.
                            </p>

                            <p className="pb-6">
                                {" "}
                                <span>Bước 2</span>: Nhận cuộc gọi xác nhận từ Coolmate về sản
                                phẩm và thời gian nhận hàng
                            </p>
                            <p className="pb-6">
                                <span>Bước 3</span>: Ngay khi xác nhận chúng tôi sẽ gởi bạn đơn
                                hàng mới (hoặc lấy đơn hàng về), bạn chỉ cần gởi hàng cần đổi/trả
                                cho shipper là được.
                            </p>
                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                Đối với việc trả hàng:
                            </h2>
                            <p className="pb-6">
                                {" "}
                                Chúng tôi sẽ hoàn lại số tiền hàng (sau khi đã trừ 25.000 VNĐ phí
                                ship hàng) vào tài khoản mà bạn cung cấp tối đa trong 24h làm việc
                                (không tính thứ 7 & Chủ Nhật) sau khi yêu cầu hoàn tiền được CSKH
                                xác nhận.
                            </p>
                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                Lưu ý:
                            </h2>
                            <p className="pb-6">
                                {" "}
                                - GABI hỗ trợ đổi tối đa 3 lần/1 khách hàng.
                            </p>
                            <p className="pb-6">
                                {" "}
                                - GABI có quyền quyết định dừng việc hỗ trợ đổi trả và trả lại
                                tiền cho khách hàng nếu phát hiện khách hàng sử dụng chính sách để
                                trục lợi (như việc đổi quá nhiều lần).
                            </p>
                            <p className="pb-6">
                                {" "}
                                - Với các đơn sàn TMĐT thì sẽ áp dụng chính sách trả hàng của sàn
                                TMĐT. Tuy nhiên, trường hợp quá thời gian trả hàng của sàn TMĐT sẽ
                                được áp dụng chính sách trả hàng của GABI
                            </p>

                            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                Chúng tôi làm gì với hàng đổi trả:
                            </h2>
                            <p className="pb-6">
                                Áo thun, quần short: thu gom và gởi cho các chương trình từ thiện
                            </p>
                            <p className="pb-6"> Bít tất, boxer: huỷ bỏ 100%</p>
                        </div>
                    </div>
                </main>
            </div>
        </PageLayout>

    );
}
