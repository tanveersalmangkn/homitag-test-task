import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
//  Name, image, artists, Album, duration.
export const TrackDetailScreen = ({navigation, route}) => {
  const {urlImg, artistName} = route?.params;
  return (
    <View style={styles.constianer}>
      <Text>Track name</Text>
      <Image style={styles.image} source={{uri: urlImg}} resizeMode="cover" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View>
          <Text style={styles.name}>{artistName}</Text>
          <Text style={styles.text}>Album Name</Text>
        </View>
        <Text style={styles.text}>3:38</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constianer: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: '30%',
    width: '85%',

    alignSelf: 'center',
  },
  text: {color: 'white', marginHorizontal: 30},
  name: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 30,
    marginTop: 10,
    marginTop: 5,
  },
});
