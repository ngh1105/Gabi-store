import { useMemo } from "react"
import AddPage from "./add";
import UpdatePage from "./update";
import { Link } from "react-router-dom";
import DeletePage from "./delete";
import { Table } from "flowbite-react";
export default function CategoryPage() {
    const category = useMemo(() => [
        {
            id: "12322",
            name: "Xiaomi 14 pro",
            description: "Sản phẩm rất chất lượng",
            created_at: "17/11",
        },
        {
            id: "12322",
            name: "Samsung Galaxy S22 Ultra",
            description: "Sản phẩm rất tốt",
            created_at: "1/11",
        },
        {
            id: "12365",
            name: "Apple iPhone 14",
            description: "Sản phẩm rất đẹp",
            created_at: "10/11",
        },
        {
            id: "12322",
            name: "Xiaomi 14 pro",
            description: "Sản phẩm rất chất lượng",
            created_at: "17/11",
        },
        {
            id: "12322",
            name: "Samsung Galaxy S22 Ultra",
            description: "Sản phẩm rất tốt",
            created_at: "1/11",
        },
        {
            id: "12365",
            name: "Apple iPhone 14",
            description: "Sản phẩm rất đẹp",
            created_at: "10/11",
        },
        {
            id: "12322",
            name: "Xiaomi 14 pro",
            description: "Sản phẩm rất chất lượng",
            created_at: "17/11",
        },
        {
            id: "12322",
            name: "Samsung Galaxy S22 Ultra",
            description: "Sản phẩm rất tốt",
            created_at: "1/11",
        },
        {
            id: "12365",
            name: "Apple iPhone 14",
            description: "Sản phẩm rất đẹp",
            created_at: "10/11",
        }

    ])
    return (
        <>
            <section className="bg-gray-50  p-3 sm:p-5">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    {/* Start coding here */}
                    <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex justify-center items-center mt-0">
                                    <label htmlFor="simple-search" className="sr-only">Tìm kiếm</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 " placeholder="Tìm kiếm" required />
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <AddPage />
                            </div>
                        </div>

                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>ID</Table.HeadCell>
                                <Table.HeadCell>Tên loại hàng</Table.HeadCell>
                                <Table.HeadCell>Mô tả của loại hàng</Table.HeadCell>
                                <Table.HeadCell>Ngày tạo</Table.HeadCell>
                                <Table.HeadCell>Chức năng</Table.HeadCell>
                            </Table.Head>

                            <Table.Body className="divide-y">
                                {
                                    category.map((obj, index) => {
                                        return (
                                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell>
                                                    {obj.id}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {obj.name}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {obj.description}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {obj.created_at}
                                                </Table.Cell>
                                            </Table.Row>
                                        )
                                    })
                                }
                            </Table.Body>
                        </Table>
                        
                        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 ">
                                Hiển thị
                                <span className="font-semibold text-gray-900  px-1">1-10</span>
                                của
                                <span className="font-semibold text-gray-900  px-1">1000</span>
                            </span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                <li>
                                    <Link to="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                                        <span className="sr-only">Previous</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 ">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 ">...</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 ">100</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 ">
                                        <span className="sr-only">Next</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}