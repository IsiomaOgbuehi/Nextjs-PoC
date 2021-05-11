import React from 'react';

export function ProductListingLayout({children}){

    return(
        <div className="container pe-0 ps-0 border-top mt-4 pt-4 pb-0">
            {children}
        </div>
    )
}