import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const PlaylistComponent = ({title, Numberoftracks, onPress, urlImg}) => {
  console.log('url', urlImg);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{uri: urlImg}} resizeMode="contain" />
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        {title}
      </Text>
      <Text style={{color: 'white'}}>{Numberoftracks}Tracks</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
    height: '100%',
  },
});
