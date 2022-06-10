import React, {useEffect} from 'react';
import {HomeScreen} from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TrackListScreen} from './src/screens/TrackListScreen';
import {TrackDetailScreen} from './src/screens/TrackDetailScreen';
import {Linking} from 'react-native';
import {Text} from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
        <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
