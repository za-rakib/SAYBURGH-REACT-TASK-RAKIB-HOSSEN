import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Pagination({moviePerPage, totalMovie}) {
  const pageNumber = [];
  
  for (let i = 1; i <= Math.ceil(totalMovie / moviePerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <View>
      <Text>Pagination</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
