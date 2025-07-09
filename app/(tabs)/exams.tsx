//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Exam = () => {
    return (
        <View style={styles.container}>
            <Text>Exam</Text>
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
export default Exam;
