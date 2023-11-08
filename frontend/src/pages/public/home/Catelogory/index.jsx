import styles from './catelog.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-item')}>
                <Link to="/product">
                    <img
                        className={cx("inner-image")}
                        src={'https://i.pinimg.com/564x/9d/7a/57/9d7a5788f72acb9fe0da2631f4253ac6.jpg'}
                        alt=""
                        style={{ width: '270px', objectFit: 'cover' }}
                    />

                    <p className={cx('content')}>Tất cả sản phẩm</p>
                </Link>
            </div>

            <div className={cx('inner-item')}>
                <Link to="/product/polo">
                    <img
                        className={cx("inner-image")}
                        src={'https://i.pinimg.com/564x/fa/25/2a/fa252a1c5863779537a87a2f67c30108.jpg'}
                        alt=""
                        style={{ width: '270px', objectFit: 'cover' }}
                    />
                    <p className={cx('content')}>Áo Polo</p>
                </Link>
            </div>

            <div className={cx('inner-item')}>
                <Link to="/product/shirt">
                    {/* <img
                        className="inner-image"
                        src={'https://mcdn.coolmate.me/image/May2023/mceclip2_89.jpg'}
                        alt=""
                    /> */}

                    <img
                       className={cx("inner-image")}
                        src={'https://i.pinimg.com/564x/c6/c5/bc/c6c5bcf8e9b4f95f274aa0734e6cbde3.jpg'}
                        alt=""
                        style={{ width: '270px', objectFit: 'cover' }}
                    />

                    <p className={cx('content')}>Áo thun thể thao</p>
                </Link>
            </div>

            <div className={cx('inner-item')}>
                <Link to="/product/pants">
                    {/* <img
                        className="inner-image"
                        src={'https://mcdn.coolmate.me/image/April2023/mceclip2_53.jpg'}
                        alt=""
                    /> */}

                    <img
                        className={cx("inner-image")}
                        src={'https://i.pinimg.com/564x/b7/79/50/b779506abb38f0ecbd7696b5ae52b33e.jpg'}
                        alt=""
                        style={{ width: '270px', objectFit: 'cover' }}
                    />

                    <p className={cx('content')}>Quần Short</p>
                </Link>
            </div>
        </div>
    );
}

export default Category;
