import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import OptionCard from '../components/OptionCard';

const options = [
  { image: require('../assets/images/golf.jpg'), text: 'Golf at Pine Valley' },
  { image: require('../assets/images/rainier.jpg'), text: 'Fishing at Lakeview' },
  // Add more cards as needed
];

const OptionsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {options.map((opt, idx) => (
          <OptionCard key={idx} image={opt.image} text={opt.text} />
        ))}
      </ScrollView>
      <Link href="/map" asChild>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>View Campsites on Map</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  mapButton: {
    backgroundColor: '#2e7d32',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 16,
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OptionsScreen;
