import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const backgroundImg = require('../assets/images/wanderwild-landing.jpg');

const LandingScreen: React.FC = () => {
  return (
    <ImageBackground source={backgroundImg} style={styles.bg}>
      <View style={styles.buttonContainer}>
        <Link href="/selection" asChild={true}>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>PLAN MY WEEKEND</Text>
            </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'flex-end' },
  buttonContainer: { padding: 32 },
  button: { backgroundColor: '#2e7d32', padding: 18, borderRadius: 30, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default LandingScreen;
