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
    <div className="w-[1230px] m-auto  ">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                src={
                  "https://i.pinimg.com/564x/9d/7a/57/9d7a5788f72acb9fe0da2631f4253ac6.jpg"
                }
                alt="Helene Avatar"
              />
              <p className="capitalize">Tất cả sản phẩm</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                src={
                  "https://i.pinimg.com/564x/fa/25/2a/fa252a1c5863779537a87a2f67c30108.jpg"
                }
                alt="Jese Avatar"
              />
              <p>Áo Polo</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                src={
                  "https://i.pinimg.com/564x/c6/c5/bc/c6c5bcf8e9b4f95f274aa0734e6cbde3.jpg"
                }
                alt="Joseph Avatar"
              />

              <p className="capitalize">Áo thun thể thao</p>
            </div>

            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={
                  "https://i.pinimg.com/564x/b7/79/50/b779506abb38f0ecbd7696b5ae52b33e.jpg"
                }
                alt="Bonnie Avatar"
              />

              <p>Quần Short Nam</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Category;
