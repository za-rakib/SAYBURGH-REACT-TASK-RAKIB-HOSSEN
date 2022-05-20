import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default function SearchBar({setSearchValue, searchValue}) {
  return (
    <View style={styles.SearchBar}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        blurOnSubmit
        autoCorrect={false}
        keyboardType="default"
        onChangeText={setSearchValue}
        value={searchValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 50,
  },
  input: {
    backgroundColor: '#eee',
    width: '100%',
    padding: 10,
    borderRadius: 50,
    fontSize: 20,
    color:"#003",
    alignItems: 'center',
  },
});
