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
  const {urlImg, playlistData, popularity, Numberoftracks} = route?.params;
  console.log(urlImg, 'urlImg');

  return (
    <ScrollView style={styles.constianer}>
      <PlaylistComponent urlImg={urlImg} Numberoftracks={Numberoftracks} />
      {playlistData?.playlistData.map(item => {
        console.log({item});
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TrackDetailScreen', {
                urlImg: urlImg,
                artistName: item?.name,
              });
            }}>
            <TrackListComponent
              artistName={item?.owner?.display_name}
              popularity={popularity}
              uriImage={urlImg}
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
