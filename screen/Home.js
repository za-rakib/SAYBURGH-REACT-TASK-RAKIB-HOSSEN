import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';
import Movies, {localMovies} from '../components/home/Movies';
import BottomTab from '../components/home/BottomTab';
import LoadingButton from '../components/home/LoadingButton';

export default function Home({navigation}) {
  const [searchValue, setSearchValue] = useState('');
  const [totalMovie, setTotalMovie] = useState(localMovies);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage] = useState(10);

 // console.log('currentPage', currentPage);
  const movieApi = `https://imdb-api.com/en/API/MostPopularMovies/k_wtm5x4ia`;

  useEffect(() => {
    const getAllMovie = async () => {
      setLoading(true);
      await fetch(movieApi)
        .then(res => res.json())
        .then(data => setTotalMovie(data.items));
      setLoading(false);
    };
    getAllMovie();
  }, [searchValue]);
  //console.log(movieData)

  //get current post
  const indexOfLastMovie = currentPage * moviePerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
  const currentMovie = totalMovie.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    //   <View>
    //       <Text>HOME</Text>
    //   </View>
    <SafeAreaView style={styles.container}>
      <View style={styles.headerItems}>
        <Header />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </View>
      <ScrollView style={styles.movieList}>
        <Movies
          movies={currentMovie}
          searchValue={searchValue}
          totalMovie={totalMovie}
          navigation={navigation}

        />
      </ScrollView>
      <LoadingButton
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {/* <BottomTab /> */}
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
  movieList:{
    width: "100%",
  }
});
