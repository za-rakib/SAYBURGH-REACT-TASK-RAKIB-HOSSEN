import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
let {width} = Dimensions.get('window');
import React from 'react';

export default function MovieCard({movie}) {
  //console.log(movie.title);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: movie.image}} />
      <Text style={styles.title}>
        {movie.title.length > 40
          ? movie.title.substring(0, 40 - 3) + '...'
          : movie.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
  },
  image: {
    width: width / 1.3,
    height: width / 1.6,
  },
  title: {
    fontSize: 18,
    marginTop: 8,
  },
});
