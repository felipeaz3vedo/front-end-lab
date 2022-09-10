import professorPhoto from '../../assets/professor-photo.jpeg';
import notionIcon from '../../assets/notion-icon.svg';
import talkIcon from '../../assets/talk-icon.svg';
import { useVideoData } from '../../hooks/useVideoData';

import './description.scss';

export function Description() {
  const { currentData } = useVideoData();

  return (
    <>
      <div className="description">
        <div>
          <h2 className="description__title">{currentData.title}</h2>
        </div>
        <div>
          <h3 className="description__abstract">{currentData.description}</h3>
        </div>
        <div className="description__professor">
          <div className="description__professor-photo">
            <img src={professorPhoto} alt="" />
          </div>

          <div className="description__professor-informations">
            <h3>Felipe Azevedo</h3>
            <p>Front-end Developer @felipeazevedo1991</p>
          </div>
        </div>
        <div className="description__assets">
          <a className="description__assets-extra" href="#">
            <img src={notionIcon} alt="logomarca do notion" />
            material complementar
          </a>
          <a className="description__assets-talk" href="#">
            <img src={talkIcon} alt="Icone fale comigo" />
          </a>
        </div>
      </div>
    </>
  );
}
