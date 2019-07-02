import React, { useState, useEffect } from 'react';
import './App.scss';
import Videos from './components/Videos';
import axios from 'axios';
import { loadPartialConfig } from '@babel/core';

const App= () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPertPage] = useState(9);
  
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw');
      setVideos(res.data.items);
      setLoading(false);
    }
    fetchVideos();
  }, []);

  console.log(videos);

  return (
    <div className="yt-wrapper">
      <header className="yt-header">
        <h1>MusicPlay</h1>
      </header>
      <Videos videos={videos} loading={loading} />
    </div>
  );
}
export default App;
