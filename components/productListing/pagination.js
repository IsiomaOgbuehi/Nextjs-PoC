import React from 'react';
import ReactPaginate from 'react-paginate';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export function Pagination() {
    //
    // const handlePageClick = (e) => {
    //     const selectedPage = e.selected;
    //     const offset = selectedPage * this.state.perPage;
    //
    //     this.setState({
    //         currentPage: selectedPage,
    //         offset: offset
    //     }, () => {
    //         this.receivedData()
    //     });
    // }

    return(
        <div className="container pe-0 ps-0 mt-5">
            {/*<div className="row m-0">*/}
                {/*<div className="col-12 d-flex justify-content-center text-center">*/}
                    {/*<ReactPaginate*/}
                        {/*previousLabel={<AiOutlineLeft />}*/}
                        {/*nextLabel={ <AiOutlineRight /> }*/}
                        {/*breakLabel={'...'}*/}
                        {/*breakClassName={'break-me'}*/}
                        {/*activeClassName={'active'}*/}
                        {/*containerClassName={'pagination'}*/}
                        {/*subContainerClassName={'pages pagination'}*/}

                        {/*// initialPage={props.currentPage - 1}*/}
                        {/*// pageCount={props.pageCount}*/}
                        {/*marginPagesDisplayed={2}*/}
                        {/*pageRangeDisplayed={6}*/}
                        {/*// onPageChange={pagginationHandler}*/}
                    {/*/>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    );
}