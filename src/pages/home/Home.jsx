import React from 'react'
import Topbar from '../../components/topbar/Topbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import './home.css';

const Home = () => {
  return (
    <>
     <Topbar/>
     <div className='homeContainer'>
     <Sidebar className='side-bar'/>
      <Feed className='feed'/>
      <Rightbar className='right-bar'/>
     </div>
    </>

  )
}

export default Home
