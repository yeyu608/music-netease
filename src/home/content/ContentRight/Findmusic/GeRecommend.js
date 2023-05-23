import React from 'react';
import { Swiper } from 'antd-mobile'
import '../../../home.css'
import { getBanner } from '../../../../http/api/Songs'

export default function GeRecommend() {
    return (
        <div id="gerecommend">
            {/* 头部广告 */}
            <Banner></Banner>
            <h2>推荐歌单<span>></span></h2>
            <RemSongList></RemSongList>
            <h2>热门播客<span>></span></h2>
            <HotPlay></HotPlay>
        </div>
    )
}

function Banner() {
    let [items, setItems] = React.useState([])
    React.useEffect(() => {
        getBanner('/banner', {}).then(res => {
            let banner = res.banners
            setItems(banner)
        })
    }, [])
    return (
        //广告
        <div id="banner">
            <Swiper autoplay>
                {items.map((item, index) => (
                    <Swiper.Item key={index}>
                        <div
                            className="SwiperStyle"
                        >
                            <img src={item.imageUrl} />
                        </div>
                    </Swiper.Item>
                ))}
            </Swiper>
        </div>
    )
}

function RemSongList() {
    let [songLists, setSongLists] = React.useState([])
    React.useEffect(() => {
        getBanner('/personalized', { limit: 10 }).then(res => {
            let songLists = res.result
            console.log(res.result)
            setSongLists(songLists)
            //setSongLists(banner)
        })
    }, [])
    return (
        <div id="remsonglist">
            {
                songLists.map((item, index) => {
                    return (
                        <dl key={index}>
                            <dt>
                                <img src={item.picUrl} />
                            </dt>
                            <dd>
                                <p>{item.name}</p>
                            </dd>
                        </dl>
                    )
                })
            }
        </div>
    )
}

function HotPlay() {
    let [hotPlays, setHotPlays] = React.useState([])
    React.useEffect(() => {
        getBanner('/dj/hot', { limit: 6 }).then(res => {
            let hotplays = res.djRadios
            console.log(hotplays)
            setHotPlays(hotplays)
        })
    }, [])
    return (
        <div id="hotplay">
            {
                hotPlays.map((item, index) => {
                    return (
                        <dl key={index}>
                            <dt>
                                <img src={item.picUrl} />
                            </dt>
                            <dd>
                                <p className="fontSize2">{item.copywriter}</p>
                                <p className="fontSize3">{item.category}</p>
                                <p className="fontSize3">{item.name}</p>
                            </dd>
                        </dl>
                    )
                })
            }
        </div>
    )
}