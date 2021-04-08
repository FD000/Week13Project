
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'

import Share from './ShareButton'

//const URL = https://api.themoviedb.org/3/movie/399566?api_key=2365aea36d60ef1f206bd1bdf23fd999&language=en-US



const Container = styled.View`
flex: 1;
`



const Poster = styled.ImageBackground`
flex: 1;

`
const Bottom = styled.View`
flex:1
background: rgba(0,0,0, 0.6); 
padding:10px
`
/*background: rgba(255,255,255, 0.6); ^*/
const MoviePicture = styled.Image`
width: 100%;
flex:1
border: 5px solid white`

const MovieTitle = styled.Text`
font-size: 20px;
font-weight: bold;
margin-bottom: 20px;
color: #fff
`

const TextSpan = styled.Text`
color: red`

const MovieOverview = styled.Text`
font-size: 16px
font-weight: bold;
margin-bottom: 20px;
color: #fff
`


const MovieReleaseDate = styled.Text`
font-size: 16px
font-weight: bold;
color: #fff
`




const Details = ({ route }) => {
  const {itemID} = route.params;
  const [details, setDetails] = useState([])
  const [load, setLoad ] = useState(True)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${itemID}?api_key=2365aea36d60ef1f206bd1bdf23fd999&language=en-US`)
    .then(res => res.json())
    .then(json => setDetails(json))
    
    setTimeout(() => { setLoad(false)},3000)
  
  }, [])

  console.log(details)

  // Läg till en True eller not true på data ifall det blir successfull, om inte datan laddar på 10 sekunder ska en sida som säger error komma upp

  const ShareURL = `https://api.themoviedb.org/3/movie/${itemID}?api_key=2365aea36d60ef1f206bd1bdf23fd999&language=en-US`

  
  console.log(ShareURL)

  return (
    <Container>
      <Poster
        source={{ uri:`https://image.tmdb.org/t/p/w1280/${details.poster_path}`}}
      >
        <MoviePicture
          source={{ uri:`https://image.tmdb.org/t/p/w780/${details.backdrop_path}`}}
        ></MoviePicture>
        <Bottom>
          <MovieTitle>{details.original_title} <TextSpan>{details.vote_average}</TextSpan></MovieTitle>
          <MovieOverview>{details.overview}</MovieOverview>
          <MovieReleaseDate>Status Release: {details.status}</MovieReleaseDate>
          <Share MovieHomepage={details.homepage}/>
        </Bottom>
      </Poster>
    </Container>
  )
}

export default Details