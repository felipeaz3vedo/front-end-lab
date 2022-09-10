import { Description } from '../components/Description';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

import '../App.scss';

interface Video {
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

export function Course() {
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
