import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const TrackListComponent = ({artistName, popularity, uriImage}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: uriImage}}
        resizeMode="contain"
      />
      <View>
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10}}>
          {artistName}
        </Text>
        <Text style={{color: 'white', marginLeft: 10}}>{popularity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: '80%',
    width: '20%',
  },
});
