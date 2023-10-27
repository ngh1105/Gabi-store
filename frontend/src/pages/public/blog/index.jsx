import React from 'react';
import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';

const cx = classNames.bind(styles);

function Blog() {
    const [blog, setBlog] = useState([
        {
            id: 0,
            img: "https://iweb247.com/uploads/images/cach-toi-uu-hinh-anh-cho-blogspot1.png",
            title: "Blog 0",
            describe: "Mo ta blog",
            content2: "Hello content2",
            title2: "title2",
            img3: "https://iweb247.com/uploads/images/cach-toi-uu-hinh-anh-cho-blogspot1.png",
            note3: "dead blog",
            content4: "Hello content4",
        },
        {
            id: 1,
            img: "https://iweb247.com/uploads/images/cach-toi-uu-hinh-anh-cho-blogspot1.png",
            title: "Blog 1",
            describe: "Mo ta blog",
        },
    ]);

    const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get('http://localhost:8000/blog').then((data) => setBlog(data.data));
    // }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {blog.map((data) => (
                    // <div key={data.id} className={cx('post')}>
                    //     <div className={cx('img')}>
                    //         <img src={data.img} />
                    //     </div>
                    //     <div className={cx('content')}>

                    //             <h2>{data.title}</h2>

                    //         <p>{data.shortDescribtion}</p>
                    //         <Button outline>Xem thêm</Button>
                    //     </div>
                    // </div>
                    <BlogCard item={data} key={data.id} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
