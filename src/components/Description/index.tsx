import './description.scss';
import professorPhoto from '../../assets/professor-photo.jpeg';

export function Description() {
  return (
    <>
      <div className="video-description">
        <div>
          <h2 className="video-description__title">
            01 - Introdução à lógica de programação
          </h2>
        </div>
        <div>
          <h3 className="video-description__abstract">
            lorem Ipsl um lorem Ipsluml orem Ipslu mlorem Ipsluml orem Ips lu
            mlorem Ipslumlorem Ipslumlorem Ipslumlorem mlorem Ipslumlorem.
          </h3>
        </div>
        <div className="video-description__professor">
          <div className="video-description__professor-photo">
            <img src={professorPhoto} alt="" />
          </div>

          <div className="video-description__professor-informations">
            <h3>Felipe Azevedo</h3>
            <p>Front-end Developer @felipeazevedo1991</p>
          </div>
        </div>
      </div>

      {/* <div className='video-description__resources'>
      <div className='video-description__extra-material'></div>
      <div className="video-description__challenge"></div>
    </div> */}
    </>
  );
}
