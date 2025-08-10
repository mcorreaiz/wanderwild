import { ScrollView, StyleSheet } from 'react-native';
import OptionCard from '../components/OptionCard';

const options = [
  { image: require('../assets/card1.jpg'), text: 'Golf at Pine Valley' },
  { image: require('../assets/card2.jpg'), text: 'Fishing at Lakeview' },
  // Add more cards as needed
];

export default function OptionsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {options.map((opt, idx) => (
        <OptionCard key={idx} image={opt.image} text={opt.text} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
});
