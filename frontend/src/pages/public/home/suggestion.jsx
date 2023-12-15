import Api from "app/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "components/product-item";

export default function SuggestionSection() {

    const [newestProducts, setNewestProducts] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get("/product/find-newest");
                setNewestProducts(res.response);
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
            <section className="">
                <div className="p-4 mx-auto">
                    <div className="">
                        <h2 className="pb-4 font-bold text-center text-gray-800 text-[24px] dark:text-gray-400 uppercase">
                            Hàng mới về
                        </h2>
                        <div className="mx-auto border-b border-red-700 w-44 dark:border-gray-400" />

                        <div className="mt-4">
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
                                    newestProducts.map((obj, index) => {
                                        return (
                                            <ProductItem key={index} product={obj} isNew={true} />
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>

                    {/* Love */}
                    <div className="mt-20">
                        <h2 className="pb-4 font-bold text-center text-gray-800 text-[24px] dark:text-gray-400 uppercase">
                            Sản phẩm được đánh giá cao
                        </h2>
                        <div className="mx-auto border-b border-red-700 w-44 dark:border-gray-400" />

                        <div className="mt-4">
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
                                    newestProducts.map((obj, index) => {
                                        return (
                                            <ProductItem key={index} product={obj} />
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>

                    <div className="mt-20">
                        <h2 className="pb-4 font-bold text-center text-gray-800 text-[24px] dark:text-gray-400 uppercase">
                            Sản phẩm có nhiều lượt xem
                        </h2>
                        <div className="mx-auto border-b border-red-700 w-44 dark:border-gray-400" />

                        <div className="mt-4">
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
                                    newestProducts.map((obj, index) => {
                                        return (
                                            <ProductItem key={index} product={obj} />
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
