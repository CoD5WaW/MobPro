import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light background color for modern look
  },
  headerText: {
    fontFamily: 'Montserrat', // Make sure you have this font linked
    fontSize: 40,
    color: '#333', // Dark gray for readability
    fontWeight: 'bold',
    textTransform: 'uppercase', // Capitalizes the text
  },
});
