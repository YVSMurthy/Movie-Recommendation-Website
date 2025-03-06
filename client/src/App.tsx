import { useState } from 'react';
import backgroundImg from './assets/background.png';
import Home from './components/Home.tsx';
import Country from './components/Country.tsx';
import Genre from './components/Genre.tsx';
import SimilarMovies from './components/SimilarMovies.tsx';
import logo from './assets/logo.png';
import tmdbLogo from './assets/tmdb_logo.svg';
import { RiArrowUpSLine, RiArrowDownSLine } from '@remixicon/react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  var [searchType, setSearchType] = useState<string>("");
  var [showCountries, setShowCountries] = useState<boolean>(false);
  var [showGenres, setShowGenres] = useState<boolean>(false);

  const genres = [
    "Action", "Adventure", "Animation", "Comedy", "Crime", 
    "Documentary", "Drama", "Family", "Fantasy", "History", 
    "Horror", "Music", "Mystery", "Romance", "Science Fiction", 
    "TV Movie", "Thriller", "War", "Western"
  ];

  const countries = [
    "USA", "UK", "Canada", "Australia", "Germany", 
    "France", "Italy", "Spain", "Japan", "South Korea", 
    "India", "China", "Brazil", "Mexico", "Russia", 
    "Netherlands", "Sweden", "Norway", "Denmark", "Switzerland", 
    "New Zealand", "South Africa"
  ]

  return (
    <div className="relative w-full h-[100dvh] text-white overflow-hidden">
      {/* background layers */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#111111] via-[#373737] [38%] via-[#525151] [52%] via-[#4F4F4F] [57%] via-[#2A2A2A] [81%] to-[#050505] z-0 opacity-[90%]" />
      <div className="fixed inset-0 bg-center bg-cover bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      {/* scrollable content */}
      <div className="relative h-[100dvh] overflow-y-auto z-10">
        {/* Navbar  */}
        <nav className='relative w-full h-22 lg:h-26 flex items-center justify-center'>
            <img src={logo} alt="Logo" className='absolute left-5 lg:left-8 h-10 lg:h-12 w-auto cursor-pointer'
            onClick={() => {navigate('/')}}/>

            <ul className='flex items-center justify-center gap-5 lg:gap-20 ml-14 lg:ml-0'>
                <li className={`p-2 border-b lg:text-2xl cursor-pointer transition-color duration-300 ${(searchType == "Home") ? "border-white" : "border-transparent"}`}
                onClick = {() => setSearchType("Home")}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className={`p-2 border-b lg:text-2xl flex items-center justify-center gap-2 cursor-pointer transition-color duration-300 ${(searchType == "Country") ? "border-white" : "border-transparent"}`}
                onClick = {() => {
                  setShowCountries(!showCountries);
                  setShowGenres(false);
                }}>
                    Country {showCountries ? (<RiArrowUpSLine />) : (<RiArrowDownSLine />) }
                </li>
                <li className={`p-2 border-b lg:text-2xl flex items-center justify-center gap-2 cursor-pointer transition-color duration-300 ${(searchType == "Genre") ? "border-white" : "border-transparent"}`}
                onClick = {() => {
                  setShowGenres(!showGenres);
                  setShowCountries(false);
                }}>
                    Genre {showGenres ? (<RiArrowUpSLine />) : (<RiArrowDownSLine />) }
                </li>
            </ul>
        </nav>

        {(showCountries || showGenres) && (<Options showCountries={showCountries} setShowCountries={setShowCountries} setShowGenres={setShowGenres} setSearchType={setSearchType} list={showCountries ? countries : genres} />)}
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='find-similar-movie/:movie' element={<SimilarMovies />} />
          <Route path='country/:country' element={<Country />} />
          <Route path='genre/:genre' element={<Genre />} />
        </Routes>
        

        {/* Footer  */}
        <footer className='w-full h-30 bg-[#121212] mt-10 p-5'>
            <h4 className='text-xl font-bold text-[#e0e0e0]'>* Disclaimer:</h4>
            <div className='flex items-center justify-start gap-5 mt-2 ml-5'>
                <img src={tmdbLogo} alt="TMDB Logo" className='h-10 w-10' />
                <p className='text-md font-normal text-[#e0e0e0]'>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            </div>        
        </footer> 
      </div>
    </div>
  )
}

function Options({ showCountries, setShowCountries, setShowGenres, setSearchType, list }: { showCountries: boolean, setShowCountries: React.Dispatch<React.SetStateAction<boolean>>, setShowGenres: React.Dispatch<React.SetStateAction<boolean>>, setSearchType: React.Dispatch<React.SetStateAction<string>>, list: string[] }) {
  const navigate = useNavigate()
  const redirectTo = (item: string) => {
    setShowCountries(false);
    setShowGenres(false);
    showCountries ? setSearchType("Country") : setSearchType("Genre");
    const redirectURL = `/${showCountries ? "country" : "genre"}/${item}`

    navigate(redirectURL);
  }

  return (
    <div className={`absolute top-20 z-10 lg:top-22 ${showCountries ? "left-[10%] md:left-[35%] lg:left-[40%]" : "left-[18%] md:left-[43%] lg:left-[53%]"} w-75 md:w-110 bg-[#121212f0] rounded-md grid grid-cols-2 md:grid-cols-3 p-5 gap-2`}>
      {list.map((item: string, key: number) => {
        return (
          <p key={key} className='text-md text-white cursor-pointer'
          onClick={() => redirectTo(item)}>
            {item}
          </p>
        )
      })}
    </div>
  )
}