import { useFormik } from "formik";
import { useApiStatus } from "hooks/use-api-status";
import PageLayout from "components/page-layout";
import * as Yup from "yup";
import { useAuth } from "hooks/use-auth";
import Api from "app/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import utils from "utils";
import { toast } from "react-toastify";
import { API_URL } from "app/config";
import { usePaginate } from "hooks/use-paginate";

export default function BillPage() {

    const { user } = useAuth();

    const ITEMS_PER_PAGE = 4;
    const {
        items, setItems, totalItems,
        onSortItems, setTotalPages,
        onSearchItems, Pagination
    } = usePaginate(ITEMS_PER_PAGE);

    useEffect(() => {
        try {
            (async () => {
                const res = await Api.Get(`/bill/find-all/${user.userId}`);
                setTotalPages(Math.ceil(res.response.length / ITEMS_PER_PAGE));
                setItems(res.response);
            })();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <PageLayout title="Đơn hàng">
            <section className="mx-auto max-w-screen-xl py-10">
                <div className="px-4">
                    <h1 class="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                        Đơn hàng
                    </h1>
                    <div className="mt-10" align="center">
                        {
                            items.map((obj, index) => {
                                return (
                                    <Link
                                        to={`/bill-detail/${obj.id}`}
                                        key={index}
                                        className="mb-4 p-4 border rounded shadow flex justify-between items-center max-w-3xl cursor-pointer"
                                    >
                                        <h2 className="text-xl font-bold">Mã hóa đơn: #{obj.id}</h2>
                                        <div className="" align="left">
                                            <p className="mt-2">Tổng tiền: {utils.formatVND(obj.totalPrice)}</p>
                                            <p className="mt-2">Phương thức thanh toán: {obj.paymentMethod}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center mt-6">
                        <Pagination />
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
