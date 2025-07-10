// //import liraries
// import StudyMaterialsScreen from '@/screens/StudyMaterialScreen';
// import React from 'react';
// import { View } from 'react-native';

// // create a component
// const StudyMaterial = () => {
//     return (
//         <View style={{backgroundColor: '#fff', flex: 1,}}>
//             <StudyMaterialsScreen/>
//         </View>
//     );
// };

// //make this component available to the app
// export default StudyMaterial;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StudyMaterialsScreen from '@/screens/StudyMaterialScreen';
import SubjectScreen from '@/screens/SubjectScreen';
import UnitScreen from '@/screens/UnitScreen';
import { StudyMaterialStackParamList } from '@/types/StudyMaterialStackParamList';
// Define the types for the stack navigator



// Create the stack navigator
const StudyStack = createStackNavigator<StudyMaterialStackParamList>();

// Main Study Material component with stack navigation
const StudyMaterial = () => (
  <StudyStack.Navigator
    initialRouteName="StudyHome"
  >
    <StudyStack.Screen 
    options={{
      headerShown: false, 
    }}
      name="StudyHome"
      component={StudyMaterialsScreen}
    />
    <StudyStack.Screen
      name="SubjectDetails"
      component={SubjectScreen}
      options={{
        headerShown : false,
        title:"",
        headerStyle: {
          backgroundColor: '#fff',
        },
      }}
    />

    <StudyStack.Screen
      name='ViewUnit'
      component={UnitScreen}
      options={{
        headerShown : false,
        title:"",
        headerStyle: {
          backgroundColor: '#fff',
        },
      }}
    />
  </StudyStack.Navigator>
);
export default StudyMaterial;