import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from "./pages/Movies/MoviePage"
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';

// 홈페이지 /
// 영화 전체페이지 (서치) /movie
// 영화 디테일 페이지 /movie/:id
// 추천영화 /movies/:id/recommendation

function App() {
  return (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />}/> 
          <Route path="/movies">
            <Route index element={<MoviePage />}/> 
            <Route path=":id" element={<MovieDetailPage />}/>
          </Route>  
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
  );
}

export default App;
