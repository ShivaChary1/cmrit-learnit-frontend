// components/UpcomingTests.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const tests = [
  {
    title: 'Data Structures Midterm',
    subject: 'Computer Science',
    duration: '90 minutes',
    tag: 'Tomorrow',
  },
  {
    title: 'Marketing Analytics Quiz',
    subject: 'Business',
    duration: '45 minutes',
    tag: 'July 3',
  },
];

const UpcomingTests: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Upcoming Tests</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      {tests.map((test, index) => (
        <View key={index} style={styles.card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.testTitle}>{test.title}</Text>
            <Text style={styles.testDetails}>{`${test.subject} • ${test.duration}`}</Text>
          </View>
          <View style={styles.tag}><Text style={styles.tagText}>{test.tag}</Text></View>
        </View>
      ))}
    </View>
  );
};

export default UpcomingTests;

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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  testTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  testDetails: {
    fontSize: 12,
    color: '#666',
  },
  tag: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
});
