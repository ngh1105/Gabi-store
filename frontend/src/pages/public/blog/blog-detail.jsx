import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import JsxParser from 'react-jsx-parser';
import utils from "utils";
import { API_URL } from "app/config";
import PageTitle from "components/page-title";
import Api from "app/api";
import { toast } from "react-toastify";

function BlogDetailPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [currBlog, setCurrBlog] = useState({
        title: "",
        thumbnail: "",
        description: "",
        content: "",
        createdAt: "",
    });

    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get("/blog/find-paginate?limit=3");
                if (!res.isSuccess) {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }

                setRelatedBlogs(res.response.data);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        (async () => {

            const res = await Api.Get(`/blog/${id}`);

            if (!res.isSuccess) {
                toast.error("Có lỗi khi xem trang");
                navigate("/blog");
                return;
            }

            setCurrBlog({
                title: res.response.title,
                thumbnail: res.response.thumbnail,
                description: res.response.description,
                content: res.response.content,
                createdAt: res.response.createdAt,
            });

        })();

    }, [id]);

    return (
        <>
            <section className="pb-11 dark:bg-gray-900">
                <PageTitle name={currBlog.title} imageUrl={`${API_URL}${"/upload/page/contact.avif"}`} />
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid lg:grid-cols-[70%,1fr]  gap-4  pt-9 pb-7">
                        <div>
                            <div className="p-4 ">
                                <img
                                    src={`${API_URL}${currBlog.thumbnail}`}
                                    alt
                                    className="object-cover w-full rounded-md h-96"
                                />
                                <div className="flex mt-6 mb-4 ">
                                    <a
                                        href="#"
                                        className="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="w-4 h-4 mr-1 bi bi-eye"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                        </svg>
                                        {utils.formatDate(currBlog.createdAt)}
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                                    >
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="w-4 h-4 mr-1 bi bi-eye"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                        </svg> */}

                                    </a>
                                </div>
                                <h2 className="mb-4 text-2xl font-semibold font-poppins dark:text-gray-300">
                                    {currBlog.title}
                                </h2>

                                <div>
                                    <JsxParser jsx={currBlog.content} />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 lg:px-0">
                            <div className="px-2 pt-4 lg:px-0 dark:border-gray-700">
                                <div>
                                    <h2 className="pb-2 text-lg font-semibold leading-5 tracking-tight text-gray-900 dark:text-gray-300 ">
                                        CÁC BÀI VIẾT KHÁC
                                    </h2>
                                    <div className="w-16 mb-5 border-b-2 border-blue-400 inset-px " />
                                    {
                                        relatedBlogs.map((obj, index) => {
                                            return (
                                                <div className="flex w-full mb-4 border-b border-gray-200 dark:border-gray-700">
                                                    <div>
                                                        <img
                                                            className="object-cover w-20 h-20 mr-4 rounded"
                                                            src="https://i.postimg.cc/SKtsKrRX/pexels-marc-mueller-380769.jpg"
                                                            alt
                                                        />
                                                    </div>
                                                    <div className="flex-1 mb-5">
                                                        <h2 className="mb-1 text-base font-medium tracking-tight text-gray-700 hover:text-indigo-600 dark:text-gray-400">
                                                            <a href="#">
                                                                {obj.title}
                                                            </a>
                                                        </h2>
                                                        <a
                                                            href="#"
                                                            className="flex items-center mr-6 no-underline "
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-3 h-3 text-blue-600 dark:text-blue-400 bi bi-calendar"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                            </svg>
                                                            <span className="ml-2 text-xs text-gray-500 hover:text-indigo-600">
                                                                {utils.formatDate(obj.createdAt)}
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className="mb-4  rounded-md dark:border-gray-800 dark:bg-gray-800">
                                <img
                                    src="https://bizweb.dktcdn.net/100/438/408/themes/930060/assets/article_banner_1.jpg?1700022409557"
                                    alt
                                    className="object-cover w-full rounded-md h-full"
                                />
                            </div>
                            <div className="mb-4  rounded-md dark:border-gray-800 dark:bg-gray-800">
                                <img
                                    src="https://lzd-img-global.slatic.net/g/p/ba37a5f70278d62bea6943cbb1591254.jpg_720x720q80.jpg"
                                    alt
                                    className="object-cover w-full rounded-md h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetailPage;
