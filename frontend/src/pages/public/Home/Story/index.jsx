import { Link } from "react-router-dom";
import Button from 'components/Button';
import styles from './Story.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles);

function Story() {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('header')}>
                        <h1>về chúng tôi</h1>
                    </div>

                    <div className={cx('content')}>

                        <div className={cx('card')}>
                            <img src={'https://file.hstatic.net/1000184601/file/profile-img-5_b6ef82190aac43aba3d03e990d826458.jpg'}></img>

                            <h4>BỨT PHÁT NỔ LỰC KHÔNG NGỪNG</h4>
                            <p>
                                Có mặt từ năm 2009, với những nỗ lực không ngừng, Gabi Store đã vươn mình mạnh mẽ và trở thành thương hiệu thời trang dành cho cặp đôi đầu tiên tại Việt Nam.
                            </p>
                            <Link to="/storydetail">
                                <Button className={cx('btn')}>
                                    Xem thêm
                                </Button>

                            </Link>
                        </div>
                        <div className={cx('card')}>
                            <img src={'https://file.hstatic.net/1000184601/file/profile-new-2_c3d71ea46248436699cc8b296fc2aeea.jpg'}></img>

                            <h4>HƯỚNG ĐẾN THỜI TRANG BỀN VỮNG </h4>
                            <p>
                                Gabi Store chú trọng phát triển những sản phẩm hướng đến thời trang bền vững bằng việc sử dụng các chất liệu thân thiện với môi trường như: vải cotton, vải lanh,...
                            </p>
                            <Link to="/storydetail">
                                <Button className={cx('btn')}>
                                    Xem thêm
                                </Button>

                            </Link>
                        </div>

                        <div className={cx('card')}>
                            <img src={'https://file.hstatic.net/1000184601/file/profile-img-8_84ceaf2387d94838be96a16c13245a5d.jpg'}></img>

                            <h4>TẦM NHÌN & SỨ MỆNH 2023</h4>
                            <p>
                                Mang đến những sản phẩm thời trang ứng dụng công nghệ tiên tiến và dịch vụ vượt mong đợi. Là người bạn đồng hành đáng tin cậy trên chặng đường phát triển.
                            </p>
                            <Link to="/storydetail">
                                <Button className={cx('btn')}>
                                    Xem thêm
                                </Button>

                            </Link>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Story;
