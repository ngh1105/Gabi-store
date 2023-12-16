import PageLayout from "components/page-layout";

export default function WishlistPage() {



    return (
        <>
            <PageLayout title="Yêu thích">
                <section className="mx-auto max-w-screen-xl py-10">
                    <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                        Yêu thích
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="lg:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">Sản phẩm</th>
                                            <th className="text-left font-semibold">Đơn giá</th>
                                            <th className="text-center font-semibold"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                            {/* {cart.length <= 0 ? <EmptyWishlist /> : null} */}
                        </div>
                        <div className="lg:w-1/4">
                            <div className="">

                            </div>
                        </div>
                    </div>
                </section>
            </PageLayout>
        </>
    )
}