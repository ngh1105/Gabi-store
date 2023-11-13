import React from "react";
import classNames from "classnames/bind";
import styles from "./Rules.module.scss";

const cx = classNames.bind(styles);

function Rules() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              Điều khoản sử dụng
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-4/4">
            <p className="pb-6">
              {" "}
              Khi khách hàng truy cập vào ứng dụng Gabi Store, website
              order.thecoffeehouse.com hoặc đặt hàng qua hotline 18006936 của
              Gabi Store có nghĩa là khách hàng đã đồng ý với các điều khoản
              này. Gabi Store có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ
              bất kỳ phần nào trong Điều khoản sử dụng này vào bất cứ lúc nào.
              Các thay đổi có hiệu lực ngay khi được đăng trên trang web, ứng
              dụng mà không cần thông báo trước.
            </p>
            <p className="pb-6">
              {" "}
              Khi khách hàng tiếp tục sử dụng dịch vụ giao hàng của Gabi Store,
              sau khi các thay đổi về Điều khoản này được đăng tải, có nghĩa là
              khách hàng chấp nhận với những thay đổi đó. Khách hàng vui lòng
              kiểm tra thường xuyên các quy định và điều khoản dưới đây để cập
              nhật những thay đổi của chúng tôi.
            </p>
            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Chính sách Tài khoản Người dùng
            </h2>
            <p className="pb-6">
              Khách hàng cam kết và cung cấp thông tin chính xác nhằm mục đích
              nhận được phục vụ tốt nhất từ Gabi Store
            </p>
            <p className="pb-6">
              Mỗi số điện thoại chỉ tạo được một (01) tài khoản cho mục đích sử
              dụng cá nhân.
            </p>
            <p className="pb-6">
              {" "}
              Để đảm bảo quyền lợi, khách hàng không chia sẻ thông tin tài khoản
              (tên truy cập và mật khẩu) cho người khác sử dụng tài khoản Gabi
              Store, hoặc chuyển nhượng tài khoản cho bất kỳ ai khác mà chưa
              thông qua Gabi Store.
            </p>
            <p className="pb-6">
              {" "}
              Gabi Store có quyền khóa tài khoản hoặc khóa một phần tính năng
              của tài khoản (như tính năng Đặt hàng/ Tích điểm..) của khách hàng
              khi Gabi Store phát hiện khách hàng vi phạm điều khoản hoặc chính
              sách của công ty hoặc có hành vi mua hàng không trung thực điển
              hình như:
            </p>
            <p className="pb-6">Tạo các đơn hàng ảo, hoặc đánh giá ảo.</p>
            <p className="pb-6">
              Không nhận đơn hàng đã đặt mà không cung cấp lý do chính đáng.
            </p>
            <p className="pb-6">
              Có dấu hiệu lừa đảo hoặc lạm dụng các mã giảm giá và chương trình
              khuyến mãi để trục lợi
            </p>
            <p className="pb-6">
              Các trường hợp khác mà hệ thống của Gabi Store phát hiện được. Tùy
              từng trường hợp, Gabi Store sẽ có biện pháp xử lý thích hợp, bao
              gồm khóa tài khoản mà không cần thông báo trước.
            </p>
            <p className="pb-6">
              {" "}
              Tài khoản bị khóa hoặc khóa một phần tính năng sẽ được cấp lại sau
              khi hoàn thành quá trình xác minh qua các chứng từ/thông tin khách
              hàng cung cấp chứng minh việc mua hàng (hóa đơn, hình ảnh sản phẩm
              đã mua,..) và có sự đồng thuận giữa khách hàng và Gabi Store.
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Giới thiệu về các loại dịch vụ
            </h2>
            <p className="pb-6">
              Dịch vụ “Giao hàng”: là dịch vụ mà khách hàng đặt sản phẩm ngay
              tại nhà và được The Coffee House giao hàng tận nơi.
            </p>
            <p className="pb-6">
              {" "}
              Sau khi khách hàng đặt hàng thành công, Gabi Store sẽ thực hiện
              đơn hàng và giao hàng đến địa chỉ mà khách hàng đã chọn.
            </p>
            <p className="pb-6">
              {" "}
              Dịch vụ “Mang đi” (tại ứng dụng Gabi Store): là dịch vụ mà khách
              hàng có thể đặt món trước và đến Gabi Store nhận sản phẩm mang đi.
            </p>
            <p className="pb-6">
              {" "}
              Sau khi chọn hình thức "Mang Đi" và đặt hàng thành công, khách
              hàng chủ động đến Cửa hàng đã chọn trên đơn hàng để nhận sản phẩm.
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Chấp nhận đơn hàng và giá cả
            </h2>
            <p className="pb-6">
              {" "}
              Tất cả các đơn hàng sau khi được Xác nhận đặt hàng sẽ được Gabi
              Store xử lý tự động và thực hiện đơn hàng. Trong một số trường
              hợp, Gabi Store sẽ chủ động liên hệ khách hàng để xác nhận lại
              thông tin đơn hàng qua cuộc gọi nếu các thông tin trên đơn hàng
              của khách hàng cung cấp chưa đầy đủ.
            </p>
            <p className="pb-6">
              {" "}
              Gabi Store có quyền từ chối hoặc hủy bỏ đơn hàng của khách hàng vì
              bất kỳ lý do gì liên quan đến lỗi kỹ thuật, hệ thống một cách
              khách quan sau khi đã liên hệ thông báo với khách hàng. Trường hợp
              liên hệ 3 lần liên tục không thành công trong vòng 30 phút, chúng
              tôi sẽ tự động hủy đơn hàng của quý khách. Gabi Store rất tiếc vì
              chưa thể hoàn thành đơn hàng của quý khách trong trường hợp này.
            </p>
            <p className="pb-6">
              Gabi Store cam kết sẽ cung cấp thông tin giá cả chính xác nhất cho
              khách hàng. Tuy nhiên, đôi lúc vẫn có sai sót xảy ra, ví dụ như
              trường hợp giá sản phẩm không hiển thị chính xác trên trang web
              hoặc sai giá, tùy theo từng trường hợp chúng tôi sẽ liên hệ hướng
              dẫn xử lý hoặc thông báo hủy đơn hàng đó cho khách hàng.
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Thay đổi thông tin đặt hàng
            </h2>
            <p className="pb-6">
              Khách hàng vui lòng cung cấp thông tin đầy đủ và chính xác ngay
              khi hoàn tất đặt hàng trên tại Gabi Store.
            </p>
            <p className="pb-6">
              {" "}
              Gabi Store chỉ chấp nhận thay đổi thông tin trên đơn hàng bao gồm:
              địa chỉ giao hàng, thông tin người nhận, thời gian giao nhận trước
              bước “Thực hiện đơn hàng” trên ứng dụng. Tùy thuộc từng trường hợp
              có thể hỗ trợ khách hàng sau khi kiểm tra với cửa hàng thực hiện
              đơn hàng và đơn vị vận chuyển, Gabi Store sẽ liên hệ thông tin cho
              khách hàng hoặc có quyền từ chối hỗ trợ.
            </p>
            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Phương thức thanh toán
            </h2>
            <p className="pb-6">
              {" "}
              Khách hàng được quyền lựa chọn hình thức thanh toán phù hợp với
              nhu cầu, Gabi Store cung cấp các phương thức thanh toán cho đơn
              hàng như sau:
            </p>
            <p className="pb-6">
              Thanh toán tiền mặt (COD): khách hàng thanh toán khi nhận hàng.
            </p>
            <p className="pb-6">
              {" "}
              Thanh toán trực tuyến bằng thẻ nội địa (ATM), thẻ quốc tế (Visa,
              master…) qua cổng thanh toán
            </p>
            <p className="pb-6">
              Thanh toán trực tuyến bằng các ví điện tử như Momo, Zalo Pay,
              Shopee Pay...
            </p>
            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Chính sách sử dụng dịch vụ
            </h2>
            <p className="pb-6">
              Khách hàng được quyền chủ động chọn loại dịch vụ để sử dụng khi
              bắt đầu đặt đơn hàng.
            </p>
            <p className="pb-6">
              {" "}
              Với đơn hàng của dịch vụ "Giao hàng" và "Mang đi", khách hàng vui
              lòng không sử dụng tại Cửa hàng.
            </p>
            <p className="pb-6">
              Gabi Store có quyền từ chối hỗ trợ giao hàng với đơn hàng của dịch
              vụ “Mang đi”.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Rules;
