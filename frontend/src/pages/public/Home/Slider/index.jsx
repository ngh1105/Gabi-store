import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

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

        // <div>
        //   <div
        //     id="default-carousel"
        //     className="relative w-full my-[20px]"
        //     data-carousel="slide"
        //   >
        //     {/* Carousel wrapper */}
        //     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        //       {/* Item 1 */}
        //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //         <img
        //           src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}
        //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  object-cover"
        //           alt="..."
        //         />
        //       </div>
        //       {/* Item 2 */}
        //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //         <img
        //           // src="/docs/images/carousel/carousel-2.svg"
        //           src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}

        //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
        //           alt="..."
        //         />
        //       </div>
        //       {/* Item 3 */}
        //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //         <img
        //           // src="/docs/images/carousel/carousel-3.svg"
        //           src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}

        //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
        //           alt="..."
        //         />
        //       </div>
        //       {/* Item 4 */}
        //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //         <img
        //           // src="/docs/images/carousel/carousel-4.svg"
        //           src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}

        //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
        //           alt="..."
        //         />
        //       </div>
        //       {/* Item 5 */}
        //       <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //         <img
        //           // src="/docs/images/carousel/carousel-5.svg"
        //           src={'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'}
        //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
        //           alt="..."
        //         />
        //       </div>
        //     </div>
        //     {/* Slider indicators */}
        //     <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        //       <button
        //         type="button"
        //         className="w-3 h-3 rounded-full"
        //         aria-current="true"
        //         aria-label="Slide 1"
        //         data-carousel-slide-to={0}
        //       />
        //       <button
        //         type="button"
        //         className="w-3 h-3 rounded-full"
        //         aria-current="false"
        //         aria-label="Slide 2"
        //         data-carousel-slide-to={1}
        //       />
        //       <button
        //         type="button"
        //         className="w-3 h-3 rounded-full"
        //         aria-current="false"
        //         aria-label="Slide 3"
        //         data-carousel-slide-to={2}
        //       />
        //       <button
        //         type="button"
        //         className="w-3 h-3 rounded-full"
        //         aria-current="false"
        //         aria-label="Slide 4"
        //         data-carousel-slide-to={3}
        //       />
        //       <button
        //         type="button"
        //         className="w-3 h-3 rounded-full"
        //         aria-current="false"
        //         aria-label="Slide 5"
        //         data-carousel-slide-to={4}
        //       />
        //     </div>
        //     {/* Slider controls */}
        //     <button
        //       type="button"
        //       className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        //       data-carousel-prev
        //     >
        //       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //         <svg
        //           className="w-4 h-4 text-white dark:text-gray-800"
        //           aria-hidden="true"
        //           xmlns="http://www.w3.org/2000/svg"
        //           fill="none"
        //           viewBox="0 0 6 10"
        //         >
        //           <path
        //             stroke="currentColor"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             strokeWidth={2}
        //             d="M5 1 1 5l4 4"
        //           />
        //         </svg>
        //         <span className="sr-only">Previous</span>
        //       </span>
        //     </button>
        //     <button
        //       type="button"
        //       className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        //       data-carousel-next
        //     >
        //       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //         <svg
        //           className="w-4 h-4 text-white dark:text-gray-800"
        //           aria-hidden="true"
        //           xmlns="http://www.w3.org/2000/svg"
        //           fill="none"
        //           viewBox="0 0 6 10"
        //         >
        //           <path
        //             stroke="currentColor"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             strokeWidth={2}
        //             d="m1 9 4-4-4-4"
        //           />
        //         </svg>
        //         <span className="sr-only">Next</span>
        //       </span>
        //     </button>
        //   </div>
        // </div>

        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Gabi Store - Thời trang chất lượng</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Sản phẩm GabiStore được sản xuất và chọn lọc kĩ càng để đem ra những đầu ra chất lượng nhất để làm hài lòng khách hàng.</p>
                        <Link to="/product" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Khám phá ngay
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </Link>
                        <Link to="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Định hướng
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://images.unsplash.com/photo-1563693998336-93c10e5d8f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;
