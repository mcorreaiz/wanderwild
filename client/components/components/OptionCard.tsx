import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

export interface OptionCardProps {
  image: ImageSourcePropType;
  text: string;
}

const OptionCard: React.FC<OptionCardProps> = ({ image, text }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 160,
  },
  textContainer: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OptionCard;
