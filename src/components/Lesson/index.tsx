import './lesson.scss';
import { FiCircle } from 'react-icons/fi';
import { MdTimer } from 'react-icons/md';
import { BsPlay } from 'react-icons/bs';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { useState } from 'react';

interface Lessonprops {
  title: string;
  position: number;
  duration: string;
}

export function Lesson(props: Lessonprops) {
  const [watched, setWatched] = useState(false);

  return (
    <a href="#" className="lesson">
      <button onClick={() => setWatched(!watched)}>
        {watched ? (
          <RiCheckboxCircleFill size={18} color="#0096fb" />
        ) : (
          <FiCircle size={18} color="#29292e" />
        )}
      </button>

      <div>
        <h2>{props.title}</h2>
        <div className="lesson__informations">
          <span>
            <BsPlay />
            <p>01</p>
          </span>

          <span>
            <MdTimer />
            <p>{props.duration}</p>
          </span>
        </div>
      </div>
    </a>
  );
}
