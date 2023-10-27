import React, { useState, useEffect } from 'react';
import style from './feelback.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(style);
export const FeelbackPage = () => {
    return (
        <div className={cx('main-feelback')}>
                <div className={cx('content-feelback')}>
                    <div className={cx('content-title')}>
                        <span className={cx('icon')}>
                            <i class="fa-solid fa-message"></i>
                        </span>
                        <p style={{ opacity: 0.5 }}>-</p>
                        <div className={cx('name-title')}>
                            <p>Nhận Xét</p>
                        </div>
                    </div>
                </div>
                <div className={cx('content-table')}>
                <div className={cx('title_list')}>
                <h2>Danh sách sản phẩm</h2>
                <Link to={"/create"}><button className={cx('add')}>+ Thêm sản phẩm</button></Link>
            </div>  
            <div className={cx('search_list')}> 
                  <hr className={cx('ruler')}></hr>
                  <div className={cx('search')}>             
                  <span>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input className={cx('list-input')} type='text' placeholder='Search'/>                                    
            </div>
            </div>           
                    <table className={cx('products')}>
                        <thead>
                            <tr>
                                <th>Mã Bình Luận</th>
                                <th>Tên Người Dùng</th>
                                <th>Bình Luận</th>
                                <th>Ngày Bình Luận</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}