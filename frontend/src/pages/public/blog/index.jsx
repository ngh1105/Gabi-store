import React from "react";
import styles from "./Blog.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";

const cx = classNames.bind(styles);

function Blog() {
    const [blog, setBlog] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/blog").then((data) => setBlog(data.data));
    }, []);
    return (

        <>
            <section className="w-[1320px] m-auto flex items-center bg-white  dark:bg-gray-800 font-poppins">
                <div className="p-4 mx-auto max-w-7xl h-full">
                    <div className="mb-20 mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
                        {blog.map((data) => (
                            <BlogCard item={data} key={data.id} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
