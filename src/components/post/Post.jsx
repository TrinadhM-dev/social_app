import {useState} from 'react'
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {users} from '../../DummyData.js'

const Post = ({post}) => {
  const [like,setLike] = useState(post.like);
  const [isLiked,SetIsLiked] = useState(false);
  const likeHandler =() =>{
    setLike(isLiked ? like-1 : like+1)
    SetIsLiked(!isLiked)
  } 
  
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
                <img  className='likeIcon' src="/assets/likes.png" alt=""  onClick={likeHandler} />
                <img className='heartIcon' src="/assets/heart.png" alt="" onClick={likeHandler} />
                <span className="postLikeCounter">{like} people likes your post</span>
            </div>
            <div className="postBottomRight">
               <span className="postCommentText">{post?.comment} Comments</span>
            </div>
        </div>
      </div>

    </div>
</>


    
  )
}

export default Post
