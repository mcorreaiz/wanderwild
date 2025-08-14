import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface BulletSelectionProps {
  options: string[];
  selected: string[];
  onSelect: (option: string) => void;
}

const BulletSelection: React.FC<BulletSelectionProps> = ({ options, selected, onSelect }) => {
  return (
    <View style={styles.container}>
      {options.map(opt => (
        <TouchableOpacity key={opt} style={styles.row} onPress={() => onSelect(opt)}>
          <View style={[styles.bullet, selected.includes(opt) && styles.selectedBullet]} />
          <Text style={styles.text}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 12 },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 6 },
  bullet: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#2e7d32',
    marginRight: 12,
    backgroundColor: '#fff',
  },
  selectedBullet: {
    backgroundColor: '#2e7d32',
  },
  text: { fontSize: 16 },
});

export default BulletSelection;
