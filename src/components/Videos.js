import React, { useState } from 'react';
import Video  from './Video';
import Pagination from './Pagination';

const Videos = ( {videos, videosPerPage, paginate, countOfAllVideos} ) => {

  let [ selected, setSelected ] = useState();

  const formatDate = (date) => {
    const _date = new Date(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return _date.toLocaleDateString("en-US", options); 
  }

  const cropText = (txt) => { 
    return txt.length > 200 ? txt.substring(0, 200) + '...' : txt;
  }

  return (
    <>
    {selected && <Video video={selected} onClose={() => setSelected(null)} />}
    <div className="yt-playlist">
      {videos && !selected && videos.map(video => (
        <div className="yt-playlist__item" onClick={() => setSelected(video) }>
          <figure className="yt-playlist__item__img">
            <img src={video.snippet.thumbnails.high.url} alt=""/>
            <figcaption className="yt-playlist__item__img__title">
              {video.snippet.title}
              <div className="yt-playlist__item__img__play"></div>
            </figcaption>
          </figure>
          <div className="yt-playlist__item__date-published">
            <span>Published on {formatDate(video.snippet.publishedAt)}</span>
          </div>
          <div className="yt-playlist__item__desc">
            {cropText(video.snippet.description)}
          </div>
        </div>
      ))}
      {!selected && <Pagination 
        videosPerPage={videosPerPage} 
        totalVideos={countOfAllVideos} 
        paginate={paginate} 
      />}
    </div>
    </>
  )
}

export default Videos;