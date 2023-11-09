import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);

function Slider() {
    // useEffect(() => {
    //     Aos.init();
    // }, []);

    return (
      // <div
      //     className={cx('slider')}
      //     data-aos="fade-left"
      //     data-aos-offset="200"
      //     data-aos-easing="ease-in-sine"
      //     data-aos-duration="600"
      // >
      //     <img
      //         src={
      //             'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'
      //         }
      //     />
      // </div>

      <div>
        <div
          id="default-carousel"
          className="relative w-full my-[20px]"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Item 1 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  object-cover"
                alt="..."
              />
            </div>
            {/* Item 2 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                // src="/docs/images/carousel/carousel-2.svg"
                src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}

                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                alt="..."
              />
            </div>
            {/* Item 3 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                // src="/docs/images/carousel/carousel-3.svg"
                src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}

                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                alt="..."
              />
            </div>
            {/* Item 4 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                // src="/docs/images/carousel/carousel-4.svg"
                src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}

                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                alt="..."
              />
            </div>
            {/* Item 5 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                // src="/docs/images/carousel/carousel-5.svg"
                src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                alt="..."
              />
            </div>
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to={0}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to={1}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to={2}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to={3}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to={4}
            />
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    );
}

export default Slider;
