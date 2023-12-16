import { useMemo, useState } from "react";

export const usePaginate = (itemPerPage) => {

    const [totalItems, setTotalItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState(totalItems);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [keyword, setKeyword] = useState("");

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const items = useMemo(() => filteredItems.slice(startIndex, endIndex), [filteredItems, currentPage]);

    const onSearchItems = (kw) => {
        setKeyword(kw);
        const newFilteredItems = totalItems.filter(item => item.name.includes(kw));
        setCurrentPage(1);
        setTotalPages(Math.ceil(newFilteredItems.length / itemPerPage));
        setFilteredItems(newFilteredItems);

        //console.log(items);
        //console.log(filteredItems);
    }

    const onSortItems = (callback) => {

        const data = callback(totalItems);
        setTotalItems(data);

        const newFilteredItems = data.filter(item => item.name.includes(keyword));
        setCurrentPage(1);
        setTotalPages(Math.ceil(newFilteredItems.length / itemPerPage));
        setFilteredItems(newFilteredItems);
    }

    const setItems = (data) => {
        setTotalItems(data);
        setFilteredItems(data);
    }

    const Pagination = () => {

        const handleClick = (page) => {
            if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
            }
        };

        return (
            <div>
                {
                    totalPages && totalPages > 1 ? (
                        <nav aria-label="page-navigation">
                            <ul className="flex list-style-none">
                                {/* Previous Button */}
                                <li
                                    className='page-item'
                                    disabled={currentPage <= 1}
                                >
                                    <button
                                        onClick={() => handleClick(currentPage - 1)}
                                        className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-indigo-100 rounded-md mr-3 "
                                    >
                                        Trước
                                    </button>
                                </li>

                                {/* Page Buttons */}
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <li key={index} className="page-item">
                                        <button
                                            onClick={() => handleClick(index + 1)}
                                            className={`relative block px-3 py-1.5 text-base ${currentPage === index + 1
                                                ? 'text-gray-100 bg-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-700 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-indigo-100'
                                                } transition-all duration-300 rounded-md mr-3`}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}

                                {/* Next Button */}
                                <li
                                    className='page-item'
                                    disabled={currentPage >= totalPages}
                                >
                                    <button
                                        onClick={() => handleClick(currentPage + 1)}
                                        className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-indigo-100 rounded-md mr-3 "
                                    >
                                        Sau
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    )
                        : null
                }
            </div>
        );
    }

    return {
        items, setItems,
        totalItems, onSortItems,
        setTotalPages, onSearchItems,
        setCurrentPage, Pagination
    };
}