import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {PlaylistComponent} from '../components/PlaylistComponent';
import axios from 'axios';
import {Buffer as NewBuffer} from 'buffer';
import {authorize} from 'react-native-app-auth';

export const HomeScreen = ({navigation}) => {
  const [numberOfTracks, setNumberOfTracks] = useState('');
  const [playlistData, setPlaylistData] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const [image, setImage] = useState('');
  console.log(image, 'imageeeee');
  console.log(accessToken, 'accessToken');
  console.log(playlistData, 'playlistData');
  const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  };
  const config = {
    clientSecret: '1278ba8631ad489095d5d0e6047c9f27',
    clientId: '4d59b054c02d4e108e8bcb92ad2b0166',
    redirectUrl: 'com.testtask://oauthredirect',
    scopes: [
      'playlist-read-private',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-library-read',
      'user-library-modify',
      'user-top-read',
    ],
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
  };

  useEffect(() => {
    // const state = generateRandomString(16);
    const scope = 'user-read-private user-read-email';
    const redirect_uri = 'http://localhost:8888/callback';
    const client_id = '4d59b054c02d4e108e8bcb92ad2b0166';
    const client_secret = '1278ba8631ad489095d5d0e6047c9f27';

    const getToken = async () => {
      try {
        const result = await authorize(config);
        console.log(JSON.stringify(result), 'RESULT');
        setAccessToken(result?.accessToken);
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);
  useEffect(() => {
    const getPlayList = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: ' https://api.spotify.com/v1/me/playlists',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              'Bearer BQCs9zj5sTzh3nkMZrIFqbEpNDE2fosyHl1AjZB0iRwfyFU-WxD1u5nhXfzQPn4SPNS9UFSTd6PublJ1Zyy4g8d3wBgFEbuVfdRG_ITpwHh9YD_Mg20JTjknfD0opSYeOZ_2xcOWaTkZWFt14X55uvMPQi_KEC6xvsiCnIgEZWkPjdjaT65LqDnm_IAjLIKN2Prny_5yuZkZiIENxTtMATcxa4t3tNvNxBFNmBzAq1-7gbMuwq-E5Y4Xoi-S1KfzeZGAwG9fCnZrVaeYDFN9fU6z-zvgx6oDyvSVtw ',
          },
        }).then(function (response) {
          setPlaylistData(response?.data?.items);
          setNumberOfTracks(response?.items);
        });
      } catch (error) {
        console.log(error, 'error');
      }
    };
    getPlayList();
  }, []);
  const renderItem = ({item}) => {
    return (
      <PlaylistComponent
        title={item?.name}
        Numberoftracks={item?.tracks?.total}
        urlImg={item?.images?.[0]?.url}
        onPress={() => {
          navigation.navigate('TrackListScreen', {
            playlistData: {playlistData},
          });
        }}
      />
    );
  };
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          marginTop: 20,
          fontWeight: 'bold',
        }}>
        Top Playlist For You
      </Text>
      {playlistData?.map(item => {
        console.log({item});
        return (
          <PlaylistComponent
            title={item?.name}
            Numberoftracks={item?.tracks?.total}
            urlImg={item?.images?.[0]?.url}
            onPress={() => {
              navigation.navigate('TrackListScreen', {
                playlistData: {playlistData},
                urlImg: item?.images?.[0]?.url,
                numberOfTracks: item?.tracks?.total,
              });
            }}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    // flex: 1,
  },
});
