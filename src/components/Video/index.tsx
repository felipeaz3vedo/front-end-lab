import './video.scss';
import { useVideoData } from '../../hooks/useVideoData';

export function Video() {
  const { currentData } = useVideoData();

  return (
    <div className="video">
      {currentData ? (
        <iframe
          className="iframe"
          src={`https://www.youtube.com/embed/${currentData.videoId}?modestbranding=1&showinfo=0&rel=0`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="video-container"></div>
      )}
    </div>
  );
}
