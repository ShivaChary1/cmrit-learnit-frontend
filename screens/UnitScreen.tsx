// //import liraries
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
// import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';

// type Props = StackScreenProps<StudyMaterialStackParamList, 'ViewUnit'>;
// // create a component
// const UnitScreen: React.FC<Props> = ({route,navigation}) => {
//     return (
//         <View style={styles.container}>
//             <Text>{route.params.fileUrl}</Text>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
// });

// //make this component available to the app
// export default UnitScreen;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';

type Props = StackScreenProps<StudyMaterialStackParamList, 'ViewUnit'>;

const UnitScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentCard}>
        <Text style={styles.title}>Study Material</Text>
        <Text style={styles.fileText}>{route.params.fileUrl}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 600, // Limit width for larger screens
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Android shadow
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  fileText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default UnitScreen;