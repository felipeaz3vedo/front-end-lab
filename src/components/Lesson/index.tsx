import { FiCircle } from 'react-icons/fi';
import { MdTimer } from 'react-icons/md';
import { BsPlay } from 'react-icons/bs';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useVideoData } from '../../hooks/useVideoData';
//custom path
import './lesson.scss';

interface LessonProps {
  title: string;
  position: number;
  description: string;
  videoId: string;
}

export function Lesson(props: LessonProps) {
  const [watched, setWatched] = useState(false);

  const { setCurrentData } = useVideoData();

  return (
    <Link
      to={`/course/lesson/${props.videoId}`}
      className="lesson"
      onClick={() => setCurrentData(props)}
    >
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
            <p>{props.position + 1}</p>
          </span>

          <span>
            <MdTimer />
            <p>10:42</p>
          </span>
        </div>
      </div>
    </Link>
  );
}
