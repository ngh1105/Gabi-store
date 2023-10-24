import styles from './topbar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import Button from 'components/Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from 'components/Poppers/Menu';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        // Menu cấp 2
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Hỗ trợ và đánh giá',
        to: '/cart',
    },
];

export const Topbar = () => {

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* Logo */}
                    <Link to="/" style={{ borderRadius: '50%' }}>
                        {/* <img className={cx('logo')} src={logo} />  */}
                        <h2 className={cx('brand')}>gabistore</h2>
                    </Link>
                    {/* HeaderMenu */}
                    <div className={cx('headerMenu')}>
                        <ul>
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>

                            <li>
                                <Link to="/about">Câu chuyện</Link>
                            </li>

                            <li>
                                <Link to= '/blog'>Blog</Link>
                            </li>

                            <li>
                                <Link to="/product/all">Sản phẩm</Link>
                            </li>

                            <li>
                                <Link to="/contact">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('icon')}>
                        <>
                            {/* user */}
                            <Link to="/login">
                                <FontAwesomeIcon className={cx('user')} icon={faUser} />
                            </Link>

                            {/* search */}
                            <FontAwesomeIcon className={cx('search')} icon={faMagnifyingGlass} />


                            {/* cart */}
                            <Link to="/cart">
                                {' '}
                                <FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />
                            </Link>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    </div>
                </div>
            </header>
        </>
    )
}