import React, {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CartModal } from './cartModal';
import { CartContext } from '../util/CartContext';

export function Nav () {

    const {cartArr, setCartArr} = useContext(CartContext);

    const [cartCount, setCartCount] = useState(0)

    const [show, setShow] = useState(false);

    const setModal = () => {
        setShow(true)
    }
    const handleModalClose = () => {
        setShow(false)
    }

    useEffect(async () => {
        const cart = await JSON.parse(localStorage.getItem('cart')) || []
        setCartCount(cart.length)
    }, []);

    return(
        <nav className="navbar navbar-expand-lg bg-white sticky-top pe-3 ps-3 py-3">
            <div className="container ps-0 pe-0 pb-3 border-bottom">
                <Link href="/">
                    <a>
                        <Image src="/images/logo.svg" height={30} width={70} />

                    </a>
                </Link>
                <div className="featuredClick" onClick={setModal}>
                    <Image src="/images/shopping-cart.svg" height={25} width={25} />
                    {/*<span className="cartIcon"><AiOutlineShoppingCart /></span>*/}
                    {cartArr.length > 0 ? (<div className="bg-dark text-white cartBadge text-center me-auto fw-bolder"><small>{cartArr.length}</small></div>) : ''}
                </div>
            </div>
            {show ? <CartModal product={[]} show={show} handleClose={handleModalClose} /> : ''}
        </nav>
    )
}