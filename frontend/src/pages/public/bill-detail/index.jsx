import Api from "app/api";
import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import { useAuth } from "hooks/use-auth";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import utils from "utils";

export default function BillDetailPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [currBill, setCurrBill] = useState({
        id: 0,
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        totalPrice: 0,
        paymentMethod: "COD",
        status: "",
        userId: 0,
        details: [],
        createdAt: "",
    });

    const { user } = useAuth();

    useEffect(() => {
        (async () => {

            if (!user) {
                return;
            }

            const res = await Api.Get(`/bill/find-one/${user.userId}/${id}`);

            if (!res.isSuccess) {
                toast.error("Có lỗi khi xem trang");
                navigate("/bill");
                return;
            }

            console.log(res.response);

            setCurrBill({
                id: res.response.id,
                fullName: res.response.fullName,
                email: res.response.email,
                phoneNumber: res.response.phoneNumber,
                address: res.response.address,
                totalPrice: res.response.totalPrice,
                paymentMethod: res.response.paymentMethod,
                status: res.response.status,
                userId: res.response.userId,
                details: res.response.details,
                createdAt: res.response.createdAt,
            });
        })();

    }, [id, user]);

    return (
        <PageLayout title="Chi tiết đơn hàng">
            <section className="mx-auto max-w-screen-xl py-10">
                <div className="justify-center h-full flex-1 px-1 py-6 mx-auto max-w-7xl lg:py-4 md:px-48">
                    <div className="flex flex-wrap shadow-md border border-gray-200 rounded-xl h-full">
                        <div className="w-full lg:w-1/2">
                            <div className="px-5 pb-2">
                                <p className=" mt-3 pb-2 ml-2 font-semibold dark:text-gray-400">
                                    Thông tin đơn hàng
                                </p>
                                <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                                    Mã đơn hàng: #{currBill.id}
                                </p>
                                <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                                    Ngày đặt hàng: {utils.formatDate(currBill.createdAt)}
                                </p>
                            </div>
                            <hr className=" w-96 flex ml-8 mb-3 border-1 border-gray-300" />
                            <div className="px-5 pb-2">
                                <p className=" mt-3 pb-2 ml-2 font-semibold dark:text-gray-400">
                                    Thông tin giao hàng
                                </p>
                                <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                                    Địa chỉ: {currBill.address}
                                </p>
                                <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                                    Tên người nhận: {currBill.fullName}
                                </p>
                                <p className="mb-1 ml-2 text-sm text-gray-900 dark:text-gray-400">
                                    Số điện thoại: {currBill.phoneNumber}
                                </p>
                            </div>
                            <hr className=" w-96 flex ml-8 mb-3 border-1 border-gray-300" />
                            <div className="px-5 pb-2">
                                <p className=" mt-3 pb-2 ml-2 dark:text-gray-400">
                                    <span className="font-semibold">Phương thức thanh toán: </span> {currBill.paymentMethod}
                                </p>
                                <p className="pb-2 ml-2 dark:text-gray-400">
                                    <span className="font-semibold">Tổng tiền: </span> {utils.formatVND(currBill.totalPrice)}
                                </p>
                            </div>
                        </div>
                        <div className="w-full border-solid border-l-4 border-l-gray-100 lg:w-1/2">
                            <section className="body-font overflow-hidden">
                                {currBill.details.map((obj, index) => {
                                    return (
                                        <div className="" key={index}>
                                            <div className="flex gap-2 py-2 px-4">
                                                <img
                                                    className="w-16 h-16 rounded mt-1"
                                                    src={`${API_URL}${obj.imageUrl}`}
                                                    alt="Default avatar" />
                                                <div className="">
                                                    <p className="font-semibold">
                                                        {obj.name}
                                                    </p>
                                                    <div>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <h2 className="text-sm dark:text-gray-400 opacity-80">
                                                                Màu sắc:
                                                            </h2>
                                                            <div className="w-4 h-4 bg-cyan-300" />
                                                        </div>
                                                        <h2 className="text-sm mt-1 opacity-80">
                                                            Kích cỡ: <span className="text-bold">XL</span>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className=" w-96 flex ml-8 mb-3 border-1 border-gray-300" />
                                        </div>
                                    )
                                })}
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
