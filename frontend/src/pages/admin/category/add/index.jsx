import { Modal } from "flowbite-react";
import { useState } from "react";

export default function AddPage() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div>
                {/* Modal toggle */}
                <div className="flex justify-center m-5">
                    <button
                        onClick={() => setOpenModal(true)}
                        className="block text-white w-24 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Thêm
                    </button>
                </div>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header className="pb-4">Thêm loại hàng</Modal.Header>
                    <Modal.Body className="pt-2">
                        <form action="#">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên loại hàng</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type product name" required />
                                </div>
                                <div>
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày tạo</label>
                                    <input type="date" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Product brand" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                                    <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Viết vào đây" defaultValue={""} />
                                </div>
                            </div>
                            <button
                                onClick={() => setOpenModal(false)}
                                type="submit"
                                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                Xong
                            </button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}