import React from 'react';
import Image from 'next/image'


export function FeaturedProducts({products, dimensions, setFeautured}){

    return(

        <div className="container ps-0 pe-0">
            <div className="container ps-0 pe-0 mb-md-4">
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div className="col-md-4" key={product.ts} onClick={() => setFeautured(product)} data-value={product}>
                                    <Image src={product.data.details.recommendations[0].src} className="featuredClick" alt="" width={117} height={147} layout="responsive" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <p className="fw-bold">Details</p>
            <div className="colorGrey">Size: {dimensions.data.details.dimmentions.width} x {dimensions.data.details.dimmentions.height} pixel</div>
            <div className="colorGrey">Size: {dimensions.data.details.size} mb</div>
        </div>
    );
}