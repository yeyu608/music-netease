import React from 'react';
import {useNavigate} from 'react-router-dom'
import Sidenavigation from './Sidenavigation'
import ContentRight from './ContentRight'

export default function Content() {
    let Navigate = useNavigate()
    let [activeIndex,setActiveIndex] = React.useState(1)
    let Sidelist = [
        {
            name: "发现音乐",
            id: 1,
            path: "findmusic"
        }, {
            name: "播客",
            id: 2,
            path: "podcast"
        }, {
            name: "视频",
            id: 3,
            path: "findmusic"
        }, {
            name: "关注",
            id: 4,
            path: "findmusic"
        },{
            name: "直播",
            id: 5,
            path: "findmusic"
        } , {
            name: "私人FM",
            id: 6,
            path: "findmusic"
        }]

    function setStyle(item){
        Navigate(item.path)
        setActiveIndex(item.id)
    }
    return (
        <div id="content">
            <div id="left">
                {
                    Sidelist.map((item, index) => {
                        return <Sidenavigation key={item.id} onClick={setStyle} item={item} Aindex={activeIndex}></Sidenavigation>
                    })
                }
            </div>
            <ContentRight></ContentRight>
        </div>
    )
}