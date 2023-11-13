import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import {
    faCartArrowDown,
    faCartPlus,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function BestSeller() {

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        Aos.init({
            duration: 400,
            delay: 200,
            easing: "ease-in-sine",
        });
    }, []);

    return (
        <div className="w-[1230px] m-auto ">
            <h1 className="my-[20px] uppercase text-[30px]  font-semibold">Bán chạy nhất</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                            alt
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                            alt
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                            alt
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                            alt
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                            alt
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                            alt
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                            alt
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                            alt
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                            alt
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                            alt
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                            alt
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                            alt
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSeller;
