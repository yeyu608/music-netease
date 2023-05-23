import React from 'react';
import {Outlet} from 'react-router-dom'


export default function ContentRight() {
    return(
        <div id="content-right">
            <Outlet></Outlet>
        </div>
    )
}