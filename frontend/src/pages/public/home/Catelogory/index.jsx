import styles from "./catelog.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Category() {
  return (
    // <div className={cx('wrapper')}>
    //     <div className={cx('inner-item')}>
    //         <Link to="/product">
    //             <img
    //                 className={cx("inner-image")}
    //                 src={'https://i.pinimg.com/564x/9d/7a/57/9d7a5788f72acb9fe0da2631f4253ac6.jpg'}
    //                 alt=""
    //                 style={{ width: '270px', objectFit: 'cover' }}
    //             />

    //             <p className={cx('content')}>Tất cả sản phẩm</p>
    //         </Link>
    //     </div>

    //     <div className={cx('inner-item')}>
    //         <Link to="/product/polo">
    //             <img
    //                 className={cx("inner-image")}
    //                 src={'https://i.pinimg.com/564x/fa/25/2a/fa252a1c5863779537a87a2f67c30108.jpg'}
    //                 alt=""
    //                 style={{ width: '270px', objectFit: 'cover' }}
    //             />
    //             <p className={cx('content')}>Áo Polo</p>
    //         </Link>
    //     </div>

    //     <div className={cx('inner-item')}>
    //         <Link to="/product/shirt">
    //             {/* <img
    //                 className="inner-image"
    //                 src={'https://mcdn.coolmate.me/image/May2023/mceclip2_89.jpg'}
    //                 alt=""
    //             /> */}

    //             <img
    //                className={cx("inner-image")}
    //                 src={'https://i.pinimg.com/564x/c6/c5/bc/c6c5bcf8e9b4f95f274aa0734e6cbde3.jpg'}
    //                 alt=""
    //                 style={{ width: '270px', objectFit: 'cover' }}
    //             />

    //             <p className={cx('content')}>Áo thun thể thao</p>
    //         </Link>
    //     </div>

    //     <div className={cx('inner-item')}>
    //         <Link to="/product/pants">
    //             {/* <img
    //                 className="inner-image"
    //                 src={'https://mcdn.coolmate.me/image/April2023/mceclip2_53.jpg'}
    //                 alt=""
    //             /> */}

    //             <img
    //                 className={cx("inner-image")}
    //                 src={'https://i.pinimg.com/564x/b7/79/50/b779506abb38f0ecbd7696b5ae52b33e.jpg'}
    //                 alt=""
    //                 style={{ width: '270px', objectFit: 'cover' }}
    //             />

    //             <p className={cx('content')}>Quần Short</p>
    //         </Link>
    //     </div>
    // </div>

    // <div className="w-[1230px] m-auto  ">
    //   <section className="bg-white dark:bg-gray-900">
    //     <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    //       <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //          <Link to="/product">
    //         <div className="text-center text-gray-500 dark:text-gray-400">
    //             <img
    //               className="mx-auto mb-4 w-36 h-36 rounded-full"
    //               src={
    //                 "https://i.pinimg.com/564x/9d/7a/57/9d7a5788f72acb9fe0da2631f4253ac6.jpg"
    //               }
    //               alt="Helene Avatar"
    //             />
    //           <p className="capitalize">Tất cả sản phẩm</p>
    //         </div>
    //          </Link>

    //        <Link to="/product/polo">
    //           <div className="text-center text-gray-500 dark:text-gray-400">
    //             <img
    //               className="mx-auto mb-4 w-36 h-36 rounded-full"
    //               // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
    //               src={
    //                 "https://i.pinimg.com/564x/fa/25/2a/fa252a1c5863779537a87a2f67c30108.jpg"
    //               }
    //               alt="Jese Avatar"
    //             />
    //             <p>Áo Polo</p>
    //           </div>
    //        </Link>

    //        <Link to="/product/shirt">
    //           <div className="text-center text-gray-500 dark:text-gray-400">
    //             <img
    //               className="mx-auto mb-4 w-36 h-36 rounded-full"
    //               src={
    //                 "https://i.pinimg.com/564x/c6/c5/bc/c6c5bcf8e9b4f95f274aa0734e6cbde3.jpg"
    //               }
    //               alt="Joseph Avatar"
    //             />

    //             <p className="capitalize">Áo thun thể thao</p>
    //           </div>
    //        </Link>

    //         <Link to="/product/pants">
    //           <div className="text-center text-gray-500 dark:text-gray-400">
    //             <img
    //               className="mx-auto mb-4 w-36 h-36 rounded-full"
    //               src={
    //                 "https://i.pinimg.com/564x/b7/79/50/b779506abb38f0ecbd7696b5ae52b33e.jpg"
    //               }
    //               alt="Bonnie Avatar"
    //             />

    //             <p>Quần Short Nam</p>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </section>

    // </div>

    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative   overflow-hidden  rounded-lg md:h-96">
          {/* Item 1 */}
         <Link to="/product/pants">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={
                  "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                className="h-[700px] object-cover   absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
         </Link>

          {/* Item 2 */}
         <Link to="/product/shirt">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                 src={'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                className="h-[700px] object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
         </Link>
          {/* Item 3 */}
          <Link to="/product/polo">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={'https://images.unsplash.com/photo-1603252109612-24fa03d145c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                className="h-[700px] object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </Link>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              className="h-[700px] object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[700px] object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
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
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
    </>
  );
}

export default Category;
