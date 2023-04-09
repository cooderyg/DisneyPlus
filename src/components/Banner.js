import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/request'


const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
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
  fetchData();
  return (
    <div>
      
    </div>
  )
}

export default Banner
