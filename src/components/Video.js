import React from 'react';

const Video = ({video, onClose}) => {
  return(
    <main className="yt-playlist">
      <div>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      </div>
      <a href="" onClick={onClose}>Back</a>
    </main>
  )
}

export default Video;