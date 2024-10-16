import React from 'react';
import './feed.css';
import Share from '../shared-components/Share';
import Post from '../post/Post';
import {Posts} from '../../DummyData';
function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Feed
