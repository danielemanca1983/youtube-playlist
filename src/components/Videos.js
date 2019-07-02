import React from 'react';

const Videos = ( {videos, loading} ) => {

  if(loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="yt-playlist">
      {videos && videos.map && videos.map(video => (
        <div className="yt-playlist__item">
          <figure className="yt-playlist__item__img">
            <img src={video.snippet.thumbnails.high.url} alt=""/>
            <figcaption className="yt-playlist__item__img__title">
              {video.snippet.title}
              <div className="yt-playlist__item__img__play"></div>
            </figcaption>
          </figure>
          <div className="yt-playlist__item__date-published">
            <span>Published on {Date.parse(video.snippet.publishedAt)}</span>
          </div>
          <div className="yt-playlist__item__desc">
            {video.snippet.description}
          </div>
        </div>
      ))}
    </main>
  )
}

export default Videos;