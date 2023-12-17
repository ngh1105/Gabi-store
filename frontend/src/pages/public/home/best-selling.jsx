import Api from "app/api";
import { API_URL } from "app/config";
import ProductItem from "components/product-item";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import toast from 'react-toastify';

export default function BestSellingSection() {

    const [bestSellings, setBestSellings] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get("/product/find-best-selling");
                if (!res.isSuccess) {
                    toast.error("Đã có lỗi xảy ra");
                    return;
                }

                setBestSellings(res.response);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div className="mx-auto max-w-screen-xl">
            <section className="py-10 dark:bg-gray-800 font-poppins">
                <div className="p-4 mx-auto">
                    <h2 className="pb-4 font-bold text-center text-gray-800 text-[24px] dark:text-gray-400 uppercase">
                        Bán chạy nhất
                    </h2>
                    <div className="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400" />

                    <Carousel
                        responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        itemClass="px-2"
                    >
                        {
                            bestSellings.map((obj, index) => {
                                return (
                                    <ProductItem key={index} product={obj} />
                                )
                            })
                        }
                    </Carousel>
                </div>
            </section>
        </div>
    );
}