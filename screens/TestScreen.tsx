import React, { useState } from 'react';
import { Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '@/components/test/TabBar';
import TestItem from '@/components/test/TestItem';
import { StackScreenProps } from '@react-navigation/stack';
import { TestStackParamList } from '@/types/TestStackParamList';

interface Props{
  navigation : StackScreenProps<TestStackParamList,'TestHome'>['navigation'];
  route : StackScreenProps<TestStackParamList,'TestHome'>['route'];
}

const TestScreen : React.FC<Props> = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Available');

  const tests = [
    {
      id: '1',
      type: 'Available',
      title: 'Database Systems Quiz',
      subject: 'Computer Science',
      duration: '30 minutes',
      date: 'Available until June 30, 2025',
      icon: 'storage',
    },
    {
      id: '2',
      type: 'Available',
      title: 'Calculus Practice Test',
      subject: 'Mathematics',
      duration: '60 minutes',
      date: 'Available until July 5, 2025',
      icon: 'square-root-alt',
    },
    {
        id: '3',
        type: 'Past',
        title: 'Physics Final Exam',
        subject: 'Physics',
        duration: '120 minutes',
        date: 'Completed on May 15, 2025',
        icon: 'atom',
    },
    {
        id: '4',
        type: 'Upcoming',
        title: 'Chemistry Midterm',
        subject: 'Chemistry',
        duration: '90 minutes',
        date: 'Starts on August 1, 2025',
        icon: 'flask',
    }
  ];

  const filteredTests = tests.filter(
    test =>
      test.type === activeTab &&
      (test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.subject.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <Text style={styles.heading}>Tests</Text>
      <Text style={styles.subtext}>Access all your tests here</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search tests by name or subject..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <FlatList
        data={filteredTests}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TestItem test={item} navigation={navigation}/>}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 4,
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    fontSize: 14,
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default TestScreen;
