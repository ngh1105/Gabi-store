import React from 'react';
import classNames from 'classnames/bind';
import styles from './StoryDetail.module.scss';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function StoryDetail() {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('inner')}>
                <div className={cx('inner-first')}>
                    <h2 className={cx('title')}>CÂU CHUYỆN VỀ CHÚNG TÔI</h2>
                    
                </div>

                <div className={cx('inner-middle')}>
                    <div className={cx('middle-left')}>
                        <img src="https://st2.depositphotos.com/3591429/10566/i/450/depositphotos_105666254-stock-photo-business-people-at-meeting-and.jpg" />
                    </div>

                    <div className={cx('middle-right')}>
                        <h2 className={cx('title')}>SỰ THÀNH LẬP</h2>
                        <p className={cx('desc')}>
                           <span className={cx('bold')}> Áo Nam Gabi Store</span> thành lập vào năm 2022 với sứ mệnh quốc tế rõ ràng và mục đích trang phục cho những người trẻ gắn bó với môi trường,
                            những người sống trong cộng đồng và có mối quan hệ với nhau.
                        </p>

                        <p className={cx('desc')}>
                        <span className={cx('bold')}>Gabi Store</span> phát triển cùng tốc độ với khách hàng của mình, luôn theo dõi các công nghệ mới, các phong trào xã hội và các xu hướng nghệ thuật hoặc âm nhạc mới nhất.
                         Tất cả những điều này có thể được nhìn thấy không chỉ trong thiết kế của nó mà còn trong các cửa hàng. 
                        </p>

                        <p className={cx('desc')}>
                        Những người trẻ tuổi có phong cách ăn mặc giản dị, tránh xa những khuôn mẫu và muốn cảm thấy thoải mái khi mặc bất cứ thứ gì họ mặc. 
                            Để đáp ứng nhu cầu của họ, <span className={cx('bold')}>Gabi Store</span> nắm bắt những xu hướng quốc tế mới nhất, kết hợp chúng với những ảnh hưởng thường thấy trên đường phố và trong các câu lạc bộ thời trang nhất, 
                            đồng thời sửa đổi chúng theo phong cách của họ để biến chúng thành những bộ quần áo thoải mái và dễ mặc.
                        </p>

                        <p className={cx('desc')}>
                            Bên cạnh đó, với tiêu chí <span className={cx('bold')}>"Good Mood - Good Day"</span>, nên các sản phẩm áo nam cao cấp tại
                            <span className={cx('bold')}> Gabi Store</span> cũng có những thiết kế basic, dễ dàng phối đồ dành cho các bạn nam.
                        </p>

                        <p className={cx('desc')}>
                        Lấy cảm hứng từ các style trẻ trung của các giới trẻ , 
                         các dòng sản phẩm liên tục được cập nhật. Tất cả các cửa hàng trên toàn thế giới đều nhận được hàng mới hai lần một tuần.
                        </p>

                        <div className={cx('sub')}>- THANKS FOR READING - </div>
                    </div>
                </div>
            </div>
        </div>

       
    );
}

export default StoryDetail;
