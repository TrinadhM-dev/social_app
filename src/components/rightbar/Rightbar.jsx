import React from 'react'
import './rightbar.css';
import Online from '../online/Online';
import { users } from '../../DummyData';
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.jpg" alt="" />
          <span className='birthdayText'>
            <b>Gopi Lokindi</b> and three other friends.</span>
        </div>
        <img src="/assets/advertising.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {users.map(u=>
            <Online key={u.id} user={u} />
          )}
        </ul>
      </div>
    </div>
  )
}
