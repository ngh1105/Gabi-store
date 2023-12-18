import React, { useState } from "react";
import { useEffect } from "react";
import BlogCard from "./blog-card";
import PageLayout from "components/page-layout";
import { API_URL } from "app/config";
import PageTitle from "components/page-title";
import { toast } from "react-toastify";
import Api from "app/api";
import { usePaginate } from "hooks/use-paginate";

export default function BlogPage() {

    const [blogs, setBlogs] = useState([]);

    const ITEMS_PER_PAGE = 6;
    const {
        items, setItems, totalItems,
        onSortItems, setTotalPages,
        onSearchItems, Pagination,
    } = usePaginate(ITEMS_PER_PAGE);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get("/blog");
                if (!res.isSuccess) {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }

                if (res.response && res.response.length > 0) {
                    setTotalPages(Math.ceil(res.response.length / ITEMS_PER_PAGE));
                    setItems(res.response);
                }

                setBlogs(res.response);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <PageLayout title="Bài viết">
            <PageTitle name="Bài viết" imageUrl={`${API_URL}${"/upload/page/contact.avif"}`} />
            <section className=" m-auto flex items-center bg-white  dark:bg-gray-800 font-poppins">
                <div className="p-4 mx-auto max-w-7xl h-full">
                    <div className="mb-2 mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
                        {
                            items.map((obj, index) => {
                                return (
                                    <BlogCard key={index} data={obj} />
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center mt-6 mb-10">
                        <Pagination />
                    </div>
                </div>
            </section>
        </PageLayout>

    );
}
