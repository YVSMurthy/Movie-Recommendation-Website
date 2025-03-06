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

export default function Country() {
    var [movies, setMovies] = useState<movieData[]>([]);

    const countries: Record<string, string> = {
        "USA": "US",
        "UK": "UK",
        "Canada": "CA",
        "Australia": "AU",
        "Germany": "DE",
        "France": "FR",
        "Italy": "IT",
        "Spain": "ES",
        "Japan": "JP",
        "South-Korea": "KR",
        "India": "IN",
        "China": "CN",
        "Brazil": "BR",
        "Mexico": "MX",
        "Russia": "RU",
        "Netherlands": "NL",
        "Sweden": "SE",
        "Norway": "NO",
        "Denmark": "DK",
        "Switzerland": "CH",
        "New Zealand": "NZ",
        "South Africa": "ZA"
    };

    const { country } = useParams();

    useEffect(() => {
        const fetchMovies = async (): Promise<void> => {
            var countryId = "IN";
            if (country) {
                countryId = countries[country];
            }
            const authToken = import.meta.env.VITE_AUTH_TOKEN;
            const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=${countryId}`;
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

    }, [country])

    return (
        <div className="w-full min-h-[100vh]">
            <section className='w-full'>
                <MovieList movies={movies} title={`Movies from ${country}`} />
            </section>
        </div>
    )
}