// import React from 'react';
// import { View, Pressable, Text, StyleSheet } from 'react-native';

// interface Props {
//   selected: string;
//   onSelect: (subject: string) => void;
//   subjects: string[];
// }

// const SubjectFilter: React.FC<Props> = ({ selected, onSelect, subjects }) => (
//   <View style={styles.container}>
//     {subjects.map((sub) => (
//       <Pressable
//         key={sub}
//         style={[styles.button, selected === sub && styles.selected]}
//         onPress={() => onSelect(sub)}
//       >
//         <Text style={selected === sub ? styles.selectedText : styles.text}>
//           {sub}
//         </Text>
//       </Pressable>
//     ))}
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//     marginBottom: 16,
//   },
//   button: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 20,
//     backgroundColor: '#e6e6e6',
//   },
//   selected: {
//     backgroundColor: '#ccf2e9',
//   },
//   text: {
//     color: '#555',
//   },
//   selectedText: {
//     color: '#000',
//     fontWeight: 'bold',
//   },
// });

// export default SubjectFilter;


import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Expo vector icons

interface Props {
  selected: string;
  onSelect: (subject: string) => void;
  subjects: string[];
}

const SubjectFilter: React.FC<Props> = ({ selected, onSelect, subjects }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialLimit = 3;

  const visibleSubjects = isExpanded ? subjects : subjects.slice(0, initialLimit);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {visibleSubjects.map((sub) => (
          <Pressable
            key={sub}
            style={[styles.button, selected === sub && styles.selected]}
            onPress={() => onSelect(sub)}
          >
            <Text style={selected === sub ? styles.selectedText : styles.text}>
              {sub}
            </Text>
          </Pressable>
        ))}
      </View>

      {subjects.length > initialLimit && (
        <Pressable style={styles.toggle} onPress={toggleExpand}>
          <AntDesign name={isExpanded ? 'up' : 'down'} size={16} color="#555" />
          <Text style={styles.toggleText}>{isExpanded ? 'Show Less' : 'Show More'}</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
  },
  selected: {
    backgroundColor: '#ccf2e9',
  },
  text: {
    color: '#555',
  },
  selectedText: {
    color: '#000',
    fontWeight: 'bold',
  },
  toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  toggleText: {
    marginLeft: 4,
    fontSize: 13,
    color: '#555',
  },
});

export default SubjectFilter;
