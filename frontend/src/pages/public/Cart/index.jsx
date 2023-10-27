import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Cart() {
    const [quanity, setQuanity] = useState(1);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-product')}>
                    <hr className={cx('inner-product-hr')} />
                    <ul>
                        <li></li>
                        <li>Sản phẩm</li>
                        <li></li>
                        <li>Giá</li>
                        <li>Số lượng </li>
                        <li>Tổng cộng </li>
                        <li></li>
                    </ul>
                    <hr className={cx('inner-product-hr')} />
                    <ul className={cx('inner-product-list')}>
                        <li>
                            <input type="checkbox" id="checkbox"></input>
                        </li>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                        </li>
                        <li>Áo thun nam Cotton Coolmate Basics 200gsm</li>
                        <li>149.000đ</li>
                        <li>
                            <div className={cx('quanity')}>
                                <button onClick={() => setQuanity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                                {quanity}
                                <button onClick={() => setQuanity((prev) => prev + 1)}>+</button>
                            </div>
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                        <li>
                            <button>
                                <FontAwesomeIcon className={cx('inner-product-button')} icon={faTrash} />
                            </button>
                        </li>
                    </ul>
                    <hr className={cx('inner-product-hrend')} />
                    <ul className={cx('inner-product-list')}>
                        <li>
                            <input type="checkbox" id="checkbox"></input>
                        </li>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                        </li>
                        <li>Áo thun nam Cotton Coolmate Basics 200gsm</li>
                        <li>149.000đ</li>
                        <li>
                            <div className={cx('quanity')}>
                                <button onClick={() => setQuanity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                                {quanity}
                                <button onClick={() => setQuanity((prev) => prev + 1)}>+</button>
                            </div>
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                        <li>
                            <button>
                                <FontAwesomeIcon className={cx('inner-product-button')} icon={faTrash} />
                            </button>
                        </li>
                    </ul>
                    <hr className={cx('inner-product-hrend')} />
                </div>
                <div className={cx('inner-total')}>
                    <p>
                        Tạm tính:
                        <span>447.000</span>
                    </p>

                    <p>
                        Phí giao hàng:
                        <span>30.000</span>
                    </p>

                    <hr style={{ border: '1px solid #ccc', marginTop: '50px' }} />

                    <p className={cx('total')}>
                        Tổng cộng
                        <span>477.000</span>
                    </p>

                    <Link to="/deliverInfo">
                        <button className={cx('submit')} type="submit">
                            thanh toán ngay
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
