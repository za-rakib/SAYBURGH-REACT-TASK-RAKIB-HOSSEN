import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import MovieCard from './MovieCard';
let {width} = Dimensions.get('window');

export const localMovies = [
  {
    crew: 'James Cameron (dir.), Zoe Saldana, Michelle Yeoh',
    fullTitle: 'Avatar: The Way of Water (2022)',
    id: 'tt1630029',
    imDbRating: '',
    imDbRatingCount: '0',
    image:
      'https://imdb-api.com/images/original/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.7910_AL_.jpg',
    rank: '2',
    rankUpDown: '+17',
    title: 'Avatar: The Way of Water',
    year: '2022',
  },
  {
    moviescrew: 'Joseph Kosinski (dir.), Tom Cruise, Jennifer Connelly',
    fullTitle: 'Top Gun: Maverick (2022)',
    id: 'tt1745960',
    imDbRating: '',
    imDbRatingCount: '0',
    image:
      'https://imdb-api.com/images/original/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg',
    rank: '7',
    rankUpDown: '+5',
    title: 'Top Gun: Maverick',
    year: '2022',
  },
  {
    crew: "Graham Moore (dir.), Zoey Deutch, Dylan O'Brien",
    fullTitle: 'The Outfit (2022)',
    id: 'tt14114802',
    imDbRating: '7.1',
    imDbRatingCount: '19058',
    image:
      'https://imdb-api.com/images/original/MV5BYWQ0NWUyMjktYjg4Yy00NmY3LTg2YzEtNWY5OTY5YTc2MjhjXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_Ratio0.6716_AL_.jpg',
    rank: '45',
    rankUpDown: '-10',
    title: 'The Outfit',
    year: '2022',
  },
];

export default function Movies({movies, searchValue, totalMovie, navigation}) {
  return (
    <View>
      {movies &&
        movies
          .filter(movie => {
            if (searchValue === '') {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie, index) => (
            <TouchableOpacity
              key={index}
              style={styles.container}
              onPress={() => navigation.navigate('Single Movie')}>
              <MovieCard movie={movie} />
            </TouchableOpacity>
          ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {},
});
