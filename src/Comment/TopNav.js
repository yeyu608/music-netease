import React from 'react';

export default function TopNav(props) {
    return (
        <div id="topnav" onClick={()=>props.onClick(props.index)}>{props.item}</div>
    )
}