// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import type { StackScreenProps } from '@react-navigation/stack';
// import { Pressable } from 'react-native-gesture-handler';
// import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';

// type Props = StackScreenProps<StudyMaterialStackParamList, 'SubjectDetails'>;

// const Subject: React.FC<Props> = ({ route, navigation }) => {
//   const [allUnits, setAllUnits] = useState<string[]>([]);

//   useEffect(() => {
//     // Only run once on mount
//     setAllUnits([
//       'Unit 1 - Introduction',
//       'Unit 2 - Basics',
//       'Unit 3 - Advanced Topics',
//       'Unit 4 - Practical Applications',
//       'Unit 5 - Case Studies',
//     ]);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>{route.params.topicId}</Text>
//       <Text style={styles.subtext}>Unit-wise files for {route.params.topicId}</Text>

//       <FlatList
//         data={allUnits}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//          <Pressable onPress={()=>(navigation.navigate("ViewUnit", { fileUrl: item }))}>
//             <View style={{...styles.card, ...styles.container}} >
//             <View style={{ flex: 1 }}>
//                 <Text style={styles.testTitle}>{item}</Text>
//             </View>
//             <View style={styles.tag}><Text style={styles.tagText}>{"1 files"}</Text></View>
//         </View>
//          </Pressable>
//         )}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     tagText: {
//     fontSize: 11,
//     fontWeight: 'bold',
//   },
//   tag: {
//     backgroundColor: '#eee',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 8,
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginTop: 5,
//     paddingHorizontal: 0,
//   },
//   subtext: {
//     fontSize: 14,
//     paddingHorizontal: 0,
//     color: '#666',
//     marginBottom: 10,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 10,
//     margin: 10,

//     // Shadow for iOS
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,

//     // Shadow for Android
//     elevation: 2,

//     // Subtle border
//     borderWidth: 1,
//     borderColor: '#f0f0f0',
//   },
//   testTitle: {
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
// });

// export default Subject;


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import { Pressable } from 'react-native-gesture-handler';
import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';

type Props = StackScreenProps<StudyMaterialStackParamList, 'SubjectDetails'>;

const Subject: React.FC<Props> = ({ route, navigation }) => {
  const [allUnits, setAllUnits] = useState<string[]>([]);

  useEffect(() => {
    // Only run once on mount
    setAllUnits([
      'Unit 1 - Introduction',
      'Unit 2 - Basics',
      'Unit 3 - Advanced Topics',
      'Unit 4 - Practical Applications',
      'Unit 5 - Case Studies',
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{route.params.topicId}</Text>
      <Text style={styles.subtext}>Unit-wise files for {route.params.topicId}</Text>
      <FlatList
        data={allUnits}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Two-column grid
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('ViewUnit', { fileUrl: item })}
            style={styles.cardContainer}
          >
            <View style={styles.card}>
              <Text style={styles.testTitle}>{item}</Text>
              <View style={styles.tag}>
                <Text style={styles.tagText}>1 file</Text>
              </View>
            </View>
          </Pressable>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#fff', // Consistent background
  },
  heading: {
    fontSize: 22,
    paddingHorizontal: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  cardContainer: {
    flex: 0.5, // Each card takes half the width for two-column grid
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    height: 120, // Fixed height for uniformity
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Android shadow
    borderWidth: 1,
    borderColor: '#eee',
  },
  testTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#e0f2fe', // Light blue for a modern accent
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0284c7', // Darker blue for contrast
  },
});

export default Subject;