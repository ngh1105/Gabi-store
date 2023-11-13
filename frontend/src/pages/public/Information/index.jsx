import React from "react";
import classNames from "classnames/bind";
import styles from "./Information.module.scss";

const cx = classNames.bind(styles);

function Information() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              BẢO MẬT THÔNG TIN
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-4/4">
            <p className="pb-6">
              {" "}
              Chính sách bảo mật thông tin (“Chính sách bảo mật” hoặc “Chính
              sách”) này bao gồm các quy định liên quan đến việc thu thập, sử
              dụng, tiết lộ và/hoặc xử lý Thông Tin Khách Hàng (như được định
              nghĩa bên dưới) mà Quý khách đã cung cấp cho Công ty CP TM dịch vụ
              trà cà phê CN (“Công ty”) hoặc Công ty lưu giữ của Quý khách trong
              quá trình Quý khách đăng ký tài khoản, mua hàng, sử dụng các sản
              phẩm và dịch vụ của Công ty (“Sản Phẩm - Dịch Vụ”), hoặc khi Quý
              khách giao dịch với Công ty thông qua https://gabistore.com
              (“WEBSITE”). Chính sách này cũng quy định về nghĩa vụ của Công ty
              đối với Thông Tin Khách Hàng cũng như sự chấp thuận của Quý khách
              đối với việc thu thập, sử dụng, tiết lộ và/hoặc xử lý Thông Tin
              Khách Hàng của Công ty.
            </p>
            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              THÔNG TIN KHÁCH HÀNG
            </h2>
            <p className="pb-6">
              Thông tin khách hàng (“Thông Tin Khách Hàng”) bao gồm nhưng không
              giới hạn ở:
            </p>
            <p className="pb-6">Thông tin Quý khách cung cấp cho Công ty:</p>
            <p className="pb-6">
              {" "}
              Thông tin này bao gồm nhưng không giới hạn ở họ và tên, địa chỉ
              email, số điện thoại, địa chỉ giao hàng, tài khoản ngân hàng và
              thông tin thanh toán, thông tin trên biểu mẫu, tờ khai, đơn đăng
              ký, phiếu khảo sát, đơn phản hồi hoặc khiếu nại (dù trực tuyến hay
              bằng hình thức khác), các thông tin được gửi bởi hoặc cung cấp
              thông qua các thiết bị được sử dụng để truy cập vào WEBSITE, hoặc
              các thông tin mà Quý khách chủ động gửi đến cho Công ty.
            </p>
            <p className="pb-6">
              {" "}
              Thông tin có được do sự tương tác của Quý khách với Công ty:
            </p>
            <p className="pb-6">
              Thông tin này bao gồm bất kỳ thông tin nào khác về Quý khách khi
              Quý khách trao đổi với Công ty qua bất kỳ phương tiện nào (điện
              thoại, thư từ, fax, gặp gỡ trực tiếp, email, mạng xã hội, các ứng
              dụng), đăng nhập và sử dụng Sản Phẩm - Dịch Vụ hoặc tương tác
              thông qua WEBSITE, kể cả việc Quý khách đã sử dụng như thế nào.
            </p>
            <p className="pb-6">
              Thông tin về Quý khách mà Công ty tổng hợp hoặc có được từ những
              nguồn khác (nếu có).
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              SỰ CHẤP THUẬN CỦA KHÁCH HÀNG
            </h2>
            <p className="pb-6">
              Khi sử dụng Sản Phẩm - Dịch Vụ và/hoặc tương tác với Công ty, Quý
              khách xác nhận và đồng ý rằng Quý khách chấp nhận các quy định của
              Chính sách bảo mật này, và Quý khách đồng ý cho Công ty thu thập,
              sử dụng, tiết lộ và/hoặc xử lý Thông Tin Khách Hàng theo quy định
              mô tả trong đây. TRONG TRƯỜNG HỢP QUÝ KHÁCH KHÔNG ĐỒNG Ý VỚI CHÍNH
              SÁCH BẢO MẬT NÀY, QUÝ KHÁCH CÓ THỂ CÂN NHẮC DỪNG CUNG CẤP THÔNG
              TIN KHÁCH HÀNG CHO CÔNG TY; TỰ ĐĂNG NHẬP TÀI KHOẢN ĐỂ KIỂM TRA,
              CẬP NHẬT, ĐIỀU CHỈNH THÔNG TIN KHÁCH HÀNG HOẶC YÊU CẦU CÔNG TY
              THỰC HIỆN VIỆC NÀY. Chính sách bảo mật này có thể được sửa đổi, bổ
              sung nhằm hoàn thiện vào từng thời điểm, Công ty khuyến khích Quý
              khách thường xuyên xem lại để được cập nhật và bảo vệ quyền lợi
              của mình.
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              MỤC ĐÍCH SỬ DỤNG THÔNG TIN
            </h2>
            <p className="pb-6">
              {" "}
              Thông Tin Khách Hàng chỉ được Công ty sử dụng cho một hoặc tất cả
              các mục đích (“Mục Đích”) sau đây: Xử lý đơn đặt hàng và cung cấp
              Sản Phẩm - Dịch Vụ cho Quý khách; Cung cấp thông tin, chính sách,
              tiến độ mua bán liên quan đến Sản Phẩm - Dịch Vụ; hỗ trợ khi Quý
              khách có yêu cầu Xác nhận và thực hiện các giao dịch tài chính
              liên quan đến các khoản thanh toán trực tuyến của Quý khách khi
              Quý khách sử dụng Sản Phẩm - Dịch Vụ; Gửi thông tin sản phẩm, dịch
              vụ mới, các ưu đãi dành riêng cho Quý khách; Cập nhật về các sự
              kiện sắp tới, chương trình ưu đãi hoặc thông tin tuyển dụng nếu
              Quý khách đăng ký nhận email/sms thông báo; Lấy ý kiến khảo sát
              của Quý khách, nếu Quý khách đăng ký nhận email/sms thông báo;
              Phân tích, đánh giá và nâng cao chất lượng Sản Phẩm - Dịch Vụ; Cải
              thiện trải nghiệm của người dùng trên WEBSITE hoặc đối với Sản
              Phẩm - Dịch Vụ; Hỗ trợ Quý khách trong quá trình bảo hành, đổi trả
              hoặc hoàn tiền (tùy theo chính sách của Công ty vào từng thời
              điểm); Giải quyết các tranh chấp, khiếu nại liên quan; Ngăn ngừa
              các hoạt động phá hủy tài khoản của Quý khách hoặc giả mạo Quý
              khách; Theo yêu cầu của cơ quan nhà nước có thẩm quyền hoặc theo
              quy định của pháp luật vào từng thời điểm.
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              ĐỐI TƯỢNG TIẾP CẬN THÔNG TIN KHÁCH HÀNG
            </h2>
            <p className="pb-6">
              Trừ trường hợp pháp luật Việt Nam có quy định khác, chỉ những đối
              tượng dưới đây mới được tiếp cận Thông Tin Khách Hàng:
            </p>
            <p className="pb-6">
              {" "}
              Cơ quan nhà nước có thẩm quyền như Viện kiểm sát, tòa án, cơ quan
              công an điều tra, khi có yêu cầu cụ thể theo quy định của pháp
              luật Việt Nam;
            </p>
            <p className="pb-6">
              {" "}
              Ngân hàng hoặc các Tổ chức thẻ Visa/Mastercard liên quan đến hành
              vi vi phạm pháp luật hoặc gian lận thẻ tín dụng liên quan đến
              Khách hàng; và/hoặc
            </p>
            <p className="pb-6">
              {" "}
              Công ty, công ty mẹ, công ty con, công ty liên kết của Công ty,
              đại lý, nhà thầu, đơn vị cung cấp dịch vụ của Công ty, hoặc bên
              thứ ba, có liên quan đến việc Công ty cung cấp Sản Phẩm - Dịch Vụ
              cho Quý khách mới được tiếp cận Thông Tin Khách Hàng để thực hiện
              Mục Đích như quy định bên trên.
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              THỜI GIAN LƯU TRỮ
            </h2>
            <p className="pb-6">
              {" "}
              Thông Tin Khách Hàng được lưu trữ cho đến khi Quý khách có yêu cầu
              Công ty hủy bỏ, hoặc Quý khách tự đăng nhập và hủy bỏ thông tin.
              Trong mọi trường hợp, Thông Tin Khách Hàng được lưu trữ và bảo mật
              trên máy chủ của Công ty.
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              THÔNG TIN LIÊN HỆ CỦA CÔNG TY
            </h2>
            <p className="pb-6">
              Trong trường hợp Quý khách có bất kỳ thắc mắc nào liên quan đến
              Chính sách bảo mật này, Quý khách có thể liên hệ Công ty theo
              thông tin dưới đây:
            </p>
            <p className="pb-6"> GABI Store</p>
            <p className="pb-6">
              Địa chỉ: CVPM,phường Tân Chánh Hiệp, Quận 12, TP Hồ Chí Minh
            </p>
            <p className="pb-6">Email: gabi_store@gmail.com</p>
            <p className="pb-6">Hotline: 036.237.8890</p>
            <p className="pb-6">
              {" "}
              Chính sách bảo mật này có hiệu lực kể từ ngày 20/09/2024
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Information;
