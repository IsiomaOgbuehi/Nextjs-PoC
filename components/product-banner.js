import React, {useState, useEffect, useContext} from 'react';
import Image from 'next/image';
import { AddToCartBtn } from './add-to-cart-btn';
import { FeaturedProducts } from './featured-products';
import { CartModal } from './cartModal';
import { CartContext } from '../util/CartContext';

export function ProductBanner ({products}) {

    const [show, setShow] = useState(false);
    const {cartArr, setCartArr} = useContext(CartContext);

    const setModal = () => {
        setShow(true)
    }
    const handleModalClose = () => {
        setShow(false)
    }

    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [photoOfDay, setPhotoOfDay] = useState(products.filter((product) => product.data.featured && product.data.bestseller).slice(0, 1));
    const getFeautured = () => {
    }
    getFeautured();

    const setFeautured = (product) => {
        setPhotoOfDay([product]);
    }


    return(
        <>
            {/* Title and cart button Photo of the Day */}
            {show ? <CartModal product={photoOfDay[0]} show={show} handleClose={handleModalClose} /> : ''}
            <div className="container d-flex justify-content-between ps-0 pe-0">
                <div className="fw-bold">
                    {photoOfDay[0].data.name}
                </div>
                <div onClick={setModal}><AddToCartBtn showCart="d-none d-md-block btn btn-dark rounded-0" /></div>
            </div>

            {/* Photo of the Day */}
            <div className="container ps-0 pe-0 mt-3 w-100 position-relative">
                {/*<div className="container">*/}
                    <Image priority src={photoOfDay[0].data.image.src} className="image-fluid photoOfDay" alt="" height={400} width={800} sizes="(max-width: 800px) 800px" />
                    <div className="bg-white p-2 fontSmall photoOfDayLabel fw-bold">Photo of the day</div>
                {/*</div>*/}
            </div>

            {/* Cart Button on Mobile */}
            <div className="container ps-0 pe-0 d-grid gap-2" onClick={setModal}>
                    <AddToCartBtn showCart="d-md-none mt-3 btn btn-dark rounded-0" />
            </div>

            {/* Details and featured products */}
            <div className="container ps-0 pe-0 mt-3">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="fw-bold">About {photoOfDay[0].data.name}</p>
                        <p className="d-none d-md-block colorGrey">{photoOfDay[0].data.category.charAt(0).toUpperCase() + photoOfDay[0].data.category.slice(1)}</p>
                        <p className="lightGreyColor lh-base fontSmall">
                            {photoOfDay[0].data.details.description}
                        </p>
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className="col-lg-5 mt-3 mt-lg-0 text-lg-end">
                        <p className="fw-bold">People also buy</p>
                        <FeaturedProducts products={products.filter((product) => product.data.featured && product.data.bestseller).slice(1, 4)} dimensions={photoOfDay[0]} setFeautured={setFeautured} />
                    </div>
                </div>
            </div>


        </>
    );
}