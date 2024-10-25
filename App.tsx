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

function App() {
  const showAlert = () => {
    Alert.alert('Alert Title', 'This is the message', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      // {
      //   text: 'OK',
      //   onPress: () => console.log('OK Pressed'),
      // },
    ]);
  };
  return (
    <SafeAreaView className="flex-1 p-10">
      <Login />
    </SafeAreaView>
  );
}
export default App;
