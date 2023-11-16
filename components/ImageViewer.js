import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const placeHolderImage = require('../assets/images/background-image.png');

const ImageViewer = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={placeHolderImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
