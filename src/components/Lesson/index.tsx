import './lesson.scss';
import { FiCircle } from 'react-icons/fi';
import { MdTimer } from 'react-icons/md';
import { BsPlay } from 'react-icons/bs';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { useState } from 'react';

export function Lesson() {
  const [watched, setWatched] = useState(false);
  console.log(watched);

  return (
    <div className="lesson">
      <button onClick={() => setWatched(!watched)}>
        {watched ? (
          <RiCheckboxCircleFill size={16} color="#0096fb" />
        ) : (
          <FiCircle size={16} color="#29292e"/>
        )}
      </button>

      <div>
        <h2>Introdução a lógica de programação</h2>
        <div className="lesson__informations">
          <span>
            <BsPlay color="#29292e" />
            <p>01</p>
          </span>

          <span>
            <MdTimer color="#29292e" />
            <p>03:43</p>
          </span>
        </div>
      </div>
    </div>
  );
}
