import { useVideoData } from '../../hooks/useVideoData';

import professorPhoto from '../../assets/professor-photo.jpeg';
import { SiNotion } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';

import './description.scss';

export function Description() {
  const { currentData } = useVideoData();

  return (
    <>
      <div className="description">
        <div>
          <h1 className="description__title">
            {currentData.position < 10
              ? `0${currentData.position + 1}`
              : currentData.position + 1}
            . {currentData.title}
          </h1>
        </div>

        <div>
          <h3 className="description__abstract">{currentData.description}</h3>
        </div>

        <div className="description__professor">
          <div className="description__professor-photo">
            <img src={professorPhoto} alt="Foto de Felipe de Azevedo pessoa" />
          </div>

          <div className="description__professor-informations">
            <h3>Felipe Azevedo</h3>
            <p>Front-end Developer @felipeazevedo1991</p>
          </div>
        </div>

        <div className="description__assets">
          <a className="description__assets-button" href="#">
            <SiNotion size={20} />
            material complementar
          </a>
          <a className="description__assets-button" href="#">
            <FaDiscord size={20} />
            grupo no discord
          </a>
        </div>
      </div>
    </>
  );
}
