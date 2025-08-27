import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface SelectionChipProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const SelectionChip: React.FC<SelectionChipProps> = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.chip, selected && styles.selected]}
      onPress={onPress}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginRight: 12,
  },
  selected: {
    backgroundColor: '#2e7d32',
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
});

export default SelectionChip;
