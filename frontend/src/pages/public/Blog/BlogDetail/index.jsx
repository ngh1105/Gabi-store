
import React, { useEffect, useState } from 'react';
import style from './BlogDetail.module.scss';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(style);

function BlogDetail() {
    const [details, setDetails] = useState({});
    console.log('details', details);

    const location = useLocation();

    useEffect(() => {
        setDetails(location.state.item);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('contain')}>
                    <div className={cx('content')}>
                        <h2>{details.title}</h2>
                        <i>{details.content2}</i>

                        <p>
                            <b>{details.title2}</b>
                        </p>
                        <div className={cx('image')}>
                            <img src={details.img3} />
                            <p>
                                <i>{details.note3}</i>
                            </p>
                        </div>
                        <p>{details.content4}</p>
                        <div className={cx('image')}>
                            <img src={details.img2} />
                            <p>
                                <i>{details.note3}</i>
                            </p>
                        </div>
                        <p>
                            <b>{details.title2}</b>
                        </p>
                        <p>{details.content4}</p>
                        <div className={cx('image')}>
                            <img src={details.img} />
                            <p>
                                <i>{details.note3}</i>
                            </p>
                        </div>
                        <p>
                            <b>{details.title2}</b>
                        </p>
                        <p>{details.content4}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
