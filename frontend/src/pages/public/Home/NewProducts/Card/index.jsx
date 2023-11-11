// import React from 'react';
// import styles from './Card.module.scss';
// import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const cx = classNames.bind(styles);
// function Card({ item }) {
//     console.log('item', item);
//     return (
//         <Link className={cx('link')}>
//             <div className={cx('card')}>
//                 <div className={cx('image')}>
//                     {item.new && <span>Hàng mới về</span>}
//                     <img src={item.img} className={cx('mainImg')} />

//                     <img src={item.img2} className={cx('secondImg')} />
//                 </div>
//                 <h2>{item.name}</h2>
//                 <div className={cx('prices')}>
//                     <h3>{item.price}.000</h3>
//                 </div>
//             </div>
//         </Link>
//         // <div className={cx('wrapper')}>
//         //     <div className={cx('inner')}>
//         //         <div className={cx('inner__item')} key={item.id}>
//         //             <img src={item.img} className={cx('inner__item-img')} />
//         //             <span className={cx('sub-title')}>
//         //                 <FontAwesomeIcon icon={faCartPlus} className={cx('icon')} />
//         //             </span>

//         //             <div className={cx('inner__item-content')}>
//         //                 <p className={cx('inner__item-content-title')}>
//         //                     <Link to="">{item.name}</Link>
//         //                 </p>
//         //                 <div className={cx('inner__item-content-inner')}>
//         //                     <p className={cx('inner__item-content-price')}>{item.price}.000</p>
//         //                     <span className={cx('inner__item-content-buy')}>Lượt mua: {item.buy} cái</span>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>
//     );
// }

// export default Card;
