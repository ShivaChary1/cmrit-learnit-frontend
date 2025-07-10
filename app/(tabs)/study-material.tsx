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
import { View, Text, Button, StyleSheet } from 'react-native';

// Define the types for the stack navigator
type StudyMaterialStackParamList = {
  StudyHome: undefined;
  TopicDetail: { topicId: string };
  Quiz: { topicId: string };
};

// Create the stack navigator
const StudyStack = createStackNavigator<StudyMaterialStackParamList>();

// Screen components
const StudyHomeScreen = ( { navigation} ) => (
  <View style={styles.container}>
    <Text style={styles.title}>Study Material Home</Text>
    <Button
      title="Go to Topic Detail"
      onPress={() => navigation.navigate('TopicDetail', { topicId: '1' })}
    />
    <Button
      title="Go to Quiz"
      onPress={() => navigation.navigate('Quiz', { topicId: '1' })}
    />
  </View>
);

const TopicDetailScreen = ({ route}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Topic Detail</Text>
    <Text>Topic ID: {route.params.topicId}</Text>
  </View>
);

const QuizScreen = ({ route }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Quiz</Text>
    <Text>Topic ID: {route.params.topicId}</Text>
  </View>
);

// Main Study Material component with stack navigation
const StudyMaterial = () => (
  <StudyStack.Navigator
    initialRouteName="StudyHome"
    screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <StudyStack.Screen
      name="StudyHome"
      component={StudyHomeScreen}
      options={{ title: 'Study Material' }}
    />
    <StudyStack.Screen
      name="TopicDetail"
      component={TopicDetailScreen}
      options={{ title: 'Topic Detail' }}
    />
    <StudyStack.Screen
      name="Quiz"
      component={QuizScreen}
      options={{ title: 'Quiz' }}
    />
  </StudyStack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default StudyMaterial;