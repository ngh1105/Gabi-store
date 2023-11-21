import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Api from "app/api";
import { toast } from "react-toastify";

export default function DeletePage({ id, fetchData }) {

    const [openModal, setOpenModal] = useState(false);

    const [status, setStatus] = useState({
        isError: false,
        errorMessage: "",
        isSubmit: false,
    });

    const navigate = useNavigate();

    const deleteUser = async () => {
        try {
            const resData = await Api.Delete(`/user/${id}`);
            if (!resData.isSuccess) {
                setStatus(prevState => ({
                    isError: true,
                    errorMessage: resData.response.message,
                    isSubmit: false,
                }));

                toast.error("Đã có lỗi xảy ra");
                setOpenModal(false);

                return;
            }

            fetchData();

            toast.success("Xóa thành công");
            setOpenModal(false);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="flex">
                <button
                    onClick={() => setOpenModal(true)}
                    className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 text-center " type="button">
                    Xóa
                </button>
            </div>
            {/* Main modal */}
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Bạn có chắc là muốn xóa ?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button className="min-w-[100px]" color="gray" onClick={() => setOpenModal(false)}>
                                Không
                            </Button>
                            <Button className="min-w-[100px]" color="failure" onClick={() => deleteUser()}>
                                Có
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}