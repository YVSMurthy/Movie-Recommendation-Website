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

export default function Genre() {
    var [movies, setMovies] = useState<movieData[]>([]);

    const genres: Record<string, number> = {
        "Action": 28,
        "Adventure": 12,
        "Animation": 16,
        "Comedy": 35,
        "Crime": 80,
        "Documentary": 99,
        "Drama": 18,
        "Family": 10751,
        "Fantasy": 14,
        "History": 36,
        "Horror": 27,
        "Music": 10402,
        "Mystery": 9648,
        "Romance": 10749,
        "Science Fiction": 878,
        "TV Movie": 10770,
        "Thriller": 53,
        "War": 10752,
        "Western": 37
    };

    const { genre } = useParams();

    useEffect(() => {
        const fetchMovies = async (): Promise<void> => {
            var genreId = 18;
            if (genre) {
                genreId=genres[genre]
            }
            const authToken = import.meta.env.VITE_AUTH_TOKEN;
            const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${authToken}`
                }
            };

            try {
                fetch(url, options)
                    .then(res => res.json())
                    .then(data => {
                        let currMovies: movieData[] = [];
                        data.results.forEach((movie: any) => {
                            currMovies.push({
                                id: movie.id,
                                title: movie.title,
                                lang: movie.original_language,
                                poster: movie.poster_path,
                                releaseDate: movie.release_date,
                                avgVote: movie.vote_average
                            });
                        })
                        setMovies(currMovies);
                    })
                    .catch(err => console.error(err));
            } catch (error) {
                console.log("Error : " + error);
            }
        }

        fetchMovies();

    }, [genre])

    return (
        <div className="w-full min-h-[100vh]">
            <section className='w-full'>
                <MovieList movies={movies} title={`Movies from ${genre}`} />
            </section>
        </div>
    )
}