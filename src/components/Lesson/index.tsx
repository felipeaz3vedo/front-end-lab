import { useVideoData } from '../../hooks/useVideoData';

import { Link } from 'react-router-dom';

import './lesson.scss';

interface LessonProps {
  title: string;
  position: number;
  description: string;
  videoId: string;
}

export function Lesson(props: LessonProps) {
  const { setCurrentData } = useVideoData();

  return (
    <Link
      to={`/course/lesson/${props.videoId}`}
      className="lesson"
      onClick={() => setCurrentData(props)}
    >
      <div>
        <h2>
          {props.position < 10 ? `0${props.position + 1}` : props.position + 1}.{' '}
          {props.title}
        </h2>
      </div>
    </Link>
  );
}
