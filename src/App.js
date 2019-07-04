import React, { useState, useEffect } from 'react';
import './App.scss';
import Videos from './components/Videos';
import Pagination from './components/Pagination';
import axios from 'axios';
//import { loadPartialConfig } from '@babel/core';

const App= () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(6);
  
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw');
      setVideos(res.data.items);
      setLoading(false);
    }
    fetchVideos();
  }, []);

  //Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get Current Videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className="yt-wrapper">
      <header className="yt-header">
        <h1>MusicPlay</h1>
      </header>
      <Videos videos={currentVideos} loading={loading} />
      <Pagination 
        videosPerPage={videosPerPage} 
        totalVideos={videos.length} 
        paginate={paginate} 
      />
    </div>
  );
}
export default App;
