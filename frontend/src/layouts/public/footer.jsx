import { Footer as FbFooter } from "flowbite-react";
import { BsDribbble, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "images/logo.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Api from "app/api";

export default function Footer() {

    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                let res = await Api.Get("/brand/find-paginate?limit=2");
                if (res.isSuccess) {
                    setBrands(res.response.data);
                }
                else {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }

                res = await Api.Get("/category/find-paginate?limit=2");
                if (res.isSuccess) {
                    setCategories(res.response.data);
                }
                else {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className="bg-slate-50 border-t border-gray-200">
            <footer className="mx-auto max-w-screen-xl">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                                to="/"
                                className="flex items-center">
                                <img src={Logo} className="w-auto h-8 me-3" alt="Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gabi Store</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Về Gabi</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link
                                            onClick={() => {
                                                window.scrollTo(0, 0);
                                            }}
                                            to="/contact"
                                            className="hover:underline">Liên hệ</Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => {
                                                window.scrollTo(0, 0);
                                            }}
                                            to="/about"
                                            className="hover:underline">Giới thiệu</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Thương hiệu</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    {
                                        brands.map((obj, index) => {
                                            return (
                                                <li key={index} className="mb-4">
                                                    <Link
                                                        onClick={() => {
                                                            window.scrollTo(0, 0);
                                                        }}
                                                        to={`/product?brand=${obj.id}`}
                                                        className="hover:underline">
                                                        <p className="text-ellipsis overflow-hidden">{obj.name}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Danh mục</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    {
                                        categories.map((obj, index) => {
                                            return (
                                                <li key={index} className="mb-4">
                                                    <Link
                                                        onClick={() => {
                                                            window.scrollTo(0, 0);
                                                        }}
                                                        to={`/product?brand=${obj.id}`}
                                                        className="hover:underline">
                                                        <p className="text-ellipsis overflow-hidden">{obj.name}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Theo dõi</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://www.facebook.com/gabistoreee" className="hover:underline ">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="https://tiktok.com/@vergo6090" className="hover:underline">Tiktok</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Chính sách</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link
                                            onClick={() => {
                                                window.scrollTo(0, 0);
                                            }}
                                            to="/policy" className="hover:underline">Chính sách bảo mật</Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => {
                                                window.scrollTo(0, 0);
                                            }}
                                            to="/terms" className="hover:underline">Điều khoản sử dụng</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Gabi™</a>. Tất cả các quyền được bảo lưu.
                        </span>
                        <div className="flex mt-4 gap-2 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/gabistoreee" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                </svg>
                            </a>

                            <a href="https://tiktok.com/@vergo6090" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 2h4L3.75 5h2.5L8.5 2h1.715l-2.25 3h2.5l2.25-3h1.715l-2.25 3h2.5l2.25-3H18v3h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4h2V2ZM0 7v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7H0Zm12.76 6.458-4.818 3.43A.593.593 0 0 1 7 16.429V9.571a.593.593 0 0 1 .942-.459l4.818 3.43a.557.557 0 0 1 0 .916Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
