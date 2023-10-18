import React from 'react';
import classNames from 'classnames/bind';
import style from './BlogCard.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

function BlogCard({ item }) {
    console.log(item);
    const navigate = useNavigate()

    const rootId = item.id;

    const handleDetail = () => {
        navigate(`/blog/${rootId}`, {
            state: {
                item: item,
            },
        });
    };

    return (
        <div onClick={handleDetail} className={cx('post')}>
            <div className={cx('img')}>
                <img src={item.img} />
            </div>

            <div className={cx('content')}>
                <h2>{item.title}</h2>
                <p>{item.shortDescription}</p>
                <Button outline>Xem thêm</Button>
            </div>
        </div>
    );
}

export default BlogCard;
