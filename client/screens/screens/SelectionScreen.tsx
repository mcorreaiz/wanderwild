import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BulletSelection from '../../components/components/BulletSelection';
import SelectionChip from '../../components/components/SelectionChip';

const SelectionScreen: React.FC = () => {
  const [duration, setDuration] = useState<string>('2 hrs');
  const [type, setType] = useState<string>('car');
  const [activities, setActivities] = useState<string[]>(['golf']);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Duration</Text>
      <View style={styles.chipRow}>
        <SelectionChip label="2 hrs" selected={duration === '2 hrs'} onPress={() => setDuration('2 hrs')} />
        <SelectionChip label="2-3 hrs" selected={duration === '2-3 hrs'} onPress={() => setDuration('2-3 hrs')} />
        <SelectionChip label="3+ hrs" selected={duration === '3+ hrs'} onPress={() => setDuration('3+ hrs')} />
      </View>

      <Text style={styles.label}>Type</Text>
      <View style={styles.chipRow}>
        <SelectionChip label="car" selected={type === 'car'} onPress={() => setType('car')} />
        <SelectionChip label="tent" selected={type === 'tent'} onPress={() => setType('tent')} />
        <SelectionChip label="RV" selected={type === 'RV'} onPress={() => setType('RV')} />
      </View>

      <Text style={styles.label}>Activity</Text>
      <BulletSelection
        options={["golf", "fishing", "hiking", "lake", "hunting", "shellfishing"]}
        selected={activities}
        onSelect={(option: string) => {
          setActivities(prev =>
            prev.includes(option)
              ? prev.filter(a => a !== option)
              : [...prev, option]
          );
        }}
      />

      <View style={styles.buttonContainer}>
        <Link href="/options" asChild={true}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LET'S GO WILD</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  label: { fontSize: 18, fontWeight: 'bold', marginTop: 24 },
  chipRow: { flexDirection: 'row', marginVertical: 12 },
  buttonContainer: { flex: 1, justifyContent: 'flex-end', marginBottom: 32 },
  button: { backgroundColor: '#2e7d32', padding: 18, borderRadius: 30, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default SelectionScreen;
