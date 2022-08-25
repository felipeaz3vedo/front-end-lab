import './App.scss';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Video } from './components/Video';

export function App() {
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
