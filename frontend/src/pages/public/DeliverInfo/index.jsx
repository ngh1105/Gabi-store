import styles from './DeliverInfo.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const checkboxList = [
    {
        id: 1,
        name: 'COD',
    },

    {
        id: 2,
        name: 'Ví điện tử ShopeePay',
    },

    {
        id: 3,
        name: 'Thanh toán Momo',
    },

    {
        id: 4,
        name: 'Ví điện tử ZaloPay',
    },
];

function DeliverInfo() {
    const [quanity, setQuanity] = useState(1);
    const [name, setName] = useState('');
    console.log(name);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [checked, setChecked] = useState(1);

    const handlePay = () => {
        console.log({
            name,
            phone,
            email,
            address,
            note,
            checked,
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-title')}>
                <h3>Thông tin vận chuyển</h3>
                <p>
                    Bạn đã có tài khoản?{' '}
                    <Link to="/login">
                        <span>Đăng nhập ngay</span>
                    </Link>
                </p>
            </div>
            <div className={cx('form-field')}>
                <div className={cx('form-field-total')}>
                    <div className={cx('form-field-1')}>
                        <div className={cx('twice')}>
                            <div className={cx('twice-1')}>
                                <input
                                    className={cx('form-input')}
                                    placeholder="Họ tên của bạn"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    className={cx('form-input')}
                                    placeholder="SDT của bạn"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <input
                            className={cx('form-input')}
                            placeholder="Email của bạn"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            className={cx('form-input')}
                            placeholder="Địa chỉ của bạn"
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        <input
                            className={cx('form-input')}
                            placeholder="Ghi chú thêm (nếu cần)"
                            onChange={(e) => setNote(e.target.value)}
                        />
                        <div className={cx('method')}>
                            <h3>Phương thức thanh toán</h3>
                            {checkboxList.map((checkbox) => (
                                <div className={cx('method-cod')}>
                                    <div key={checkbox.id}>
                                        <input
                                            className={cx('method-cod__radio')}
                                            type="radio"
                                            onChange={() => setChecked(checkbox.id)}
                                            checked={checked === checkbox.id}
                                        />
                                        <label className={cx('method-cod__name')}>{checkbox.name}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>
                            Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm.
                            Tìm hiểu thêm{' '}
                            <Link to="/policy">
                                <span>tại đây</span>
                            </Link>
                        </p>
                        <Link to="/confirm_order">
                            <button className={cx('btn-pay')} onClick={handlePay}>
                                Thanh toán 596k{' '}
                            </button>
                        </Link>
                    </div>
                    <div className={cx('form-field-2')}>
                        <div className={cx('name')}>Giỏ hàng</div>
                        <div className={cx('form-field-total')}>
                            <div className={cx('form-field-total-1')}>
                                <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                            </div>
                            <div className={cx('form-field-total-2')}>
                                <div className={cx('form-field-total-2-1')}>
                                    <p> Áo thun nam Cotton Coolmate Basics 200gsm </p>
                                </div>
                                <div className={cx('form-field-total-2-2')}>Màu/Size</div>
                                <div className={cx('form-field-total-2-3')}>
                                    <div className={cx('form-field-total-2-31')}>
                                        <div className={cx('form-field-total-2-select1')}>
                                            <select>
                                                <option value="">Đen</option>
                                                <option>Trắng</option>
                                            </select>
                                        </div>
                                        <div className={cx('form-field-total-2-select')}>
                                            <select>
                                                <option value="">M</option>
                                                <option>L</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-field-total-2-4')}>
                                    <button onClick={() => setQuanity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                                    {quanity}
                                    <button onClick={() => setQuanity((prev) => prev + 1)}>+</button>
                                </div>
                            </div>
                            <div className={cx('form-field-total-3')}>
                                <div className={cx('form-field-total-3-1')}>
                                    <button>
                                        <FontAwesomeIcon icon={faXmark} size="xl" />
                                    </button>
                                </div>
                                <div className={cx('form-field-total-3-2')}>149.000đ</div>
                                <div className={cx('form-field-total-3-3')}>
                                    <del>300.000đ</del>
                                </div>
                            </div>
                        </div>
                        <div className={cx('form-field-disc')}>
                            <input
                                className={cx('form-disc')}
                                placeholder="Nhập mã giảm giá"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className={cx('form-button')}> Áp dụng </button>
                        </div>
                        <hr className={cx('hr-end')} />
                        <div className={cx('form-field-pay')}>
                            <div className={cx('form-field-pay-left')}>
                                <ul>
                                    <li>Tạm tính</li>
                                    <li className={cx('form-field-pay-left-2')}>Giảm giá</li>
                                    <li>Phí giao hàng</li>
                                </ul>
                            </div>
                            <div className={cx('form-field-pay-right')}>
                                <ul>
                                    <li>495.000đ</li>
                                    <li className={cx('form-field-pay-left-2')}>0đ</li>
                                    <li>Miễn phí</li>
                                </ul>
                            </div>
                        </div>
                        <hr className={cx('hr-end')} />
                        <div className={cx('form-field-pay')}>
                            <div className={cx('form-field-pay-left')}>
                                <ul>
                                    <li className={cx('form-field-pay-left-2')}>Tổng</li>
                                </ul>
                            </div>
                            <div className={cx('form-field-pay-right')}>
                                <ul>
                                    <li className={cx('form-field-pay-left-2-2')}>495.000đ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* method paying */}
            </div>
        </div>
    );
}

export default DeliverInfo;
