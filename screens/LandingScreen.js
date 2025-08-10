import { useRouter } from 'expo-router';
import React from 'react';

import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LandingScreen() {

  const router = useRouter();
  return (
    <ImageBackground source={require('../assets/images/background.jpg')} style={styles.bg}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate('Selection')}>
          <Text style={styles.buttonText}>PLAN MY WEEKEND</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'flex-end' },
  buttonContainer: { padding: 32 },
  button: { backgroundColor: '#2e7d32', padding: 18, borderRadius: 30, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
