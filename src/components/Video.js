import React from 'react';

const Video = ({video, onClose}) => {

  const formatDate = (date) => {
    const _date = new Date(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return _date.toLocaleDateString("en-US", options); 
  }

  const cropText = (txt) => { 
    return txt.length > 200 ? txt.substring(0, 200) + '...' : txt;
  }

  return(
    <main className="yt-playlist">
      <div className="yt-playlist__video__play">
        <iframe title="list" width="100%" height="400" src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="yt-playlist__video__info">
        <h2 className="heading-primary">{video.snippet.title}</h2>
        <p className="yt-playlist__video__info__desc">{cropText(video.snippet.description)}</p>
        <p className="yt-playlist__video__info__published-date">Published on {formatDate(video.snippet.publishedAt)}</p>
        <a className="yt-playlist__video__info__back" href="!#" onClick={onClose}>&#9664; Back to list</a>
      </div>
    </main>
  )
}

export default Video;