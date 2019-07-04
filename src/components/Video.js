import React from 'react';

const Video = ({video, onClose}) => {
  return(
    <main className="yt-playlist">
      <div className="yt-playlist__video__play">
        <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="yt-playlist__video__info">
        <h2 className="heading-primary">{video.snippet.title}</h2>
        <p className="yt-playlist__video__info__desc">{video.snippet.description}</p>
        <p className="yt-playlist__video__info__published-date">Published on {Date.parse(video.snippet.publishedAt)}</p>
        <a className="yt-playlist__video__info__back" href="#" onClick={onClose}>&#9664; Back to list</a>
      </div>
    </main>
  )
}

export default Video;