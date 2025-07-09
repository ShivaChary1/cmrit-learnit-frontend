// components/Greeting.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greeting: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome back, Emma</Text>
      <Text style={styles.date}>June 27, 2025 | Friday</Text>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    color: '#666',
  },
});
