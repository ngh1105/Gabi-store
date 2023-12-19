import { useEffect, useMemo, useState } from "react"
import AddPage from "./add";
import UpdatePage from "./update";
import DeletePage from "./delete";
import { useFlexLayout, useGlobalFilter, usePagination, useTable } from "react-table";
import Api from "app/api";
import { API_URL } from "app/config";
import PageLayout from "components/page-layout";
import utils from "utils";

export default function ProductPage() {

    const [products, setProducts] = useState([]);

    async function fetchData() {
        const res = await Api.Get("/product");

        const newData = res.response.map((obj, index) => {
            return {
                name: obj.name,
                imageUrl: <img className="w-10 h-10 rounded-full" src={`${API_URL}${obj.imageUrl}`} alt="." />,
                price: <p>{utils.formatVND(obj.price)}</p>,
                actions: (
                    <div className="w-full flex justify-end items-center gap-2 text-right">
                        <div><UpdatePage id={obj.id} fetchData={fetchData} /></div>
                        <div><DeletePage id={obj.id} fetchData={fetchData} /></div>
                    </div>
                )
            }
        })

        setProducts(newData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const columns = useMemo(() => [
        {
            Header: "Tên",
            accessor: "name",
        },
        {
            Header: "Hình ảnh",
            accessor: "imageUrl",
        },
        {
            Header: "Giá",
            accessor: "price",
        },
        {
            Header: () => <div className="text-right">Thao tác</div>,
            accessor: "actions",
            disableSortBy: true,
            disableFilters: true,
        }
    ], []);

    const data = useMemo(() => products, [products]);

    const tableInstance = useTable({
        columns,
        data,
        initialState: {
            pageSize: 5
        }
    },
        useFlexLayout,
        useGlobalFilter,
        usePagination);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        prepareRow,
        setGlobalFilter,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        page,
        gotoPage,
        pageCount,
        setPageSize,
    } = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <PageLayout title="Sản phẩm">
            <section className="bg-gray-50 p-3 sm:p-5">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    {/* Start coding here */}
                    <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex justify-center items-center mt-0" onSubmit={e => e.preventDefault()} >
                                    <label className="sr-only">Tìm kiếm</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                                            placeholder="Tìm kiếm"
                                            value={globalFilter || ""}
                                            onChange={e => setGlobalFilter(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <AddPage fetchData={fetchData} />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table
                                {...getTableProps()}
                                className="w-full text-sm text-left text-gray-500"
                            >
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    {
                                        headerGroups.map(headerGroup => (
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {
                                                    headerGroup.headers.map(column => (
                                                        <th
                                                            {...column.getHeaderProps()}
                                                            scope="col"
                                                            className="px-6 py-3"
                                                        >
                                                            {column.render("Header")}
                                                        </th>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {
                                        page.map(row => {
                                            prepareRow(row);
                                            return (
                                                <tr {...row.getRowProps()}
                                                    className="border-b hover:bg-gray-50">
                                                    {
                                                        row.cells.map(cell => (
                                                            <td {...cell.getCellProps()}
                                                                className="px-6 py-3 flex items-center" >
                                                                {cell.render("Cell")}
                                                            </td>
                                                        ))
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <nav className="flex justify-between items-center space-y-3 md:space-y-0 p-4">
                            <span className="text-sm font-normal text-gray-500 ">
                                Hiển thị
                                <span className="font-semibold text-gray-900  px-1">{pageIndex + 1}</span>
                                của
                                <span className="font-semibold text-gray-900  px-1">{pageOptions.length}</span>
                            </span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                <li>
                                    <button
                                        onClick={() => previousPage()} disabled={!canPreviousPage}
                                        className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                                        <span className="sr-only">Previous</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => nextPage()} disabled={!canNextPage}
                                        className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 ">
                                        <span className="sr-only">Next</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}