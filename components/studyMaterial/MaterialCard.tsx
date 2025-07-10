// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';

// interface Props {
//   title: string;
//   count: number;
//   icon: string;
// }

// const MaterialCard: React.FC<Props> = ({ title, count, icon }) => (
//   <Pressable style={styles.card}>
//     <Text style={styles.icon}>{icon}</Text>
//     <View>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.count}>{count} materials</Text>
//     </View>
//   </Pressable>
// );

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 10,

//     // subtle shadow and border
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,

//     borderWidth: 1,
//     borderColor: '#f0f0f0',
//   },
//   icon: {
//     fontSize: 26,
//     marginRight: 12,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   count: {
//     fontSize: 13,
//     color: '#666',
//   },
// });

// export default MaterialCard;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  count: number;
  icon: string;
}

const MaterialCard: React.FC<Props> = ({ title, count, icon }) => (
  <View style={styles.card}>
    <Text style={styles.icon}>{icon}</Text>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count} materials</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  icon: {
    fontSize: 26,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  count: {
    fontSize: 13,
    color: '#666',
  },
});

export default MaterialCard;
