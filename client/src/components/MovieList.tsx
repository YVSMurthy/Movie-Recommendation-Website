import { useState, useEffect } from 'react';
import { RiCloseLargeLine } from '@remixicon/react';

interface movieData {
    id: number,
    title: string,
    lang: string,
    poster: string,
    releaseDate: string,
    avgVote: number
}

export default function MovieList({movies, title}: {movies: movieData[], title: string}) {
    var [openPopUp, setOpenPopUp] = useState<boolean>(true);
    var [movieId, setMovieId] = useState<number | null>(null);

    return (
        <div className='w-full px-8 lg:px-12 py-10'>
            <h2 className='text-3xl font-times font-bold ml-5'>{title}</h2>
            <div className='flex items-center justify-center w-full'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-9 md:gap-14 mt-10 auto-rows-fr'>
                    {movies.map((movie: movieData, index: number) => (
                        <Card 
                            key={index} 
                            movie={movie} 
                            onClick={() => {
                                setMovieId(movie.id);
                                setOpenPopUp(true);
                            }} 
                        />
                    ))}
                </div>
            </div>

            {/* Movie Details Pop Up  */}
            {openPopUp && movieId && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="relative w-[90%] md:w-[60%] lg:w-[80%] max-h-[800px] h-[80dvh] md:h-[85dvh] top-2 md:top-0 rounded-lg">
                        <MovieDetails movieId={movieId} onClose={() => { setMovieId(null); setOpenPopUp(false); }} />
                    </div>
                </div>
            )}
            
        </div>
    )
}


function Card({movie, onClick}: {movie: movieData, onClick: () => void}) {
    return (
        <div className='relative rounded-lg w-36 lg:w-44 h-58 lg:h-72 bg-white cursor-pointer'
        onClick={onClick}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} alt={movie.title}
            className='w-full h-40 lg:h-50 object-cover object-center rounded-tl-lg rounded-tr-lg' />

            <h4 className='absolute bottom-24 right-2 px-3 py-0.5 bg-white text-black rounded-md'>{movie.lang}</h4>

            <section className='px-3 py-2'>
                <h2 className='text-xl font-bold text-black truncate w-full'>{movie.title}</h2>
                <div className='mt-2 lg:mt-5 flex items-center justify-between'>
                    <h3 className='text-sm font-medium text-black'>{movie.releaseDate}</h3>
                    <h3 className='text-sm font-medium text-black'>{movie.avgVote.toFixed(1)+" ⭐️"}</h3>
                </div>
            </section>

        </div>
    )
}

interface movieDetailsProp {
    movieId: number,
    onClose: () => void
}

function MovieDetails({ movieId, onClose }: movieDetailsProp) {
    var [movieDetails, setMovieDetails] = useState<any>(null);

    useEffect(() => {
        const fetchMovieDetails = async (): Promise<void> => {
            const authToken = import.meta.env.VITE_AUTH_TOKEN;
            const url = `https://api.themoviedb.org/3/movie/${movieId}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${authToken}`
                }
            };

            try {
                const res = await fetch(url, options);
                const data = await res.json();
                
                // Ensure data contains expected properties
                if (data) {
                    setMovieDetails({
                        title: data.title,
                        overview: data.overview,
                        background: data.backdrop_path || null
                    });
                }
            } catch (err) {
                console.error("Error fetching movie details:", err);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    // Don't render until movieDetails is available
    if (!movieDetails) {
        return (
            <div className="relative w-full h-full bg-white rounded-lg flex items-center justify-center">
                <p className="text-black text-lg">Loading movie details...</p>
            </div>
        );
    }

    return (
        <div className='relative w-full h-full bg-white rounded-lg overflow-hidden'>
            <RiCloseLargeLine className='text-3xl text-white absolute z-100 top-5 right-5 cursor-pointer'
            onClick={onClose} />

            {/* Background image */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black opacity-90 z-1" />
            <div className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0 opacity-90"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.background})` }}
            />

            {/* Content */}
            <div className="absolute z-10 p-4 md:p-5 lg:p-6 bottom-3 left-0 lg:left-2">
                <h2 className="text-2xl font-bold text-white">{movieDetails.title}</h2>
                <p className="text-white text-justify mt-4">{movieDetails.overview}</p>
            </div>
        </div>
    );
}
