// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import MaterialCard from './MaterialCard';
// import { Material } from '../../types/Material';

// interface Props {
//   category: string;
//   materials: Material[];
// }

// const MaterialCategory: React.FC<Props> = ({ category, materials }) => (
//   <View style={styles.container}>
//     <Text style={styles.heading}>{category}</Text>
//     {materials.map((mat) => (
//       <MaterialCard
//         key={mat.id}
//         title={mat.title}
//         count={mat.count}
//         icon={mat.icon}
//       />
//     ))}
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 24,
//   },
//   heading: {
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 12,
//   },
// });

// export default MaterialCategory;

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MaterialCard from './MaterialCard';
import { Material } from '../../types/Material';
import { Link } from 'expo-router';

interface Props {
  category: string;
  materials: Material[];
}

const MaterialCategory: React.FC<Props> = ({ category, materials }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>{category}</Text>

    {materials.map((mat) => (
      <Link
        key={mat.id}
        href={`/material/${mat.id}`}
        asChild
      >
        <Pressable>
          <MaterialCard
            title={mat.title}
            count={mat.count}
            icon={mat.icon}
          />
        </Pressable>
      </Link>
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
