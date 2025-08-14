import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import OptionCard from '../components/OptionCard';

const options = [
  { image: require('../assets/images/golf.jpg'), text: 'Golf at Pine Valley' },
  { image: require('../assets/images/rainier.jpg'), text: 'Fishing at Lakeview' },
  // Add more cards as needed
];

const OptionsScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {options.map((opt, idx) => (
        <OptionCard key={idx} image={opt.image} text={opt.text} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
});

export default OptionsScreen;
