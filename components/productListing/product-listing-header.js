import React, {useState} from 'react';
import Image from 'next/image';
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FilterModalMobile } from './filter-modal-mobile';

export function ProductListingHeader({categories, prices, handleSorting, handleCategoryCheck, priceFilterHandler}) {

    const [show, setShow] = useState(false);

    const setModal = () => {
        setShow(true)
    }
    const handleModalClose = () => {
        setShow(false)
    }

    return (
        <div className="container ps-0 pe-0 d-flex flex-row justify-content-between pb-4">
            <div className=""><span>Photography / </span> <span className="colorGrey">Premium Photos</span></div>

            <div className="col-2">
                <div className="d-none d-lg-flex justify-content-between">
                    <div className="">
                        <span className="btn p-0 sortIcons"><AiOutlineArrowUp onClick={() => handleSorting('asc')} /></span> <span className="btn p-0 sortIcons"><AiOutlineArrowDown onClick={() => handleSorting('desc')} /></span>
                    </div>
                    <div className="colorGrey">Sort by</div>
                    <div className="col-6">
                        <select className="form-select simplebox sortType" name='sortType' aria-label="Default select example">
                            <option value='price'>Price</option>
                            <option value="alphabet">Alphabet</option>
                        </select>
                    </div>
                </div>

                <div className="d-lg-none text-end" onClick={setModal}>
                    <Image className="featuredClick" src="/images/hambuger.png" height={20} width={20} />
                </div>

            </div>
            {show ? <FilterModalMobile categories={categories} prices={prices} show={show} handleClose={handleModalClose} handleCategoryCheck={handleCategoryCheck} priceFilterHandler={priceFilterHandler} /> : ''}
        </div>
    );
}