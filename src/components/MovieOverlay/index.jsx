import React from 'react';

import Character from '../MovieCharacter';

import './index.css'

/**
 * Renders an overlay when a movie is clicked on
 */
export default function MovieOverlay({ movie, open, close }) {
  return (
    <div
      className={`movie-overlay ${!open && 'hidden'}`}
      style={{
        background: `linear-gradient(#fff, ${movie.color})`
      }}
    >
      <div class="movie-title">
        { movie.title }
      </div>

      <div class="movie-year">
        Released { movie.released }
      </div>

      <div class="movie-description">
        <h5>Description:</h5>
        { movie.description }
      </div>

      <div className="movie-characters">
        {
          movie.main_characters.map((character) => <Character character={character} />)
        }
      </div>

      <button className="movie-close" onClick={close}>
        X
      </button>
    </div>
  )
}