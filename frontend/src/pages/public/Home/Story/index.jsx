import { Link } from "react-router-dom";
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Story() {
    return (
        <>

<div className=" flex space-x-10 justify-center ">
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="/storydetail">
            <img className="rounded-t-lg" src="https://file.hstatic.net/1000184601/file/profile-img-5_b6ef82190aac43aba3d03e990d826458.jpg" alt="Noteworthy technology acquisitions 2021" />
        </a>
        <div className="p-5">
            <a href="/storydetail">
                <h4 className="font-semibold text-xl ">BỨT PHÁT NỔ LỰC KHÔNG NGỪNG</h4>
               
            </a>
            <p className="font-light text-gray-700 mb-3"> Có mặt từ năm 2009, với những nỗ lực không ngừng, Gabi Store đã
                        vươn mình mạnh mẽ và trở thành thương hiệu thời trang dành cho cặp
                        đôi đầu tiên tại Việt Nam.</p>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="/storydetail">
                Xem thêm
            </a>
        </div>
    </div>

    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="/storydetail">
            <img className="rounded-t-lg" src="https://file.hstatic.net/1000184601/file/profile-new-2_c3d71ea46248436699cc8b296fc2aeea.jpg" alt="Noteworthy technology acquisitions 2021" />
        </a>
        <div className="p-5">
            <a href="/storydetail">
                <h3 className="font-semibold text-xl">HƯỚNG ĐẾN THỜI TRANG BỀN VỮNG</h3>
            </a>
            <p className="font-light text-gray-700 mb-3"> Gabi Store chú trọng phát triển những sản phẩm hướng đến thời
                        trang bền vững bằng việc sử dụng các chất liệu thân thiện với môi
                        trường như: vải cotton, vải lanh,...</p>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="/storydetail">
                Xem thêm
            </a>
        </div>
    </div>

    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="/storydetail">
            <img className="rounded-t-lg" src="https://file.hstatic.net/1000184601/file/profile-img-8_84ceaf2387d94838be96a16c13245a5d.jpg" alt="Noteworthy technology acquisitions 2021" />
        </a>
        <div className="p-5">
            <a href="/storydetail">
                <h4 className="font-semibold text-xl">TẦM NHÌN & SỨ MỆNH 2023</h4>
            </a>
            <p className="font-light text-gray-700 mb-3"> Mang đến những sản phẩm thời trang ứng dụng công nghệ tiên tiến và
                        dịch vụ vượt mong đợi. Là người bạn đồng hành đáng tin cậy trên
                        chặng đường phát triển.</p>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="/storydetail">
                Xem thêm
            </a>
        </div>
    </div>
</div>



            {/* <div className={cx("content")}>
                <div className={cx("card")}>
                    <img
                        src={
                            "https://file.hstatic.net/1000184601/file/profile-img-5_b6ef82190aac43aba3d03e990d826458.jpg"
                        }
                    ></img>

                    <h4>BỨT PHÁT NỔ LỰC KHÔNG NGỪNG</h4>
                    <p>
                        Có mặt từ năm 2009, với những nỗ lực không ngừng, Gabi Store đã
                        vươn mình mạnh mẽ và trở thành thương hiệu thời trang dành cho cặp
                        đôi đầu tiên tại Việt Nam.
                    </p>
                    <Link to="/storydetail">
                        <Button className={cx("btn")}>Xem thêm</Button>
                    </Link>
                </div>
                <div className={cx("card")}>
                    <img
                        src={
                            "https://file.hstatic.net/1000184601/file/profile-new-2_c3d71ea46248436699cc8b296fc2aeea.jpg"
                        }
                    ></img>

                    <h4>HƯỚNG ĐẾN THỜI TRANG BỀN VỮNG </h4>
                    <p>
                        Gabi Store chú trọng phát triển những sản phẩm hướng đến thời
                        trang bền vững bằng việc sử dụng các chất liệu thân thiện với môi
                        trường như: vải cotton, vải lanh,...
                    </p>
                    <Link to="/storydetail">
                        <Button className={cx("btn")}>Xem thêm</Button>
                    </Link>
                </div>

                <div className={cx("card")}>
                    <img
                        src={
                            "https://file.hstatic.net/1000184601/file/profile-img-8_84ceaf2387d94838be96a16c13245a5d.jpg"
                        }
                    ></img>

                    <h4>TẦM NHÌN & SỨ MỆNH 2023</h4>
                    <p>
                        Mang đến những sản phẩm thời trang ứng dụng công nghệ tiên tiến và
                        dịch vụ vượt mong đợi. Là người bạn đồng hành đáng tin cậy trên
                        chặng đường phát triển.
                    </p>
                    <Link to="/storydetail">
                        <Button className={cx("btn")}>Xem thêm</Button>
                    </Link>
                </div>
            </div> */}

        </>
    );
}

export default Story;
