import { useEffect } from 'react';
import { useVideoData } from '../hooks/useVideoData';

import { Description } from '../components/Description';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

import api from '../services/api';

import '../App.scss';

export function Course() {
  const { data, setData, setCurrentData } = useVideoData();

  const fetchData = async () => {
    await api
      .get('/playlistItems', {
        params: {
          key: import.meta.env.VITE_API_KEY,
          part: 'snippet',
          playlistId: import.meta.env.VITE_PLAYLIST_ID
        }
      })
      .then(response => {
        setData(response.data.items);
        
        setCurrentData({
          title: response.data.items[0].snippet.title,
          position: response.data.items[0].snippet.position,
          description: response.data.items[0].snippet.description,
          videoId: response.data.items[0].snippet.resourceId.videoId
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="layout">
          <Video />
          <Sidebar />
          <Description />
        </div>
      </div>
      <Footer />
    </>
  );
}
