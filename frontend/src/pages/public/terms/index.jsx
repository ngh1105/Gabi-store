import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import PageTitle from "components/page-title";
import React from "react";

export default function TermsPage() {
    return (
        <PageLayout title="Điều khoản sử dụng">
            <section className="bg-white dark:bg-gray-900">
                <PageTitle name="Điều khoản sử dụng" imageUrl={`${API_URL}/upload/page/terms.avif`} />
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg text-gray-600 sm:text-lg dark:text-gray-400 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tổng quan</h2>
                        <p>Bằng cách sử dụng website E-Shop, bạn đồng ý với các điều khoản sử dụng chung và chính sách bảo mật của hệ thống. Vui lòng đọc kỹ trước khi tạo tài khoản hoặc đặt hàng.</p>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Tài khoản & bảo mật</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Bạn cần cung cấp thông tin chính xác và bảo mật thông tin đăng nhập.</li>
                            <li>Không chia sẻ tài khoản cho bên thứ ba. Chúng tôi có thể tạm khóa tài khoản nếu phát hiện vi phạm.</li>
                            <li>Mỗi số điện thoại/email chỉ nên tạo một tài khoản cá nhân.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Đặt hàng & giá cả</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Đơn hàng chỉ hợp lệ sau khi được hệ thống xác nhận.</li>
                            <li>Trong trường hợp thông tin chưa rõ ràng, chúng tôi sẽ liên hệ để xác nhận hoặc hủy đơn.</li>
                            <li>Giá có thể thay đổi và sẽ được cập nhật công khai trên hệ thống.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Thanh toán</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Hỗ trợ thanh toán trực tuyến qua PayPal và các ví điện tử khác (nếu được bật).</li>
                            <li>Với đơn giao hàng, có thể thanh toán khi nhận hàng nếu cửa hàng cho phép.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Giao hàng & thay đổi đơn</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Khách hàng cần cung cấp địa chỉ và số điện thoại chính xác để giao hàng.</li>
                            <li>Yêu cầu thay đổi đơn chỉ được chấp nhận trước khi đơn được xử lý.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Hỗ trợ</h3>
                        <p>Nếu cần hỗ trợ, vui lòng liên hệ qua email support@example.com.</p>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
