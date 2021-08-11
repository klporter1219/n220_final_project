import React, { useState } from 'react';

import Overlay from '../MovieOverlay';

import './index.css'

/**
 * Main movie component - contains all other components related to the movie
 */
export default function Movie({ movie }) {
  const [overlayOpen, setOverlayOpen] = useState(false);
  return (
    <div className="movie-card">
      <div className="movie-poster" style={{ backgroundImage: `url(${movie.poster})` }} onClick={() => setOverlayOpen(true)} />
      <Overlay movie={movie} open={overlayOpen} close={() => setOverlayOpen(false)} />
    </div>
  )
}