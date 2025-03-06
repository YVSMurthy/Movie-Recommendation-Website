import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";

interface movieData {
    id: number,
    title: string,
    lang: string,
    poster: string,
    releaseDate: string,
    avgVote: number
}

export default function SimilarMovies() {
    const { movie } = useParams();

    var [movies, setMovies] = useState<movieData[]>([]);

    useEffect(() => {
        const fetchSimilarMovies = async () => {
            const uri = `http://localhost:3001/find-similar-movies/${movie}`;
            const options = {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            try {
                fetch(uri, options)
                    .then((raw) => raw.json())
                    .then((data) => setMovies(data['movies']));
            } catch(e) {
                console.log("Error: "+e)
            }
        }

        fetchSimilarMovies();
    }, [])


    return (
        <div className="w-full min-h-[100vh]">
            <section className='w-full'>
                <MovieList movies={movies} title={`Movies similar to ${movie}`} />
            </section>
        </div>
    )
}