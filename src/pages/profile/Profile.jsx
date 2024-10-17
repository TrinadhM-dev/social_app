import React from 'react';
import './profile.css';
import Topbar from '../../../components/topbar/Topbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import Feed from '../../../components/feed/Feed';
import Rightbar from '../../../components/rightbar/Rightbar';
function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar className='' />
        <div className="profileRight">
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img className="profileCoverImg" src="assets/person/rand04.jpg" alt="" />
                <img className="profileUserImg" src="assets/person/rand05.jpg" alt="" />
              </div>
              <div className="profileInfo">
                <h4 className='profileInfoName'>Jagadish Gollapalli</h4>
                <p className="profileInfoDesc">Hello Friends!!</p>
              </div>


            </div>
            <div className="profileRightBottom"></div>
          </div>
        </div>
        <Feed className='' />
        <Rightbar className='' />
      </div>
    </>


  )
}

export default Profile
