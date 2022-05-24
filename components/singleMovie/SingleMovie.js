import {Button, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
let {width} = Dimensions.get('window');

export default function SingleMovie({navigation, route}) {
  const [movie] = useState(route.params.movie);
  //console.log(movie);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: movie.image}} />
      <View style={styles.textArea}>
        <Text style={styles.fullTitle}>{movie.fullTitle}</Text>

        <Text style={styles.text}>Rank:{movie.rank}</Text>
        <Text style={styles.text}>ImDb Rating:🌟 {movie.imDbRating}</Text>

        <Text style={styles.text}>
          ImDb Rating Count:{movie.imDbRatingCount}
        </Text>
        <Text style={styles.text}>Rank Up Down:{movie.rankUpDown}</Text>
      </View>
      <Button style={styles.button} title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
  },
  img: {
    height: width / 1.5,
    width: width / 1.3,
  },
  fullTitle: {
    fontSize: 18,
    marginTop: 5,
    color:'teal',
    fontWeight: 'bold',
  },
  textArea: {
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    margin:2,
    color:'#002',
  },
  button: {
      backgroundColor:"red",
  }
});
