import React,{ useState } from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedSlide from'./components/TopRatedSlide/TopRatedSlide';
import UpcomingMovieSlideSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide';

// 1.배너 = Popular 영화리스트의 첫 아이템 보여주기
// 2.Popular movie
// 3.Top rated movie
// 4.Upcoming movie

const Homepage = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div>
      {showBanner && <Banner />}
      <PopularMovieSlide />
      <TopRatedSlide />
      <UpcomingMovieSlideSlide />
    </div>
  )
}

export default Homepage
