import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Game from './game';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
