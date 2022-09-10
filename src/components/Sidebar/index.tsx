import { Lesson } from '../Lesson';
import { useEffect } from 'react';
import { useVideoData } from '../../hooks/useVideoData';

import api from '../../services/api';

import './sidebar.scss';

export function Sidebar() {
  const { data, setData, setCurrentData } = useVideoData();

  useEffect(() => {
    api
      .get('/playlistItems', {
        params: {
          key: import.meta.env.VITE_API_KEY,
          part: 'snippet',
          playlistId: import.meta.env.VITE_PLAYLIST_ID
        }
      })
      .then(response => {
        setData(response.data.items);
        const formattedCurrentData = {
          title: response.data.items[0].snippet.title,
          position: response.data.items[0].snippet.position,
          description: response.data.items[0].snippet.description,
          videoId: response.data.items[0].snippet.resourceId.videoId
        };

        setCurrentData(formattedCurrentData);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="sidebar">
      {data.map(video => {
        return (
          <Lesson
            key={String(video.id)}
            title={video.snippet.title}
            position={video.snippet.position}
            videoId={video.snippet.resourceId.videoId}
            description={video.snippet.description}
          />
        );
      })}
    </div>
  );
}
