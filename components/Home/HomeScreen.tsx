// import { SafeAreaView } from 'react-native-safe-area-context';
// import { ScrollView, StyleSheet } from 'react-native';
// import Header from '../common/Header';
// import Greeting from './Greeting';
// import FeatureGrid from './FeatureGrid';
// import UpcomingTests from './UpcomingTests';
// import RecentMaterials from './RecentMaterials';

// export default function HomeScreen() {
//   return (
//     <SafeAreaView style={styles.safe}>
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* <Header /> */}
//         <Greeting />
//         <FeatureGrid />
//         <UpcomingTests />
//         <RecentMaterials />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: '#fff000',
//     paddingTop: 0,
//     paddingBottom: 0,
//   },
//   container: {
//     paddingLeft: 16,
//     paddingRight: 16,
//   },
// });

import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet } from 'react-native';
import Greeting from './Greeting';
import FeatureGrid from './FeatureGrid';
import UpcomingTests from './UpcomingTests';
import RecentMaterials from './RecentMaterials';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['right', 'left']}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Header /> */}
        <Greeting />
        <FeatureGrid />
        <UpcomingTests />
        <RecentMaterials />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0, // Added to ensure no top margin
    marginBottom: 0, // Added to ensure no bottom margin
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0, // Added to remove any top padding in container
    paddingBottom: 0, // Added to remove any bottom padding in container
  },
});