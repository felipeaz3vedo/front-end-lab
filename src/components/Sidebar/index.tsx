import { Lesson } from '../Lesson';
import { useVideoData } from '../../hooks/useVideoData';

import './sidebar.scss';

export function Sidebar() {
  const { data } = useVideoData();

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
