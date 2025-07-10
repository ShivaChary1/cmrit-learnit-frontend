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


// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';

// interface Props {
//   title: string;
//   count: number;
//   icon: string;
//   onPress: () => void;
// }

// const MaterialCard: React.FC<Props> = ({ title, count, icon, onPress }) => (
//   <Pressable style={styles.card} onPress={onPress}>
//     <Text style={styles.icon}>{icon}</Text>
//     <View style={styles.textContainer}>
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
//     padding: 16,
//     borderRadius: 12,
//     height: 100, // Fixed height for grid uniformity
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 4,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   icon: {
//     fontSize: 28,
//     marginRight: 12,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333', // Near-black
//   },
//   count: {
//     fontSize: 13,
//     color: '#666', // Lighter gray for subtext
//     marginTop: 4,
//   },
// });

// export default MaterialCard;