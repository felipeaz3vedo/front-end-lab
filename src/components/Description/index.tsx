import './description.scss';
import professorPhoto from '../../assets/professor-photo.jpeg';
import notionIcon from '../../assets/notion-icon.svg';
import talkIcon from '../../assets/talk-icon.svg';

export function Description() {
  return (
    <>
      <div className="description">
        <div>
          <h2 className="description__title">
            Introdução à lógica de programação
          </h2>
        </div>
        <div>
          <h3 className="description__abstract">
            Nessa primeira aula veremos alguns conceitos básicos sobre
            linguagens de programação. Além disso, será apresentado a
            peseudolinguagem utilizada na disciplina, o Potigol.
          </h3>
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