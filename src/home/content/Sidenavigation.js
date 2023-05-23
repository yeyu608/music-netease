import React from 'react';

export default function Sidenavigation(props) {
    return (
        <div id="sidenavigation" className={props.item.id==props.Aindex?'fontSize1':''} onClick={()=>props.onClick(props.item)}>
            {props.item.name}
        </div>
    )
}