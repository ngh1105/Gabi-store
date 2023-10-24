import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);

function Slider() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div
            className={cx('slider')}
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
        >
            <img
                src={
                    'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'
                }
            />
        </div>
    );
}

export default Slider;
