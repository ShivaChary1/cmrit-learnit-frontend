// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// interface TabBarProps {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }

// const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab }) => {
//   const tabs = ['Available', 'Upcoming', 'Past'];

//   return (
//     <View style={styles.tabContainer}>
//       {tabs.map(tab => (
//         <TouchableOpacity
//           key={tab}
//           style={[styles.tab, activeTab == tab ? styles.tabActive : {}, activeTab === tab && styles.activeTab]}
//           onPress={() => setActiveTab(tab)}
//         >
//         <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 15,
//     borderRadius: 5,
//     backgroundColor: '#f5f5f5',
//     padding: 5
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   tabActive:{
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   activeTab: {
//     borderColor: '#000',
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   activeTabText: {
//     color: '#000',
//     fontWeight: 'bold',
//   },
// });

// export default TabBar;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['Available', 'Upcoming', 'Past'];

  return (
    <View style={styles.tabContainer}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === tab && styles.tabActive
          ]}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    padding: 5,
  },
  tab: {
    flex: 1, // Equal space for each tab
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tabActive: {
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default TabBar;
