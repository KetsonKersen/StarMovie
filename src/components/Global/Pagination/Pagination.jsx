import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import "./style.jsx"
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import {PaginationStyled} from "./style"

const Pagination = ({totalPage}) =>{
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    const pageCount = totalPage;

    const handlePageClick = (event) => {
        const currentPage = event.selected + 1
        navigate(`?q=${query}&p=${currentPage}`)
        window.scroll({top:0,
            behavior: "smooth"
        })
    };

    return (
        <PaginationStyled>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="<"
            />
        </PaginationStyled>
    );

}
export default Pagination
