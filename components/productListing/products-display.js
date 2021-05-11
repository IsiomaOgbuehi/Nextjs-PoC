import React, {useContext, useState} from 'react';
import Image from 'next/image';
import { AddToCartBtn } from '../add-to-cart-btn';
import getSymbolFromCurrency from 'currency-symbol-map';
import ReactPaginate from "react-paginate";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { CgSearchFound } from "react-icons/cg";
import { CartModal } from '../cartModal';
import { CartContext } from '../../util/CartContext'

export function ProductDisplay({products, handlePageClick, currentPage, pageCount}) {

    const [show, setShow] = useState(false);
    const [cartProduct, setCartProduct] = useState({});
    const {cartArr, setCartArr} = useContext(CartContext);

    const setModal = (product) => {
        setShow(true)
        // setCartProduct(product);
        if (cartArr.filter((prod) => prod.ts === product.ts).length > 0){
            return;
        } else {
            setCartArr((cart) => [...cart, product])
        }
    }
    const handleModalClose = () => {
        setShow(false)
    }

    return (
        <div className="col-12 col-lg-8">
            {show ? <CartModal product={cartProduct} show={show} handleClose={handleModalClose} /> : ''}
            <div className="container ps-0 pe-0">
                <div className="row">

                    {
                        products.length !== 0 ?
                        products.map((product) => {
                         return(
                            <div className="col-md-4 mb-3" key={product.ts}>
                                <div className="text-center product position-relative">
                                    {/* Best Seller */}
                                    {product.data.bestseller ? <div className="position-absolute bg-white top-0 p-1 zIndex"><span>Best Seller</span></div> : ''}
                                    <Image src={product.data.details.recommendations[0].src} alt={product.data.details.recommendations[0].alt} height={398.72} width={282.02} layout="responsive" />
                                    {/* Add to Cart */}
                                    <div className="row w-100 m-0 position-absolute bottom-0 cartBtnDisplayToggle" onClick={() => setModal(product)}><AddToCartBtn showCart="btn btn-dark rounded-0" /></div>
                                </div>
                                <div className="mt-2">{product.data.category.charAt(0).toUpperCase() + product.data.category.slice(1)}</div>
                                <div className="fw-bold">{product.data.name}</div>
                                <div className="colorGrey">{getSymbolFromCurrency(product.data.currency)} {product.data.price}</div>
                            </div>
                         )
                        }) :
                            <div className="container d-flex flex-column align-items-center">
                                <div className="fs-1"><CgSearchFound /></div>
                                <div className="mt-4">None Found !</div>
                            </div>
                    }


                </div>

                {/*<Pagination />*/}
                <div className="container pe-0 ps-0 mt-5">
                    <div className="row m-0">
                        <div className="col-12 d-flex justify-content-center text-center">
                            <ReactPaginate
                                previousLabel={<AiOutlineLeft />}
                                nextLabel={ <AiOutlineRight /> }
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                activeClassName={'active'}
                                containerClassName={'pagination'}
                                subContainerClassName={'pages pagination'}

                                initialPage={currentPage}
                                // forcePage = {currentPage}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={6}
                                onPageChange={handlePageClick}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}