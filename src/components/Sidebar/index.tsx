import './sidebar.scss';
import { Lesson } from '../Lesson';
import { useEffect, useState } from 'react';
import api from '../../services/api';

interface Video {
  contentDetails: {
    duration: string;
  };
  id: string;
  snippet: {
    title: string;
    position: number;
    description: string;
    resourceId: {
      videoId: string;
    };
  };
}

export function Sidebar() {
  const [data, setData] = useState<Video[]>([]);

  useEffect(() => {
    api
      .get('/playlistItems', {
        params: {
          key: import.meta.env.VITE_API_KEY,
          part: 'snippet, contentDetails',
          maxResults: 50,
          playlistId: 'PLx3SBPKiFL6woOLRMt4MgsdSVFO5pXwXV'
        }
      })
      .then(response => {
        setData(response.data.items);
      });
  }, []);
  console.log(data);
  return (
    <div className="sidebar">
      {data.map(video => {
        return (
          <Lesson
            key={String(video.id)}
            title={video.snippet.title}
            position={video.snippet.position}
            duration={video.contentDetails.duration}
          />
        );
      })}
    </div>
  );
}
