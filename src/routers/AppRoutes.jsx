import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Components/home/Home';
import Movie from '../Components/Pages/movie/Movie';
import MovieInfo from '../Components/Pages/movie/MovieInfo';
import Layout from '../Layout/Layout';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/search/:serchQuerys' element={<Home />} />
            <Route path='/year/:Year' element={<Home />} />
            <Route path="/video/:id" element={<MovieInfo />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes