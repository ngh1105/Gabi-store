import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import Api from "app/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useImageUpload } from "hooks/use-image-upload";
import { toast } from "react-toastify";
import { API_URL } from "app/config";
import { useAuth } from "hooks/use-auth";
import utils from "utils";

export default function BillDetailPage({ id, fetchData }) {

    const [openModal, setOpenModal] = useState(false);

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

    const updateData = async () => {
        const res = await Api.Get(`/bill/${id}`);

        if (!res.isSuccess) {
            toast.error("Đã có lỗi xảy ra");
            setOpenModal(false);
            return;
        }

        //console.log(res.response);

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
    }

    useEffect(() => {
        (async () => {
            await updateData();
        })();

    }, [id]);

    const handleOpenButton = async () => {
        setOpenModal(true);
        await updateData();
    }

    return (
        <div>
            {/* Modal toggle */}
            <div className="flex">
                <button
                    onClick={() => handleOpenButton()}
                    className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 text-center " type="button">
                    Xem
                </button>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="pb-4"></Modal.Header>
                <Modal.Body className="">
                    <div className="w-full overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full overflow-x-auto">
                            <div className="my-2 p-5 bg-white">
                                <div className="flex justify-between">
                                    <span className="text-3xl font-bold text-gray-900">Mã hóa đơn #{currBill.id}</span>
                                    <div className="text-right">
                                        <span className="block text-sm font-medium text-gray-600">{currBill.fullName}</span>
                                        <span className="block text-sm font-medium text-gray-600 mt-1">{currBill.address}</span>
                                        <span className="block text-sm font-medium text-gray-600 mt-1">{utils.formatDate(currBill.createdAt)}</span>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-left font-semibold">Sản phẩm</th>
                                                <th className="text-left font-semibold">Đơn giá</th>
                                                <th className="text-left font-semibold">Số lượng</th>
                                                <th className="text-center font-semibold">Tổng cộng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                currBill.details.map((obj, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="py-4 w-80">
                                                                <div className="flex gap-2">
                                                                    <img
                                                                        className="w-16 h-16 rounded mt-1"
                                                                        src={`${API_URL}${obj.imageUrl}`}
                                                                        alt="" />
                                                                    <div className="">
                                                                        <p className="font-semibold">
                                                                            {obj.name}
                                                                        </p>
                                                                        <div>
                                                                            <div className="flex items-center gap-2 mt-1">
                                                                                <h2 className="text-sm opacity-80">
                                                                                    Màu sắc: <span className="text-bold">{obj.color ? obj.color : "Theo hình"}</span>
                                                                                </h2>

                                                                            </div>
                                                                            <h2 className="text-sm mt-1 opacity-80">
                                                                                Kích cỡ: <span className="text-bold">{obj.size ? obj.size : "Tự do"}</span>
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="py-4">{utils.formatVND(obj.price)}</td>
                                                            <td className="py-4">
                                                                <span className="text-right flex ">{obj.quantity}</span>
                                                            </td>
                                                            <td className="py-4 text-center">{utils.formatVND(obj.quantity * obj.price)}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                <hr className="mt-4" />

                                <div className="mt-8">
                                    <div className="flex justify-between">
                                        <div className=""></div>
                                        <div className="flex flex-col gap-2">
                                            <div className="">
                                                <div className="inline-block text-sm font-bold text-gray-600">Phương thức thanh toán:</div>
                                                <div className="inline-block ml-2 text-sm font-medium text-gray-600">{currBill.paymentMethod}</div>
                                            </div>
                                            <div className="">
                                                <div className="inline-block text-sm font-bold text-gray-600">Tổng tiền:</div>
                                                <div className="inline-block ml-2 text-sm font-medium text-gray-600">{utils.formatVND(currBill.totalPrice)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}