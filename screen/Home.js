import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';
import Movies, { localMovies } from '../components/home/Movies';
import BottomTab from '../components/home/BottomTab';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [movieData, setMovieData] = useState(localMovies);

  const movieApi = `https://imdb-api.com/en/API/MostPopularMovies/k_wtm5x4ia`;

  useEffect(() => {
    const getAllMovie = async () => {
      await fetch(movieApi)
        .then(res => res.json())
        .then(data => setMovieData(data.items));
    };
    getAllMovie();
  }, []);
  //console.log(movieData)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerItems}>
        <Header />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </View>
      <ScrollView>
        <Movies movies={movieData && movieData} searchValue={searchValue} />
      </ScrollView>
      <BottomTab/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  headerItems: {
    backgroundColor: '#fff',
    padding: 10,
  },
});
