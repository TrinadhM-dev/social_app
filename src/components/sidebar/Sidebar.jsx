import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    {/* 1 Feed */}
                    <li className="sidebarListItem">
                        <RssFeedIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                    </li>
                    {/* 2 Chat */}
                    <li className="sidebarListItem">
                        <ChatIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Chat
                        </span>
                    </li>
                    {/* 3 Video */}
                    <li className="sidebarListItem">
                        <VideoSettingsIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                        {/* 4 Groups */}
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Groups
                        </span>
                    </li>
                    {/* Bookmark Icon */}
                    <li className="sidebarListItem">
                        <BookmarkIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Book Marks
                        </span>
                    </li>
                    {/* Work Icon */}
                    <li className="sidebarListItem">
                        <WorkOutlineIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Work
                        </span>
                    </li>

                    {/* Questions Icon */}
                    <li className="sidebarListItem">
                        <HelpOutlineIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Questions
                        </span>
                    </li>

                    {/* Events Icon */}
                    <li className="sidebarListItem">
                        <EmojiEventsIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Events
                        </span>
                    </li>


                    {/* Courses Icon */}
                    <li className="sidebarListItem">
                        <SchoolIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button> <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>


                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>



                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>


                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>


                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>


                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>


                    <li className="sidebarFriend">
                        <img src="/assets/person/rand02.png" alt="" className="sidebarFriendImg" />
                        <span className='sidebarFriendName'>Rose Dyn</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar
