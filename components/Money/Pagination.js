import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { DOTS, usePagination } from '../../utils/usePagination';
const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        if (currentPage !== lastPage) {
            onPageChange(currentPage + 1);
        }

    };

    const onPrevious = () => {
        if (currentPage !== 1) {
            onPageChange(currentPage - 1);
        }
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div className="mt-3 border-t-2 border-dashed pt-2 tracking-wider">


            <ul className="flex items-center gap-1">
                <li
                    className={`bg-slate-200 w-6 h-6 text-sm leading-6 rounded-full text-center flex justify-center items-center ${currentPage === 1 ? 'opacity-25 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={onPrevious}
                >
                    <BsChevronLeft />
                </li>
                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return <li className="bg-slate-200 w-6 h-6 text-sm leading-4 rounded-full text-center" key={index}>...</li>;
                    }
                    return (
                        <li key={index}
                            className={`w-6 h-6 text-sm leading-6 rounded-full text-center ${pageNumber === currentPage ? 'bg-blue-400 text-white ' : 'bg-slate-200 cursor-pointer'}`}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <li
                    className={`bg-slate-200 w-6 h-6 text-sm leading-6 rounded-full text-center flex justify-center items-center ${currentPage === lastPage ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={onNext}
                >
                    <BsChevronRight />
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
