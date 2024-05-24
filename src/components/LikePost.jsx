import React from 'react';
import withLikeCounter from './withLikeCounter';

function LikePost({ likePostCounter, handleLikePostCounter }) {
  return (
    <div>
      <button onClick={handleLikePostCounter}>Like Post {likePostCounter}</button>
    </div>
  );
}

export default withLikeCounter(LikePost, 'likePostCounter');
