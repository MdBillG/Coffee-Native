import React from 'react';
import './global.css';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  Button,
  Image,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import Login from './src/Login/Login';
import HomeScreen from './src/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
