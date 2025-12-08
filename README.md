# Gabi Store — Ứng dụng web thương mại điện tử (ReactJS + NestJS + MySQL)

## 1. Giới thiệu & Mục đích
- Nền tảng bán hàng online full-stack, cung cấp đầy đủ tính năng của một website thương mại điện tử hiện đại.
- Mục tiêu:
  - Hiển thị danh sách sản phẩm cho khách hàng duyệt và xem chi tiết.
  - Cho phép thêm sản phẩm vào giỏ, cập nhật số lượng, xóa và lưu trạng thái giỏ.
  - Hỗ trợ đặt hàng, thanh toán trực tuyến (tích hợp PayPal).
  - Quản lý người dùng (đăng ký, đăng nhập, thông tin tài khoản, lịch sử đơn hàng).
  - Quản trị viên quản lý sản phẩm, đơn hàng, thanh toán và tài khoản.

## 2. Chức năng chính
### Dành cho khách hàng
- Xem sản phẩm: duyệt danh mục, xem giá, hình ảnh, mô tả chi tiết.
- Tìm kiếm và lọc (nếu có): tìm theo tên, phân loại.
- Giỏ hàng: thêm sản phẩm, điều chỉnh số lượng, xóa mục, lưu trạng thái.
- Đặt hàng: nhập địa chỉ, thông tin liên hệ, xác nhận đơn.
- Thanh toán online: tích hợp PayPal để thanh toán quốc tế an toàn.
- Tài khoản cá nhân: đăng ký, đăng nhập, xem lịch sử đơn hàng.

### Dành cho quản trị viên
- Quản lý sản phẩm: thêm mới, sửa thông tin, xóa, cập nhật tồn kho.
- Quản lý đơn hàng: xem danh sách, cập nhật trạng thái (chờ xác nhận → đang giao → hoàn thành).
- Quản lý người dùng (nếu bật): xem danh sách, khóa/bật tài khoản, điều chỉnh quyền.

## 3. Kiến trúc & Công nghệ
- Giao diện (Frontend): ReactJS, TailwindCSS; routing, component hóa, quản lý state giỏ hàng và người dùng.
- Máy chủ (API Server): NestJS; xử lý nghiệp vụ sản phẩm, giỏ hàng, đơn hàng, thanh toán; xác thực JWT; tích hợp PayPal.
- Cơ sở dữ liệu: MySQL; lưu sản phẩm, người dùng, đơn hàng, trạng thái thanh toán.
- Triển khai: hỗ trợ build frontend/server, kết nối DB; có thể triển khai lên Vercel, Render, Docker, v.v.

## 4. Quy trình hoạt động điển hình
1) Người dùng truy cập web.
2) Giao diện gọi API để tải danh sách sản phẩm.
3) Người dùng chọn sản phẩm → thêm vào giỏ.
4) Tiến hành thanh toán → chuyển hướng PayPal.
5) Hoàn tất thanh toán → API xác nhận, tạo đơn trong cơ sở dữ liệu.
6) Người dùng xem lại lịch sử đơn hàng.
7) Quản trị viên theo dõi và xử lý đơn.

## 5. Định hướng cấu trúc thư mục (gợi ý)
- `/frontend`: mã nguồn ReactJS + TailwindCSS.
- `/backend`: mã nguồn NestJS (modules: auth, users, products, cart, orders, payments).
- `/infrastructure`: docker-compose, cấu hình môi trường, CI/CD (nếu có).

## 6. Cấu hình & triển khai (gợi ý)
- Môi trường:
  - Backend: NEST_PORT, DATABASE_URL (MySQL), JWT_SECRET, PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET.
  - Frontend: API_BASE_URL, PAYPAL_CLIENT_ID.
- Quy trình build & chạy mẫu:
  - Backend: `npm install && npm run build && npm run start:prod`
  - Frontend: `npm install && npm run build && npm run preview` (hoặc serve qua reverse proxy).
- Triển khai cloud: có thể dùng Docker (multi-stage build), Render/Heroku cho backend, Vercel/Netlify cho frontend; kết nối MySQL managed.

## 7. Kiểm thử & chất lượng
- Kiểm thử frontend: unit test components, e2e cho luồng đặt hàng & thanh toán.
- Kiểm thử backend: unit/integration cho auth, sản phẩm, giỏ, đơn hàng, webhook PayPal.
- Bảo mật: lưu JWT an toàn, dùng HTTPS, hạn chế CORS phù hợp, mã hóa thông tin nhạy cảm khi cần.

## 8. Roadmap mở rộng (tùy chọn)
- Thêm bộ lọc nâng cao, gợi ý sản phẩm, đánh giá/nhận xét.
- Mã giảm giá, điểm thưởng, wishlist.
- Webhook/batch đồng bộ trạng thái giao hàng.
- Đa ngôn ngữ, đa tiền tệ.

## 9. Thông tin repository
- Repository: https://github.com/ngh1105/Gabi-store.git (hiện trống; README này mô tả yêu cầu và định hướng xây dựng).


