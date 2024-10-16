import React from 'react'
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {users} from '../../DummyData.js'
const Post = ({post}) => {
  return (

<>

<div className='post'>
      <div className="postWrapper">
        
        
        <div className="postTop">
              <div className="postTopLeft">
                 <img className='postProfileImg' src={users.filter((u) =>u.id === post?.userId)[0]?.profilePicture} alt='' />
                 <span className="postUsername">
                  {users.filter((u) =>u.id === post?.userId)[0]?.username}
                 </span>
                 <span className="postDate">{post?.date}</span>
             </div>
        
            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>

        <div className="postCenter">
        <span className="postText">{post?.desc}</span>
        
        <img className='postImg' src={post?.photo} alt="" />

        </div>

        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src="/assets/likes.png" alt="" />
                <img className='heartIcon' src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">{post?.like} people likes your post</span>
            </div>
            <div className="postBottomRight">
               <span className="postCommentText">{post?.comment} Comments</span>
            </div>
        </div>
      </div>

    </div>



    {/* <div className='post'>
      <div className="postWrapper">
        
        
        <div className="postTop">
              <div className="postTopLeft">
                 <img className='postProfileImg' src="/assets/person/rand01.jpg" alt='' />
                 <span className="postUsername">Tri Mach </span>
                 <span className="postDate">5 mins Ago</span>
             </div>
        
            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>


        <div className="postCenter">
        <span className="postText">Hey! It's my First Post :)</span>
        
        <img className='postImg' src="/assets/post/love-bird.post.jpg" alt="" />

        </div>

        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src="/assets/likes.png" alt="" />
                <img className='heartIcon' src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">32 people likes your post</span>
            </div>
            <div className="postBottomRight">
               <span className="postCommentText">9 Comments</span>
            </div>
        </div>
      </div>










      




    </div> */}
























    
    {/* <div className='post'>
      <div className="postWrapper">
        
        
        <div className="postTop">
              <div className="postTopLeft">
                 <img className='postProfileImg' src="/assets/person/rand01.jpg" alt='' />
                 <span className="postUsername">Tri Mach </span>
                 <span className="postDate">5 mins Ago</span>
             </div>
        
            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>


        <div className="postCenter">
        <span className="postText">Hey! It's my First Post :)</span>
        
        <img className='postImg' src="/assets/post/love-bird.post.jpg" alt="" />

        </div>

        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src="/assets/likes.png" alt="" />
                <img className='heartIcon' src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">32 people likes your post</span>
            </div>
            <div className="postBottomRight">
               <span className="postCommentText">9 Comments</span>
            </div>
        </div>
      </div>






      




    </div> */}
</>


    
  )
}

export default Post
