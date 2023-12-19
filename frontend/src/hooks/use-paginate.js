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

    const canPrev = currentPage <= 1;
    const canNext = currentPage >= totalPages;

    const Pagination = () => {

        const displayPages = 5;

        const handleClick = (page) => {
            if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
            }
        };

        const renderPageButton = (index) => (
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
        );

        const renderEllipsis = () => (
            <li key="ellipsis" className="page-item">
                <span className="relative block px-3 py-1.5 text-base text-gray-700 dark:text-gray-400">
                    ...
                </span>
            </li>
        );

        const renderPaginationButtons = () => {
            const pages = Array.from({ length: totalPages });

            if (totalPages <= displayPages) {
                return pages.map((_, index) => renderPageButton(index));
            }

            const start = Math.max(0, currentPage - Math.floor(displayPages / 2));
            const end = Math.min(totalPages - 1, start + displayPages - 1);

            const buttons = [];
            if (start > 0) {
                buttons.push(renderPageButton(0));
                if (start > 1) {
                    buttons.push(renderEllipsis());
                }
            }

            for (let i = start; i <= end; i++) {
                buttons.push(renderPageButton(i));
            }

            if (end < totalPages - 1) {
                if (end < totalPages - 2) {
                    buttons.push(renderEllipsis());
                }
                buttons.push(renderPageButton(totalPages - 1));
            }

            return buttons;
        };

        return (
            <div>
                {
                    totalPages && totalPages > 1 ? (
                        <nav aria-label="page-navigation">
                            <ul className="flex list-style-none">
                                {/* Previous Button */}
                                <li
                                    className={`page-item ${!canPrev ? "pointer-events-none" : null}`}
                                >
                                    <button
                                        disabled={!canPrev}
                                        onClick={() => handleClick(currentPage - 1)}
                                        className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-indigo-100 rounded-md mr-3 "
                                    >
                                        Trước
                                    </button>
                                </li>

                                {renderPaginationButtons()}

                                {/* Next Button */}
                                <li
                                    className={`page-item ${!canNext ? "pointer-events-none" : null}`}
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