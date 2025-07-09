import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Header from '@/components/common/Header';
import Foundation from '@expo/vector-icons/Foundation';
const TabsLayout = () => {
    return (
        <Tabs
            initialRouteName="index"
            backBehavior="history"
            screenOptions={{
                headerShown: true,
                header : () => ( <Header/>),
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#B2BEB5',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderWidth: 0,
                    borderTopWidth: 0,
                    height: 30,
                    paddingTop: 10, // Remove top padding to lift icons
                    paddingBottom: 85, // Reduce bottom padding to lift icons
                },
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0, // Remove shadow on Android
                    shadowOpacity: 0, // Remove shadow on iOS
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    animation: 'fade',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} style={{ marginBottom: -5 }} />
                    ),
                }}
            />
            <Tabs.Screen
                name="exams"
                options={{
                    title: 'Exams',
                    animation: 'fade',
                    tabBarIcon: ({ color }) => (
                        <Foundation name="clipboard-pencil" size={24} color={color} />),
                }}
            />
            <Tabs.Screen
                name="study-material"
                options={{
                    title: 'Study-Material',
                    animation: 'fade',
                    tabBarIcon: ({ color }) => (
                        <Feather name="book" size={24} color={color} style={{ marginBottom: -5 }} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    animation: 'fade',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color={color} style={{ marginBottom: -5 }} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;