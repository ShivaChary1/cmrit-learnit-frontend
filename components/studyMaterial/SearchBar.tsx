import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search materials..."
      value={value}
      onChangeText={onChange}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
});

export default SearchBar;
