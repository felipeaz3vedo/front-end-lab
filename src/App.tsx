import './App.scss';
import { Description } from './components/Description';
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
    </>
  );
}
