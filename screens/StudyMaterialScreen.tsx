import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/studyMaterial/SearchBar';
import SubjectFilter from '../components/studyMaterial/SubjectFilter';
import MaterialCategory from '../components/studyMaterial/MaterialCategory';
import { Material } from '../types/Material';
import { StackScreenProps } from '@react-navigation/stack';
import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';

type Props = StackScreenProps<StudyMaterialStackParamList, 'StudyHome'>;

const allMaterials: Material[] = [
  { id: '1', title: 'Data Structures', count: 12, icon: '🗂️', subject: 'Computer Science' },
  { id: '2', title: 'Algorithms', count: 8, icon: '💻', subject: 'Computer Science' },
  { id: '3', title: 'Database Systems', count: 10, icon: '🗃️', subject: 'Computer Science' },
  { id: '4', title: 'Calculus', count: 15, icon: '📐', subject: 'Mathematics' },
  { id: '5', title: 'Statistics', count: 10, icon: '📊', subject: 'Mathematics' },
];

const StudyMaterialsScreen: React.FC<Props> = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState<string>('All Subjects');

  const filtered = allMaterials.filter(
    (item) =>
      (subject === 'All Subjects' || item.subject === subject) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  const categorized = filtered.reduce((acc: Record<string, Material[]>, mat) => {
    if (!acc[mat.subject]) acc[mat.subject] = [];
    acc[mat.subject].push(mat);
    return acc;
  }, {});

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.heading}>Study Materials</Text>
        <Text style={styles.subtext}>Access all your course materials</Text>
        <SearchBar value={search} onChange={setSearch} />
        <SubjectFilter
          selected={subject}
          onSelect={setSubject}
          subjects={['All Subjects', 'Computer Science', 'Maths','English','Science','Social Studies']}
        />
        {Object.entries(categorized).map(([cat, mats]) => (
          <MaterialCategory key={cat} category={cat} materials={mats} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  inner: {
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});

export default StudyMaterialsScreen;

// import React, { useState } from 'react';
// import { FlatList, View, Text, StyleSheet } from 'react-native';
// import SearchBar from '../components/studyMaterial/SearchBar';
// import SubjectFilter from '../components/studyMaterial/SubjectFilter';
// import MaterialCategory from '../components/studyMaterial/MaterialCategory';
// import { Material } from '../types/Material';
// import { StackScreenProps } from '@react-navigation/stack';
// import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';

// type Props = StackScreenProps<StudyMaterialStackParamList, 'StudyHome'>;

// const allMaterials: Material[] = [
//   { id: '1', title: 'Data Structures', count: 12, icon: '🗂️', subject: 'Computer Science' },
//   { id: '2', title: 'Algorithms', count: 8, icon: '💻', subject: 'Computer Science' },
//   { id: '3', title: 'Database Systems', count: 10, icon: '🗃️', subject: 'Computer Science' },
//   { id: '4', title: 'Calculus', count: 15, icon: '📐', subject: 'Mathematics' },
//   { id: '5', title: 'Statistics', count: 10, icon: '📊', subject: 'Mathematics' },
// ];

// const StudyMaterialsScreen: React.FC<Props> = ({ navigation }) => {
//   const [search, setSearch] = useState('');
//   const [subject, setSubject] = useState<string>('All Subjects');

//   const filtered = allMaterials.filter(
//     (item) =>
//       (subject === 'All Subjects' || item.subject === subject) &&
//       item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const categorized = filtered.reduce((acc: Record<string, Material[]>, mat) => {
//     if (!acc[mat.subject]) acc[mat.subject] = [];
//     acc[mat.subject].push(mat);
//     return acc;
//   }, {});

//   const data = Object.entries(categorized).map(([category, materials]) => ({
//     category,
//     materials,
//   }));

//   const renderHeader = () => (
//     <View style={styles.header}>
//       <Text style={styles.heading}>Study Materials</Text>
//       <Text style={styles.subtext}>Access all your course materials</Text>
//       <SearchBar value={search} onChange={setSearch} />
//       <SubjectFilter
//         selected={subject}
//         onSelect={setSubject}
//         subjects={['All Subjects', 'Computer Science', 'Maths', 'English', 'Science', 'Social Studies']}
//       />
//     </View>
//   );

//   return (
//     <FlatList
//       style={styles.container}
//       data={data}
//       keyExtractor={(item) => item.category}
//       renderItem={({ item }) => (
//         <MaterialCategory
//           category={item.category}
//           materials={item.materials}
//           navigation={navigation}
//         />
//       )}
//       ListHeaderComponent={renderHeader}
//       contentContainerStyle={styles.contentContainer}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', // White background
//   },
//   contentContainer: {
//     paddingHorizontal: 16,
//     paddingBottom: 20,
//   },
//   header: {
//     paddingVertical: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#333', // Near-black for contrast
//     marginBottom: 8,
//   },
//   subtext: {
//     fontSize: 16,
//     color: '#666', // Lighter gray for subtext
//     marginBottom: 16,
//   },
// });

// export default StudyMaterialsScreen;