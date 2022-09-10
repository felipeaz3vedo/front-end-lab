import { useContext } from 'react';
import { VideoContext } from '../context/VideoDataContext';

export const useVideoData = () => {
  const videoData = useContext(VideoContext);
  return videoData;
};
