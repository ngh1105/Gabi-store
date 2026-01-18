# Báo cáo Đồ án E-Shop
## Thời trang & Phụ kiện

---

## 1. Giới thiệu Đồ án

**Tên dự án:** E-Shop Website (Gabi Store)  
**Lĩnh vực:** Thương mại điện tử (E-commerce)  
**Tóm tắt:**  
E-Shop là một ứng dụng web thương mại điện tử hiện đại, chuyên cung cấp các sản phẩm thời trang và phụ kiện. Hệ thống được xây dựng nhằm mang lại trải nghiệm mua sắm trực tuyến mượt mà, thân thiện với người dùng, đồng thời cung cấp công cụ quản lý hiệu quả cho nhà bán hàng. Dự án tập trung vào giao diện người dùng đẹp mắt, tốc độ xử lý nhanh và tính năng thanh toán, đặt hàng hoàn chỉnh.

## 2. Công nghệ sử dụng (Tech Stack)

Hệ thống được xây dựng theo mô hình **Client-Server** với các công nghệ tiên tiến:

### 2.1. Frontend (Giao diện người dùng)
*   **Core:** [ReactJS](https://react.dev/) (v18) - Thư viện JavaScript mạnh mẽ để xây dựng UI tương tác.
*   **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) - Quản lý trạng thái ứng dụng toàn cục (Cart, Auth, User).
*   **Styling:**
    *   [Tailwind CSS](https://tailwindcss.com/) - Framework CSS ưu tiên tiện ích (utility-first) giúp thiết kế nhanh và responsive.
    *   [Sass (SCSS)](https://sass-lang.com/) - CSS Preprocessor để quản lý style phức tạp.
    *   [Flowbite](https://flowbite.com/) - Thư viện UI component dựa trên Tailwind.
*   **Routing:** React Router v6.
*   **Form & Validation:** Formik + Yup.
*   **Tích hợp khác:**
    *   `axios`: Xử lý HTTP requests.
    *   `@paypal/react-paypal-js`: Tích hợp thanh toán PayPal.
    *   `react-toastify`: Hiển thị thông báo (Toast notifications).

### 2.2. Backend (Server & API)
*   **Framework:** [NestJS](https://nestjs.com/) (v10) - Framework Node.js kiến trúc module, dễ bảo trì và mở rộng.
*   **Database ORM:** [Sequelize](https://sequelize.org/) - ORM mạnh mẽ cho Node.js, hỗ trợ tương tác với cơ sở dữ liệu SQL.
*   **Database:** [MySQL](https://www.mysql.com/) - Hệ quản trị cơ sở dữ liệu quan hệ phổ biến, ổn định.
*   **Authentication:** JWT (JSON Web Tokens) & Passport strategy.
*   **API Documentation:** Swagger (được hỗ trợ sẵn bởi NestJS).

## 3. Các chức năng chính (Key Features)

### 3.1. Phân hệ Khách hàng (Storefront)
1.  **Trang chủ (Home):**
    *   Banner Slider quảng cáo bắt mắt.
    *   Danh sách danh mục sản phẩm nổi bật.
    *   Sản phẩm bán chạy, sản phẩm mới, gợi ý mua sắm.
    *   Bài viết tin tức (Blog) mới nhất.
2.  **Sản phẩm (Product):**
    *   Danh sách sản phẩm với phân trang.
    *   Bộ lọc nâng cao: Theo Danh mục, Thương hiệu, Giá cả, Sắp xếp (Mới nhất, Phổ biến, Giá thấp/cao).
    *   Tìm kiếm sản phẩm theo tên thời gian thực.
    *   Chi tiết sản phẩm: Hình ảnh, mô tả, chọn kích thước/màu sắc (nếu có), thêm vào giỏ hàng.
3.  **Giỏ hàng & Thanh toán (Cart & Checkout):**
    *   Quản lý giỏ hàng: Thêm, sửa, xóa sản phẩm, tự động tính tổng tiền.
    *   Thanh toán: Hỗ trợ thanh toán khi nhận hàng (COD) và thanh toán trực tuyến (PayPal).
    *   Quản lý đơn hàng: Theo dõi trạng thái đơn hàng.
4.  **Tài khoản & Xác thực:**
    *   Đăng ký, Đăng nhập (Login/Register).
    *   Quên mật khẩu, đổi mật khẩu.
    *   Quản lý thông tin cá nhân, lịch sử mua hàng.
5.  **Trang tĩnh:**
    *   Giới thiệu (About), Liên hệ (Contact), Chính sách (Policy), Điều khoản (Terms).

### 3.2. Hạ tầng & Triển khai
*   Cấu hình biến môi trường (`.base.env`, `.env`) linh hoạt.
*   Hỗ trợ Docker (có sẵn Dockerfile/docker-compose) để triển khai nhanh chóng.

## 4. Kết quả đạt được

*   **Giao diện hoàn thiện:** Đã khắc phục toàn bộ lỗi hiển thị phông chữ (mojibake) tiếng Việt trên tất cả các trang. Giao diện hiện đại, tương thích tốt trên desktop và mobile.
*   **Hiệu năng:** Tốc độ tải trang nhanh nhờ tối ưu hóa React và API NestJS.
*   **Chức năng ổn định:** Các luồng nghiệp vụ chính (Mua hàng, Thanh toán, Đăng nhập) hoạt động trơn tru.

## 5. Hướng phát triển (Future Work)

*   Tích hợp thêm cổng thanh toán nội địa (VNPAY, Momo).
*   Phát triển ứng dụng di động (React Native) dùng chung Backend.
*   Nâng cấp hệ thống gợi ý sản phẩm dùng AI.
*   Tối ưu SEO Server-Side Rendering (SSR) với Next.js nếu cần.

---
*Báo cáo được tổng hợp ngày 18/01/2026 bởi Đội ngũ Phát triển.*
