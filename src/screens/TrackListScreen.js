import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {PlaylistComponent} from '../components/PlaylistComponent';
import {TrackListComponent} from '../components/TracklistComponent';

export const TrackListScreen = ({navigation, route}) => {
  const {artistsName, popularity, playlistData} = route?.params;
  console.log(playlistData, 'playlistDataaaaa');
  console.log(artistsName, 'data');

  return (
    <ScrollView style={styles.constianer}>
      <PlaylistComponent />
      {playlistData?.playlistData.map(item => {
        console.log({item});
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TrackDetailScreen');
            }}>
            <TrackListComponent
              artistName={item?.owner?.display_name}
              popularity={popularity}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  constianer: {
    backgroundColor: 'black',
    flex: 1,
  },
});
