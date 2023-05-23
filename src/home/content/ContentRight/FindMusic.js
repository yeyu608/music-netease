import React from 'react';
import TopNav from '../../../Comment/TopNav'
import GeRecommend from './Findmusic/GeRecommend'
import Exclusive  from './Findmusic/Exclusive'
import SongsList from './Findmusic/SongsList'
import RankingList  from './Findmusic/RankingList'
import Singer  from './Findmusic/Singer'
import LatestMusic  from './Findmusic/LatestMusic'
import { useNavigate } from 'react-router-dom';

export default function FindMusic() {
    const navlist = ['个性推荐', '专属定制', '歌单', '排行榜', '歌手', '最新音乐']
    let [showNavIndex, setShowNavIndex] = React.useState(0)

    function RenderItem(index){
        setShowNavIndex(index)
    }
    return (
        <div id="findmusic">
            <div id="nav">
                {
                    navlist.map((item, index) => {
                        return <TopNav item={item} key={index} index={index} onClick={RenderItem}></TopNav>
                    })
                }
            </div>
            <ShowNav index={showNavIndex}></ShowNav>
        </div>
    )
}
function ShowNav(props) {
    if (props.index == 0) {
        return (
            // 个性推荐
            <GeRecommend></GeRecommend>
        )
    }
    if (props.index == 1) {
        return (
            // 专属定制
            <Exclusive></Exclusive>
        )
    }
    if (props.index == 2) {
        return (
            // 歌单
            <SongsList></SongsList>
        )
    }
    if (props.index == 3) {
        return (
            // 排行榜
            <RankingList></RankingList>
        )
    }
    if (props.index == 4) {
        return (
            // 歌手
            <Singer></Singer>
        )
    }
    if (props.index == 5) {
        return (
            // 最新音乐
            <LatestMusic></LatestMusic>
        )
    }
    
}