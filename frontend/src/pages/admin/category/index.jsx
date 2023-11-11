import { useMemo } from "react"
import AddPage from "./add";
import { Link } from "react-router-dom";
export default function CategoryPage() {
  const category = useMemo(() => [
    {
      id:"12322",
      name: "Xiaomi 14 pro",
      description: "Sản phẩm rất chất lượng",
      created_at:"17/11",
    },
    {
      id:"12322",
      name: "Samsung Galaxy S22 Ultra",
      description: "Sản phẩm rất tốt",
      created_at:"1/11",
    },
    {
      id:"12365",
      name: "Apple iPhone 14",
      description: "Sản phẩm rất đẹp",
      created_at:"10/11",
    },
    {
      id:"12322",
      name: "Xiaomi 14 pro",
      description: "Sản phẩm rất chất lượng",
      created_at:"17/11",
    },
    {
      id:"12322",
      name: "Samsung Galaxy S22 Ultra",
      description: "Sản phẩm rất tốt",
      created_at:"1/11",
    },
    {
      id:"12365",
      name: "Apple iPhone 14",
      description: "Sản phẩm rất đẹp",
      created_at:"10/11",
    },
    {
      id:"12322",
      name: "Xiaomi 14 pro",
      description: "Sản phẩm rất chất lượng",
      created_at:"17/11",
    },
    {
      id:"12322",
      name: "Samsung Galaxy S22 Ultra",
      description: "Sản phẩm rất tốt",
      created_at:"1/11",
    },
    {
      id:"12365",
      name: "Apple iPhone 14",
      description: "Sản phẩm rất đẹp",
      created_at:"10/11",
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
                    <AddPage/>
                  <div className="flex items-center space-x-3 w-full md:w-auto">
                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                      </svg>
                      Bộ lọc
                      <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                    <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow ">
                      <h6 className="mb-3 text-sm font-medium text-gray-900 ">Choose brand</h6>
                      <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                        <li className="flex items-center">
                          <input id="apple" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 " />
                          <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 ">Apple (56)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="fitbit" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 " />
                          <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 ">Microsoft (16)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="razor" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 " />
                          <label htmlFor="razor" className="ml-2 text-sm font-medium text-gray-900 ">Razor (49)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="nikon" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 " />
                          <label htmlFor="nikon" className="ml-2 text-sm font-medium text-gray-900 ">Nikon (12)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="benq" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 " />
                          <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 ">BenQ (74)</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 0">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Tên loại hàng
                    </th>
                    <th scope="col" className="px-4 py-3">
                    Mô tả của loại hàng
                    </th>
                    <th scope="col" className="px-4 py-3">
                    Ngày tạo
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>       
                {
                                   category.map((obj, index) => {
                                        return (
                                            <tr className="border-b dark:border-gray-700"  key={index} >
                                                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{obj.id}</th>
                                                <td className="px-4 py-3">{obj.name}</td>
                                                <td className="px-4 py-3">{obj.description}</td>
                                                <td className="px-4 py-3">{obj.created_at}</td>
                                              
                                                <td className="px-4 py-3 flex items-center justify-end">
                                                  <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none " type="button">
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    </svg>
                                                  </button>
                                                  <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
                                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                                      <li>
                                                        <Link to="addproduct" className="block py-2 px-4 hover:bg-gray-100 ">Show</Link>
                                                      </li>
                                                      <li>                                                     
                                                        <Link to="updateproduct" className="block py-2 px-4 hover:bg-gray-100 ">Edit</Link>
                                                      </li>
                                                    </ul>
                                                    <div className="py-1">
                                                      <Link to="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Delete</Link>
                                                    </div>
                                                  </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                </tbody>
              </table>
            </div>
                                    {/* dsdsds */}
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