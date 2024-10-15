import React from 'react';
import './feed.css';
import Share from '../shared-components/Share';
import Post from '../post/Post';
function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
      </div>
      <Post/>
    </div>
  )
}

export default Feed
