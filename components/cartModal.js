import React, {useState, useEffect, useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from "next/dist/client/image";
import {AiOutlineClose} from "react-icons/ai";
import getSymbolFromCurrency from "currency-symbol-map";
import {CartContext} from '../util/CartContext';

export function CartModal({show, handleClose}) {

    const [cartProducts, setCartProduct] = useState([]);
    const {cartArr, setCartArr} = useContext(CartContext);

    const clearCart = () => {
        setCartArr([])
    }

    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <div className="container ps-0 pe-0 d-flex justify-content-end"><AiOutlineClose
                    className="featuredClick" onClick={handleClose}/></div>
                {/*<Modal.Title>Modal heading</Modal.Title>*/}
            </Modal.Header>
            <Modal.Body>
                {
                    cartArr.map((prod) => {
                        return (
                            <div className="container ps-0 pe-0 mb-3" key={prod.ts}>
                                <div className="row">
                                    <div className="col-8">
                                        <p className="fw-bold">{prod.data.name}</p>
                                        <div
                                            className="colorGrey">{getSymbolFromCurrency(prod.data.currency)} {prod.data.price}</div>
                                    </div>
                                    <div className="col-4">
                                        <Image src={prod.data.details.recommendations[0].src}
                                               alt={prod.data.details.recommendations[0].alt} height={86} width={149}
                                               layout="responsive"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </Modal.Body>
            <Modal.Footer>
                <div className="container">
                    <div className="row">
                        <button className="btn btn-outline-dark rounded-0" onClick={clearCart}> CLEAR</button>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    )
}