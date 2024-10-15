import React from 'react'
import './rightbar.css';
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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/rand04.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Rasool Shaik Khaja Nayab</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/rand05.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Pavan Kumar Vanamala</span>
          </li>


          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/rand01.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gopi Lokindi</span>
          </li>


          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/rand02.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Karthik Ravuri</span>
          </li>


          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/rand03.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Prasanna Kumar</span>
          </li>


          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/rand04.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Adithya Muppala</span>
          </li>


          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/rand01.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Praveen Kumar Chidipothu</span>
          </li>


          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/rand05.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Bharat Kondepati</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
