import ReactPaginate from "react-paginate"

/**
 * MvPagination.
 * 
 * Purpose:
 * - Render a paginaton 
 * 
 * References: 
 * - https://www.npmjs.com/package/react-paginate
 * 
 * @param clickPagination function on click page.
 * @param pageCount Page coount.
 * @returns pagination component
 */
export const MvPagination = ({clickPagination, pageCount}) => {
    return (
        <div className="mvPagination">
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={clickPagination}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName="mvPagination__container"
                pageClassName="mvPagination__page-item"
                pageLinkClassName="mvPagination__page-link"
                previousClassName="mvPagination__page-item"
                previousLinkClassName="mvPagination__page-link"
                nextClassName="mvPagination__page-item"
                nextLinkClassName="mvPagination__page-link"
                activeLinkClassName="mvPagination__active"
                breakClassName="mvPagination__page-item"
                breakLinkClassName="mvPagination__page-link"
            />
        </div>
    )
}