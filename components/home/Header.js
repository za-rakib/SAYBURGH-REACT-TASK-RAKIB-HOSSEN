import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>FILM TIT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    padding: 10,
  },
  logo: {
    fontSize: 30,
    color: 'teal',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
