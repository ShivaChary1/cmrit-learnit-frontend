// components/RecentMaterials.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecentMaterials: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Recent Materials</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      {/* Placeholder for material cards */}
      <View style={styles.card}>
        <Text style={styles.title}>Lecture Notes - Stack & Queue</Text>
        <Text style={styles.subtitle}>Uploaded 2 days ago</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Chapter 4: Regression Models</Text>
        <Text style={styles.subtitle}>Uploaded 5 days ago</Text>
      </View>
    </View>
  );
};

export default RecentMaterials;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 13,
    color: '#007bff',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
});
