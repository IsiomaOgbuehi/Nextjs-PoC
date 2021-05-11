import React from 'react';

export function Layout ({children}) {

    return(
        <div className="container pe-md-0 ps-md-0">
            <main>{children}</main>
        </div>
    );
}