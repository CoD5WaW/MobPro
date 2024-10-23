import { View, Text, StyleSheet } from 'react-native'; // Combine imports
import React from 'react';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light background color for a clean look
  },
  headerText: {
    fontFamily: 'Montserrat', // Custom font family
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333', // Dark text color for contrast
  },
});
