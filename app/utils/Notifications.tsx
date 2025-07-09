// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Feather } from '@expo/vector-icons';
// import Entypo from '@expo/vector-icons/Entypo';
// import BackButton from '@/components/common/BackButton';

// // create a component
// const Notifications = () => {
//   const [notifications, setNotifications] = useState([
//     { id: 1, message: 'Data Structures Midterm tomorrow at 10:00 AM', time: '2 hours ago', read: false },
//     { id: 2, message: 'New study material: Advanced Algorithms Notes', time: '4 hours ago', read: false },
//     { id: 3, message: 'Complete Database Systems assignment', time: '1 day ago', read: false },
//   ]);

//   const markAsRead = (id: number) => {
//     setNotifications(notifications.map(n => 
//         n.id === id ? { ...n, read: true } : n
//     ));
//     };


//   const deleteAllNotifications = () => {
//     setNotifications([]);
//   };

//   const unreadCount = notifications.filter(n => !n.read).length;

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//        <Text style={styles.notificationsTitle}> 
//         <BackButton/>  Notifications</Text>
//         <View style={styles.badgeContainer}>
//           {unreadCount > 0 && (
//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>{unreadCount}</Text>
//             </View>
//           )}
//         </View>
//       </View>
//       <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.content}>
//           {notifications.map((notification) => (
//             <Pressable key={notification.id} onPress={() => markAsRead(notification.id)} style={styles.notificationItem}>
//               <View style={styles.iconWrapper}>
//                 <Entypo name="dot-single" size={42} color={notification.read ? "black" : "red"} />
//               </View>
//               <View style={styles.messageWrapper}>
//                 <Text style={[styles.notificationMessage, notification.read && styles.readMessage]}>
//                   {notification.message}
//                 </Text>
//                 <Text style={styles.notificationTime}>{notification.time}</Text>
//               </View>
//             </Pressable>
//           ))}
//         </View>
//       </ScrollView>
//       <View style={styles.notificationsHeader}>
//         <Pressable onPress={deleteAllNotifications}>
//           <Text style={styles.deleteAll}>Delete All Notifications</Text>
//         </Pressable>
//       </View>
//     </SafeAreaView>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   notificationsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   badgeContainer: {
//     position: 'relative',
//   },
//   badge: {
//     position: 'absolute',
//     top: -8,
//     right: -8,
//     backgroundColor: 'red',
//     borderRadius: 8,
//     paddingHorizontal: 4,
//     paddingVertical: 1,
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: 10,
//     textAlign: 'center',
//   },
//   notificationsHeader: {
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//   },
//   deleteAll: {
//     color: '#FF2D55', // Reddish color for delete action
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   container: {
//     padding: 10,
//   },
//   content: {
//     flexGrow: 1,
//   },
//   notificationItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   iconWrapper: {
//     marginRight: 10,
//   },
//   messageWrapper: {
//     flex: 1,
//   },
//   notificationMessage: {
//     fontSize: 14,
//     color: '#333',
//   },
//   readMessage: {
//     color: '#666',
//   },
//   notificationTime: {
//     fontSize: 12,
//     color: '#666',
//   },
// });

// //make this component available to the app
// export default Notifications;



import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import BackButton from '@/components/common/BackButton';

// create a component
const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Data Structures Midterm tomorrow at 10:00 AM', time: '2 hours ago', read: false },
    { id: 2, message: 'New study material: Advanced Algorithms Notes', time: '4 hours ago', read: false },
    { id: 3, message: 'Complete Database Systems assignment', time: '1 day ago', read: false },
  ]);

  const markAsRead = (id: any) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const deleteAllNotifications = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.notificationsTitle}>Notifications</Text>
        <View style={styles.badgeContainer}>
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          {notifications.map((notification) => (
            <Pressable key={notification.id} onPress={() => markAsRead(notification.id)} style={styles.notificationItem}>
              <View style={styles.iconWrapper}>
                <Entypo name="dot-single" size={42} color={notification.read ? "black" : "red"} />
              </View>
              <View style={styles.messageWrapper}>
                <Text style={[styles.notificationMessage, notification.read && styles.readMessage]}>
                  {notification.message}
                </Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={styles.notificationsHeader}>
        <Pressable onPress={deleteAllNotifications}>
          <Text style={styles.deleteAll}>Delete All Notifications</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  notificationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Allows title to take available space
    textAlign: 'center', // Centers the title if desired
  },
  badgeContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
  notificationsHeader: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  deleteAll: {
    color: '#FF2D55',
    fontSize: 14,
    textAlign: 'center',
  },
  container: {
    padding: 10,
  },
  content: {
    flexGrow: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconWrapper: {
    marginRight: 10,
  },
  messageWrapper: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#333',
  },
  readMessage: {
    color: '#666',
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
  },
});

//make this component available to the app
export default Notifications;