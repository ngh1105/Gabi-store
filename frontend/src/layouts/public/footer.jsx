import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsInstagram } from "react-icons/bs";

export default function FooterPage() {
  return (
    <div className="">
      <Footer bgDark>
        <div className="w-[1320px] m-auto">
          <div className="flex justify-between w-full gap-8 px-6 py-8 ">
            <div>
              <Footer.Title title="Thương hiệu" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" className="text-white">
                  Trang chủ
                </Footer.Link>
                <Footer.Link href="/about" className="text-white">
                  Về chúng tôi
                </Footer.Link>
                <Footer.Link href="/blog" className="text-white">
                  Tin tức
                </Footer.Link>
                <Footer.Link href="/contact" className="text-white">
                  Liên hệ
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Sản phẩm" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="/product/polo" className="text-white">
                  Áo Polo
                </Footer.Link>
                <Footer.Link href="/product/shirt" className="text-white">
                  Áo thun thể thao
                </Footer.Link>
                <Footer.Link href="/product/pants" className="text-white">
                  Quần short nam
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Phụ kiện
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Điều khoản " className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Chính sách bảo mật
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Điều khoản sử dụng
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Theo dõi " className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Instagram
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Youtube
                </Footer.Link>
               
              </Footer.LinkGroup>
            </div>
          </div>
          {/* <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div> */}
        </div>
      </Footer>
    </div>
  );
}
