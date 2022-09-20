import React from 'react';

const Characters = ({ characters }) => {
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '1fr' }}
    >
      {characters.map((char, id) => {
        return (
          <div
            key={id}
            style={{
              display: 'flex',
              margin: '5px',
              border: '1px solid black',
              boxShadow: ' 4px 4px 2px 1px rgba(0, 0, 255, .2)',
            }}
          >
            <img
              src={char.image}
              alt="persone image"
              style={{ borderRadius: '100%', width: '200px', height: '200px' }}
            />

            <ul>
              <h1>{char.name}</h1>
              <li>{char.species}</li>
              <li>{char.status}</li>
              <li>{char.gender}</li>
              <li>{char.origin.name && 'Havent origin name'}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
