import MovieCard from './components/MovieCard';
import movies from './data/movies.json';

function App() {
  return movies.map((movie) => <MovieCard movie={movie} />);
}

export default App;
