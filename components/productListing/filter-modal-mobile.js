import React, {useEffect} from 'React';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from "react-icons/ai";

export function FilterModalMobile({categories, prices, show, handleClose, handleCategoryCheck, priceFilterHandler}) {
    const clear = () => {
        document.querySelectorAll('input[type="checkbox').forEach( el => el.checked = false);
        prices = '';
        categories = [];
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <div className="container ps-0 pe-0 d-flex justify-content-end"><AiOutlineClose className="featuredClick" onClick={handleClose} /></div>
                {/*<Modal.Title>Modal heading</Modal.Title>*/}
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-column justify-content-start overflow-scroll">
                    <div className="fs-6 fw-bold mb-2">Category</div>

                    <div className="mt-3">
                        {

                            categories.map((category) => {
                                return(
                                    <div className="form-check mb-3" key={category}>
                                        <input className="form-check-input rounded-0 border-dark checkboxOutline" onChange={handleCategoryCheck} type="checkbox" value={category} id={category} />

                                        <label className="form-check-label" htmlFor={category}>
                                            <span className="m-3">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                        </label>
                                    </div>
                                )
                            })
                        }

                    </div>


                    <div className="fs-6 fw-bold mb-2 border-top pt-4 mt-4">Price Range</div>

                    <div className="mt-4">

                        {
                            prices.map((prices) => {
                                return (
                                    <div className="form-check mb-3" key={prices.min}>
                                        <input className="form-check-input rounded-0 border-dark checkboxOutline chbx" type="checkbox" onChange={priceFilterHandler} value={JSON.stringify(prices)} id={prices.min} />

                                        <label className="form-check-label" htmlFor={prices.min}>
                                            <span className="m-3">{prices.min === 0 ? 'Lower than $' + prices.max : '$'+prices.min + ' - ' + prices.max} </span>
                                        </label>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="container">
                    <div className="row justify-content-between">
                        <button className="btn btn-outline-dark rounded-0 col-5" onClick={clear}> CLEAR </button>
                        <button className="btn btn-dark rounded-0 col-5"> SAVE </button>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    );
}