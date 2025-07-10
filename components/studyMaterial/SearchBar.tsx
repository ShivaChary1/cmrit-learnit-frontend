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


// import React from 'react';
// import { TextInput, View, StyleSheet } from 'react-native';

// interface Props {
//   value: string;
//   onChange: (text: string) => void;
// }

// const SearchBar: React.FC<Props> = ({ value, onChange }) => (
//   <View style={styles.container}>
//     <TextInput
//       style={styles.input}
//       placeholder="Search materials..."
//       placeholderTextColor="#999"
//       value={value}
//       onChangeText={onChange}
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 16,
//   },
//   input: {
//     backgroundColor: '#f5f5f5', // Light gray for input field
//     borderRadius: 12,
//     padding: 12,
//     fontSize: 16,
//     color: '#333', // Near-black text
//     borderWidth: 1,
//     borderColor: '#e0e0e0', // Subtle border
//   },
// });

// export default SearchBar;