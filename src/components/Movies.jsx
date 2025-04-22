import { Link } from 'react-router';
import { Movie } from './Movie';

export function Movies(props) {
    const { movies = []} = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => (
                   <Link Link to={`/movie/${movie.imdbID}`}>
                    <Movie key={movie.imdbID} {...movie} />
                    </Link>
                ))

            ) : (<h4>Sorry :p</h4>)
        }
            
        </div>
    );
}


