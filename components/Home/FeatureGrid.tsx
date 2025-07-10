// // components/FeatureGrid.tsx
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
// import { Link } from 'expo-router';

// const features = [
//   { icon: <Feather name="book" size={24} color="#555" />, title: 'Study Materials', desc: 'Access all your course materials' },
//   { icon: <FontAwesome5 name="clipboard-list" size={24} color="#555" />, title: 'Tests', desc: 'Take tests and view results' },
//   { icon: <Feather name="calendar" size={24} color="#555" />, title: 'Schedule', desc: 'View your class schedule' },
//   { icon: <MaterialIcons name="trending-up" size={24} color="#555" />, title: 'Progress', desc: 'Track your performance' },
// ];

// const FeatureGrid: React.FC = () => {
//   return (
//     <View style={styles.grid}>
//       {features.map((item, index) => (
//         <Link 
//           key={index}
//           href='/(tabs)/study-material'
//           style={styles.card}>
//             <TouchableOpacity key={index} style={styles.card}>
//           <View style={styles.icon}>{item.icon}</View>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.desc}>{item.desc}</Text>
//         </TouchableOpacity>
//           </Link>
//       ))}
//     </View>
//   );
// };

// export default FeatureGrid;

// const styles = StyleSheet.create({
//   grid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginVertical: 16,
//   },
//   card: {
//     width: '48%',
//     backgroundColor: '#f9f9f9',
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 16,
//   },
//   icon: {
//     marginBottom: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 14,
//     marginBottom: 4,
//   },
//   desc: {
//     color: '#666',
//     fontSize: 12,
//   },
// });

// components/FeatureGrid.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons, Foundation } from '@expo/vector-icons';
import { Link } from 'expo-router';

const features = [
  { icon: <Feather name="book" size={28} color="#555" />, title: 'Study Materials', desc: 'Access all your course materials', href: '/(tabs)/study-material' },
  { icon: <Foundation name="clipboard-pencil" size={24} color="#555" />, title: 'Tests', desc: 'Take tests and view results', href: '/(tabs)/exams' },
  { icon: <Feather name="calendar" size={28} color="#555" />, title: 'Schedule', desc: 'View your class schedule', href: '#' },
  { icon: <MaterialIcons name="trending-up" size={28} color="#555" />, title: 'Progress', desc: 'Track your performance', href: '#' },
];

const FeatureGrid: React.FC = () => {
  return (
    <View style={styles.grid}>
      {features.map((item, index) => (
        <Link key={index} href='/(tabs)/study-material' asChild>
          <TouchableOpacity style={styles.card}>
            <View style={styles.icon}>{item.icon}</View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
};

export default FeatureGrid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginBottom: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 6,
    color: '#333',
  },
  desc: {
    color: '#666',
    fontSize: 12,
  },
});
