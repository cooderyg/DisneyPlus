import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/request'
import "./Banner.css"

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    //현재 상영중 영화정보 가져오기(20개)
    const res = await axios.get(requests.fatchNowPlaying);
    const results = res.data.results;
    //20개 영화 중 랜덤으로 영화ID가져오기
    const movieId = results[Math.floor(Math.random()*results.length)].id;

    //ID값으로 영화상세정보 가져오기
    const {data: movieDetail} = await axios.get(`movie/${movieId}`,{
      params: { append_to_response: "videos"}
    })
    setMovie(movieDetail)
  }
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  }
  return (
    <div>
      <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      >
        <div className="banner__contnets">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner__button">
            {movie?.videos?.results[0]?.key &&
              <button>
                Play
              </button>
            }

          </div>
          <p className="banner__description">
            {truncate(movie.overview, 100)}
          </p>
        </div>
            <div className="banner--fadeBottom"></div>
      </header>
    </div>
  )
}

export default Banner
