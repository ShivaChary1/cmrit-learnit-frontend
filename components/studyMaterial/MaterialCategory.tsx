import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MaterialCard from './MaterialCard';
import { Material } from '../../types/Material';
import { StackScreenProps } from '@react-navigation/stack';
import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';

interface Props {
  category: string;
  materials: Material[];
  navigation: StackScreenProps<StudyMaterialStackParamList, 'StudyHome'>['navigation'];
}

const MaterialCategory: React.FC<Props> = ({ category, materials,navigation }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>{category}</Text>

    {materials.map((mat) => (
      
        <Pressable
          key={mat.id} onPress={() => navigation.navigate('SubjectDetails', { topicId: `${mat.title}` })} >
          <MaterialCard
            title={mat.title}
            count={mat.count}
            icon={mat.icon}
          />
        </Pressable>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
});

export default MaterialCategory;

// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import MaterialCard from './MaterialCard';
// import { Material } from '../../types/Material';
// import { StackScreenProps } from '@react-navigation/stack';
// import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';

// interface Props {
//   category: string;
//   materials: Material[];
//   navigation: StackScreenProps<StudyMaterialStackParamList, 'StudyHome'>['navigation'];
// }

// const MaterialCategory: React.FC<Props> = ({ category, materials, navigation }) => (
//   <View style={styles.container}>
//     <Text style={styles.heading}>{category}</Text>
//     <FlatList
//       data={materials}
//       keyExtractor={(item) => item.id}
//       numColumns={2}
//       renderItem={({ item }) => (
//         <View style={styles.cardContainer}>
//           <MaterialCard
//             title={item.title}
//             count={item.count}
//             icon={item.icon}
//             onPress={() => navigation.navigate('SubjectDetails', { topicId: item.title })}
//           />
//         </View>
//       )}
//       contentContainerStyle={styles.listContent}
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 24,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333', // Near-black
//     marginBottom: 12,
//   },
//   cardContainer: {
//     flex: 0.5, // Half width for two-column grid
//     padding: 8,
//   },
//   listContent: {
//     paddingBottom: 8,
//   },
// });

// export default MaterialCategory;