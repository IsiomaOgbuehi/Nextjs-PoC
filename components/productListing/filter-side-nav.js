import React, {useState} from 'react';

export function FilterSideNav({categoryFilters, pricesFilters, handleCategoryCheck, priceFilterHandler}) {


    return (
        <div className="d-none col-lg-4 d-lg-flex flex-column justify-content-lg-start">
            <div className="fs-6 fw-bold mb-2">Category</div>

            <div className="mt-3">
                {
                    categoryFilters ? categoryFilters.map((category) => {
                            return (
                                <div className="form-check mb-3" key={category}>
                                    <input className="form-check-input rounded-0 border-dark checkboxOutline"
                                           onChange={handleCategoryCheck} type="checkbox" value={category} id={category}/>

                                    <label className="form-check-label" htmlFor={category}>
                                        <span className="m-3">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                    </label>
                                </div>
                            )
                        }) :
                        <div className="form-check mb-3">
                            <input className="form-check-input rounded-0 border-dark checkboxOutline" type="checkbox"
                                   value="" id="ddd"/>

                            <label className="form-check-label" htmlFor="ddd">
                                <span className="m-3">All</span>
                            </label>
                        </div>
                }

            </div>


            <div className="fs-6 fw-bold mb-2 border-top pt-4 mt-4">Price Range</div>

            <div className="mt-4">

                {
                    pricesFilters ? pricesFilters.map((prices) => {
                            return (
                                <div className="form-check mb-3" key={prices.min}>
                                    <input className="form-check-input rounded-0 border-dark checkboxOutline chbx"
                                           type="checkbox" onChange={priceFilterHandler} value={JSON.stringify(prices)}
                                           id={prices.min}/>

                                    <label className="form-check-label" htmlFor={prices.min}>
                                        <span
                                            className="m-3">{prices.min === 0 ? 'Lower than $' + prices.max : '$' + prices.min + ' - ' + prices.max} </span>
                                    </label>
                                </div>
                            )
                        }) :

                        <div className="form-check mb-3">
                            <input className="form-check-input rounded-0 border-dark checkboxOutline" type="checkbox"
                                   value="" id="mmm"/>

                            <label className="form-check-label" htmlFor="mmm">
                                <span className="m-3">All Prices</span>
                            </label>
                        </div>
                }

            </div>
        </div>
    );
}