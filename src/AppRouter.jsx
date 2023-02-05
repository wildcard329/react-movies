import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Movie from './pages/Movie';
import Movies from './pages/Movies';

const AppRouter = () =>
  <Routes>
    <Route path='/' element={<Movies />} />
    <Route path='/movie/:id' element={<Movie />} />
  </Routes>

export default AppRouter;
