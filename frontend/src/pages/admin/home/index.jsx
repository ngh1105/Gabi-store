import React, { useState, useEffect } from 'react';
import style from './home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  import {BarChart,Bar,} from "recharts";
const cx = classNames.bind(style);
export const HomeAdminPage = () => {
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];
    return (
        <div className={cx('home')}>
            <div className={cx('main-home')}>
                <div className={cx('content-home')}>
                    <div className={cx('content-title')}>
                        <span className={cx('icon')}>
                            <i class="fa-solid fa-message"></i>
                        </span>
                        <p style={{ opacity: 0.5 }}>-</p>
                        <div className={cx('name-title')}>
                            <p>Tài khoản</p>
                        </div>
                    </div>
                </div>
                <div className={cx('big-card')}>
                <div className={cx('my-card')}>
                    <div className={cx('card-inner')}>
                        <h3>Sản phẩm</h3>
                        <span className={cx('icon')}>
                            <i class="fa-brands fa-product-hunt fa-lg"></i>
                        </span>
                    </div>
                    <h4>300</h4>
                </div>
                <div className={cx('my-card1')}>
                    <div className={cx('card-inner')}>
                        <h3>Tài khoản</h3>
                        <span className={cx('icon')}>
                        <i class="fa-solid fa-users fa-lg"></i>
                        </span>
                    </div>
                    <h4>300</h4>
                </div>
                <div className={cx('my-card2')}>
                    <div className={cx('card-inner')}>
                        <h3>Nhận xét</h3>
                        <span className={cx('icon')}>
                        <i class="fa-solid fa-message fa-lg"></i>
                        </span>
                    </div>
                    <h4>300</h4>
                </div>
                <div className={cx('my-card3')}>
                    <div className={cx('card-inner')}>
                        <h3>Trang chủ</h3>
                        <span className={cx('icon')}>
                        <i class="fa-solid fa-house fa-lg"></i>
                        </span>
                    </div>
                    <h4>300</h4>
                </div>
                </div>
                <div className={cx('master-map')}>
                    <div className={cx('chart')}>
                <LineChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
      <             Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </div>
                <div className={('charts1')}>
                <BarChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
   
                </div>
                </div>
               
            </div>
        </div>
    )
}