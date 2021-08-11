import React from 'react';

import './index.css';

/**
 * Renders a card with a little information about a character in the movie
 */
export default function MovieCharacter({ character }) {
  return (
    <div className="movie-character">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-name">
        { character.name }
      </div>
      <a className="see-more" href={character.see_more} rel="noreferrer" target="_blank">See more</a>
    </div>
  )
}