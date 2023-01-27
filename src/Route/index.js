import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutContainer from '../Container/About';
import ContactContainer from '../Container/Contact';
import DetailsContainer from '../Container/Details';
import HomeContainer from '../Container/Home';
import MoviesContainer from '../Container/Movies';
import SearchContainer from '../Container/Search';
import TVSeriesContainer from '../Container/TVSeries';
import FooterComponent from '../Components/Footer';
import HeaderComponents from '../Components/Header';
const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
      <HeaderComponents/>
      <Routes>
        <Route path='/' element={<HomeContainer/>}></Route>
        <Route path='/about' element={<AboutContainer/>}></Route>
        <Route path='/movies' element={<MoviesContainer/>}></Route>
        <Route path='/contact' element={<ContactContainer/>}></Route>
        <Route path='/series' element={<TVSeriesContainer/>}></Route>
        <Route path='/search' element={<SearchContainer/>}></Route>
        <Route path='/details/:movieid/:mediatype' element={<DetailsContainer/>}></Route>
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default RouterComponent
