import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Request'
import Row from '../Row'
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function HomeScreen() {
  return (
    <div className='homeScreen'>
    {/* nav */}
    <Nav/>

    {/* banner */}
    <Banner />

    {/* row */}
    <Row title="TRENDING NOW" fetchURL = {requests.fetchTrending}/>
    <Row title="NETFLIX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals} isLargeRow />
    <Row title="TOP RATED" fetchURL = {requests.fetchTopRated}/>
    <Row title="ACTION MOVIES" fetchURL = {requests.fetchActionMovies}/>
    <Row title="COMEDY MOVIES" fetchURL = {requests.fetchComedyMovies}/>
    <Row title="HORROR MOVIES" fetchURL = {requests.fetchHorrorMovies}/>
    <Row title="ROMANCE MOVIES" fetchURL = {requests.fetchRomanceMovies}/>
    <Row title="DOCUMENTARIES" fetchURL = {requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen
