//import liraries
import HomeScreen from '@/components/Home/HomeScreen';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <HomeScreen/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Optional: Set a background color

    },
});

//make this component available to the app
export default Home;
