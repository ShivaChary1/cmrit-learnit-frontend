// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import { StackScreenProps } from '@react-navigation/stack';
// import { TestStackParamList } from '@/types/TestStackParamList';


// interface Test {
//   id: string;
//   type: string;
//   title: string;
//   subject: string;
//   duration: string;
//   date: string;
//   icon: string;
// }

// interface TestItemProps {
//   test: Test;
//   navigation: StackScreenProps<TestStackParamList, 'TestHome'>['navigation'];
// }

// const TestItem: React.FC<TestItemProps> = ({ test, navigation }) => {
//   const renderActionButton = ( ) => {
//     switch (test.type) {
//       case 'Available':
//         return (
//           <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#f9f9f9' }]}>
//             <FontAwesome name="play" size={14} color="#000" />
//             <Text style={styles.actionText}>Start Test</Text>
//           </TouchableOpacity>
//         );

//       case 'Upcoming':
//         return (
//           <>
//             <View style={styles.reminderContainer}>
//               <FontAwesome name="clock-o" size={12} color="#757575" style={styles.dateIcon} />
//               <Text style={styles.date}>Starts on {test.date}</Text>
//             </View>
//             <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#F9f9f9' }]}>
//               <FontAwesome name="bell" size={14} color="#000" />
//               <Text style={styles.actionText}>Set Reminder</Text>
//             </TouchableOpacity>
//           </>
//         );

//       case 'Past':
//         return (
//           <>
//             <View style={styles.reminderContainer}>
//               <FontAwesome name="check-circle" size={12} color="#757575" style={styles.dateIcon} />
//               <Text style={styles.date}>Completed on {test.date}</Text>
//             </View>
//             <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#f9f9f9' }]}>
//               <FontAwesome name="file-text-o" size={14} color="#000" />
//               <Text style={styles.actionText}>View Results</Text>
//             </TouchableOpacity>
//           </>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{test.title}</Text>
//       <Text style={styles.details}>
//         {test.subject} • {test.duration}
//       </Text>
//       {renderActionButton()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#212121',
//   },
//   details: {
//     fontSize: 14,
//     color: '#757575',
//     marginBottom: 8,
//   },
//   reminderContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   dateIcon: {
//     marginRight: 5,
//   },
//   date: {
//     fontSize: 12,
//     color: '#757575',
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 8,
//     borderRadius: 5,
//   },
//   actionText: {
//     color: '#000',
//     fontSize: 14,
//     marginLeft: 5,
//     fontWeight: '500',
//   },
// });

// export default TestItem;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { TestStackParamList } from '@/types/TestStackParamList';

interface Test {
  id: string;
  type: string;
  title: string;
  subject: string;
  duration: string;
  date: string;
  icon: string;
}

interface TestItemProps {
  test: Test;
  navigation: StackScreenProps<TestStackParamList, 'TestHome'>['navigation'];
}

const TestItem: React.FC<TestItemProps> = ({ test, navigation }) => {
  const renderActionButton = () => {
    switch (test.type) {
      case 'Available':
        return (
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: '#f9f9f9' }]}
            onPress={() => navigation.navigate('AttemptTest')}
          >
            <FontAwesome name="play" size={14} color="#000" />
            <Text style={styles.actionText}>Start Test</Text>
          </TouchableOpacity>
        );

      case 'Upcoming':
        return (
          <>
            <View style={styles.reminderContainer}>
              <FontAwesome name="clock-o" size={12} color="#757575" style={styles.dateIcon} />
              <Text style={styles.date}>Starts on {test.date}</Text>
            </View>
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#f9f9f9' }]}>
              <FontAwesome name="bell" size={14} color="#000" />
              <Text style={styles.actionText}>Set Reminder</Text>
            </TouchableOpacity>
          </>
        );

      case 'Past':
        return (
          <>
            <View style={styles.reminderContainer}>
              <FontAwesome name="check-circle" size={12} color="#757575" style={styles.dateIcon} />
              <Text style={styles.date}>Completed on {test.date}</Text>
            </View>
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#f9f9f9' }]}>
              <FontAwesome name="file-text-o" size={14} color="#000" />
              <Text style={styles.actionText}>View Results</Text>
            </TouchableOpacity>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{test.title}</Text>
      <Text style={styles.details}>
        {test.subject} • {test.duration}
      </Text>
      {renderActionButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#212121',
  },
  details: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  reminderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateIcon: {
    marginRight: 5,
  },
  date: {
    fontSize: 12,
    color: '#757575',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 5,
  },
  actionText: {
    color: '#000',
    fontSize: 14,
    marginLeft: 5,
    fontWeight: '500',
  },
});

export default TestItem;
