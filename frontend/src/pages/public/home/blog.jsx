import Api from "app/api";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import BlogCard from "../blog/blog-card";

export default function BlogSection() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get("/blog/find-paginate?limit=3");
                if (!res.isSuccess) {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }

                setBlogs(res.response.data);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className="mx-auto max-w-screen-xl">
            <div className="p-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map((obj, index) => {
                        return (
                            <BlogCard key={index} data={obj} />
                        )
                    })
                }
            </div>
        </div>

    );
}
