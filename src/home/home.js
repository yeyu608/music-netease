import React from 'react';
import './home.css'
import Navtop from './navTop/navTop'
import PlayMenu from './playMenu/playMenu'
import Content from './content/Content'
import {useNavigate,useLocation} from 'react-router-dom'

export default function Home() {
    
  let location = useLocation()
  let Navigate = useNavigate()
  React.useEffect(()=>{
    if(location.pathname=='/'){
      Navigate('findmusic',{replace:true})
    }
  })
    return (
        <div id="home">
            <Navtop></Navtop>
            <Content></Content>
            <PlayMenu></PlayMenu>
        </div>
    )
}