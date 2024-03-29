

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import BottomNavBar from './application/src/components/header';
import WelcomeScreen from './application/src/screens/welcomeScreen';


function App() {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <BottomNavBar />
      </View>
    </SafeAreaView>

  );
}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});