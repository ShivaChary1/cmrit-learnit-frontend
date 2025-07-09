//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const StudyMaterial = () => {
    return (
        <View style={styles.container}>
            <Text>StudyMaterial</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Changed to a dark color for better contrast
    },
});

//make this component available to the app
export default StudyMaterial;
