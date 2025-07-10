
// import Subject from '@/components/studyMaterial/Subject';
// import React from 'react';
// import { StackScreenProps } from '@react-navigation/stack';
// import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';
// import { StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// type Props = StackScreenProps<StudyMaterialStackParamList, 'SubjectDetails'>;

// // create a component
// const SubjectScreen : React.FC<Props> = ({route , navigation}) => {
//     return (
//         <SafeAreaView style={styles.container} edges={[ 'left', 'right']}>
//             <Subject route={route} navigation={navigation}/>
//         </SafeAreaView>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
// });

// export default SubjectScreen;

import Subject from '@/components/studyMaterial/Subject';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = StackScreenProps<StudyMaterialStackParamList, 'SubjectDetails'>;

const SubjectScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <Subject route={route} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Match UnitScreen background
  },
});

export default SubjectScreen;