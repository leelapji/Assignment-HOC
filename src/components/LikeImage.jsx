import React from 'react';
import withLikeCounter from './withLikeCounter';

function LikeImage({ likeImageCounter, handleLikeImageCounter }) {
  return (
    <div>
      <button onClick={handleLikeImageCounter}>Like Image {likeImageCounter}</button>
    </div>
  );
}

export default withLikeCounter(LikeImage, 'likeImageCounter');
