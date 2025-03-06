import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from '@remixicon/react';
import MovieList from './MovieList';

interface movieData {
    id: number,
    title: string,
    lang: string,
    poster: string,
    releaseDate: string,
    avgVote: number
}

export default function Home() {
    const navigate = useNavigate();
    var [searchText, setSearchText] = useState<string>("");
    // var [movies, setMovies] = useState<movieData[]>([
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    //     {
    //         avgVote: 1457,
    //         id: 1241982,
    //         lang: "en",
    //         poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    //         releaseDate: "2024-11-21",
    //         title: "Moana 2"
    //     },
    // ]);

    var [movies, setMovies] = useState<movieData[]>([]);

    useEffect(() => {
        const fetchMovies = async (): Promise<void> => {
            const authToken = import.meta.env.VITE_AUTH_TOKEN;
            const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2024-01-01&sort_by=popularity.desc';
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
                        console.log(data);
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
    }, [])

    const searchSimilarMovie = async () => {
        navigate(`/find-similar-movie/${searchText}`);
    }

    return(
        <main className='flex flex-col items-center justify-center'>

            <div className='flex items-center bg-white mt-40 w-[80vw] lg:w-[60vw] h-12 lg:h-14 rounded-lg overflow-hidden'>
                <input type="text" className='w-[80%] lg:w-[90%] h-full p-4 bg-white text-black focus:outline-none'
                placeholder="Type your favourite movie"
                value={searchText}
                onChange={(elem) => {
                    setSearchText(elem.target.value)
                }}/>
                <span className='flex items-center justify-center w-[20%] lg:w-[10%] bg-[#33c1e8] h-full cursor-pointer'
                    onClick={() => searchSimilarMovie()}>
                    <RiSearchLine className='text-black'/>
                </span>
            </div>

            <h1 className='text-3xl lg:text-6xl font-bold text-white text-center mt-16 lg:mt-28 w-[70vw] lg:w-[55vw]'>
                End your search for movies that you love
            </h1>

            <h2 className='text-md lg:text-lg text-white text-center mt-10 lg:mt-12 w-[75vw] lg:w-[55vw]'>
                Search for your favourite movie, and find similar ones to watch.
            </h2>

            {/* Latest Movie Details  */}
            <section className='mt-38 w-full'>
                <MovieList movies={movies} title={"Latest"} />
            </section>
        </main>
    )
}
