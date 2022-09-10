import { useVideoData } from '../../hooks/useVideoData';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { FiCircle } from 'react-icons/fi';
import { RiCheckboxCircleFill } from 'react-icons/ri';

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
        <h2>
          {props.position < 10 ? `0${props.position + 1}` : props.position + 1}. {props.title}
        </h2>
      </div>
    </Link>
  );
}
