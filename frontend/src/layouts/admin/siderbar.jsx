import React, { useState, useEffect } from 'react';
import style from './siderbar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(style);

export const Siderbar = () =>  {

    return (
        <div className={cx('admin-home')}>
        <div className={cx('sidebar')}>
            <div className={cx('title')}>
                <h2>GabiStore</h2>
            </div>
            <div className={cx('menu')}>
                <Link to="/admin" className={cx('active')}>
                    <span className={cx('icon')}>
                        <i class="fa-solid fa-house"></i>
                    </span>
                    Trang chủ
                </Link>

                <Link to="/admin/products" className={cx('active')}>
                    <span className={cx('icon')}>
                        <i class="fa-brands fa-product-hunt"></i>
                    </span>
                    Sản phẩm
                </Link>

                <Link to="/admin/account" className={cx('active')}>
                    <span className={cx('icon')}>
                        <i class="fa-solid fa-users"></i>
                    </span>
                    Tài Khoản
                </Link>

                <Link to="/admin/feelback" className={cx('active')}>
                    <span className={cx('icon')}>
                        <i class="fa-solid fa-message"></i>
                    </span>
                    Nhận xét
                </Link>

                <Link to="/" className={cx('active')}>
                    <span className={cx('icon')}>
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </span>
                    Đăng xuất
                </Link>
            </div>
        </div>
        <div className={cx('main-home')}>
            <div className={cx('header')}>
                <div className={cx('header-content')}>
                    <div className={cx('btn')}>
                        <img
                            src={
                                'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                            }
                            alt="banner"
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: '2px solid #e2336b',
                            }}
                        />
                    </div>
                    <h5>Le Thai Vinh</h5>
                </div>
            </div>
        </div>
    </div>
    );
}