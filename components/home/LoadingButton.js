import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

export default function LoadingButton({currentPage, setCurrentPage}) {
  const handleLeft = () => {
    setCurrentPage(currentPage == 1 ? (currentPage = 1) : currentPage - 1);
  };
  const handleRight = () => {
    return setCurrentPage(currentPage + 1);
  };
  return (
    <View style={styles.loading}>
      {currentPage > 1 && (
        <TouchableOpacity onPress={handleLeft} style={styles.icons}>
          <FontAwesomeIcon style={styles.icon} size={25} icon={faArrowLeft} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handleRight} style={styles.icons}>
        <FontAwesomeIcon style={styles.icon} size={25} icon={faArrowRight} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  icons: {
    height: 30,
    width: 50,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  icon: {
    color: 'teal',
  },
});
