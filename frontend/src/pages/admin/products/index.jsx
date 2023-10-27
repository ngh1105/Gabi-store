import React, { useState, useEffect } from 'react';
import style from './products.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(style);
export const ProductsPage = () => {
    return (
        <div className={cx('main-home')}>
        <div className={cx('content')}>
            <div className={cx('content-title')}>
                <span className={cx('icon')}>
                    <i className="fa-solid fa-house"></i>
                </span>
                <p style={{ opacity: 0.5 }}>-</p>
                <div className={cx('name-title')}>
                    <p>Sản Phẩm</p>
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
                        <th>Mã hàng</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá</th>
                        <th>Kích cỡ</th>
                        <th>Số lượng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                  
                        <tr >
                            <td>323</td>
                            <td>Quần đùi cao cấp </td>
                            <td>
                                <img
                                 src={
                                    'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                }
                                    alt="product"
                                    style={{ width: '30px', height: '30px' }}
                                />
                            </td>
                            <td>105.000đ</td>
                            <td>L</td>
                            <td>1550</td>
                            <td className={cx('icon')}>
                                <span className={cx('icon-fix')}>
                                    <i className="fa-solid fa-wrench "></i>
                                </span>
                                <span className={cx('icon-delete')}>
                                    <i className="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                </span>
                            </td>
                        </tr>
                        <tr >
                            <td>323</td>
                            <td>Quần đùi cao cấp </td>
                            <td>
                                <img
                                 src={
                                    'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                }
                                    alt="product"
                                    style={{ width: '30px', height: '30px' }}
                                />
                            </td>
                            <td>105.000đ</td>
                            <td>L</td>
                            <td>1550</td>
                            <td className={cx('icon')}>
                                <span className={cx('icon-fix')}>
                                    <i className="fa-solid fa-wrench "></i>
                                </span>
                                <span className={cx('icon-delete')}>
                                    <i className="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                </span>
                            </td>
                        </tr>
                        <tr >
                            <td>323</td>
                            <td>Quần đùi cao cấp </td>
                            <td>
                                <img
                                 src={
                                    'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                }
                                    alt="product"
                                    style={{ width: '30px', height: '30px' }}
                                />
                            </td>
                            <td>105.000đ</td>
                            <td>L</td>
                            <td>1550</td>
                            <td className={cx('icon')}>
                                <span className={cx('icon-fix')}>
                                    <i className="fa-solid fa-wrench "></i>
                                </span>
                                <span className={cx('icon-delete')}>
                                    <i className="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                </span>
                            </td>
                        </tr>
                        <tr >
                            <td>323</td>
                            <td>Quần đùi cao cấp </td>
                            <td>
                                <img
                                 src={
                                    'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                }
                                    alt="product"
                                    style={{ width: '30px', height: '30px' }}
                                />
                            </td>
                            <td>105.000đ</td>
                            <td>L</td>
                            <td>1550</td>
                            <td className={cx('icon')}>
                                <span className={cx('icon-fix')}>
                                    <i className="fa-solid fa-wrench "></i>
                                </span>
                                <span className={cx('icon-delete')}>
                                    <i className="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                </span>
                            </td>
                        </tr>
                        <tr >
                            <td>323</td>
                            <td>Quần đùi cao cấp </td>
                            <td>
                                <img
                                 src={
                                    'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                }
                                    alt="product"
                                    style={{ width: '30px', height: '30px' }}
                                />
                            </td>
                            <td>105.000đ</td>
                            <td>L</td>
                            <td>1550</td>
                            <td className={cx('icon')}>
                                <span className={cx('icon-fix')}>
                                    <i className="fa-solid fa-wrench "></i>
                                </span>
                                <span className={cx('icon-delete')}>
                                    <i className="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                </span>
                            </td>
                        </tr>
                        <tr >
                            <td>323</td>
                            <td>Quần đùi cao cấp </td>
                            <td>
                                <img
                                 src={
                                    'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                }
                                    alt="product"
                                    style={{ width: '30px', height: '30px' }}
                                />
                            </td>
                            <td>105.000đ</td>
                            <td>L</td>
                            <td>1550</td>
                            <td className={cx('icon')}>
                                <span className={cx('icon-fix')}>
                                    <i className="fa-solid fa-wrench "></i>
                                </span>
                                <span className={cx('icon-delete')}>
                                    <i className="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                </span>
                            </td>
                        </tr>
                        <tr >
                            <td>323</td>
                            <td>Quần đùi cao cấp </td>
                            <td>
                                <img
                                 src={
                                    'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                }
                                    alt="product"
                                    style={{ width: '30px', height: '30px' }}
                                />
                            </td>
                            <td>105.000đ</td>
                            <td>L</td>
                            <td>1550</td>
                            <td className={cx('icon')}>
                                <span className={cx('icon-fix')}>
                                    <i className="fa-solid fa-wrench "></i>
                                </span>
                                <span className={cx('icon-delete')}>
                                    <i className="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                </span>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
}