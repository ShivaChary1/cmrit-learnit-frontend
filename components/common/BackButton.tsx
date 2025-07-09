import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <Feather name="arrow-left" size={24} color="#333" />
      </Pressable>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  backButton: {
    padding: 0,
  },
});