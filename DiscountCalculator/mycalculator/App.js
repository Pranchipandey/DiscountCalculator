import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      
      
        <AssetExample />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
   flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'blue',
    padding: 8,
  },
  
});
