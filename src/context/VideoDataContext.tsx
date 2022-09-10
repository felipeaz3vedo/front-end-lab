import { createContext, useState } from 'react';

interface IVideosData {
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
interface ICurrentVideoData {
  title: string;
  position: number;
  description: string;
  videoId: string;
}

interface IVideoDataContext {
  data: IVideosData[];
  setData: (data: IVideosData[]) => void;
  currentData: ICurrentVideoData;
  setCurrentData: (data: ICurrentVideoData) => void;
}

export const VideoContext = createContext({} as IVideoDataContext);

export const VideoContextProvider = ({ children }: any) => {
  const [data, setData] = useState<IVideosData[]>([]);
  const [currentData, setCurrentData] = useState<ICurrentVideoData>({
    title: '',
    position: 0,
    description: '',
    videoId: ''
  });

  return (
    <VideoContext.Provider
      value={{ data, setData, currentData, setCurrentData }}
    >
      {children}
    </VideoContext.Provider>
  );
};
