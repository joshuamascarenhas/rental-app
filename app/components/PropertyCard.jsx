import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function PropertyCard({ property, onPress }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: '#1E1E1E', borderColor: '#FF4081' }]} onPress={onPress}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: '#FF4081' }]} numberOfLines={1}>
          {property.title}
        </Text>
        {property.verified && <Text style={styles.verified}>✅ Verified</Text>}
      </View>
      <Text style={[styles.detail, { color: '#FFFFFF' }]}>Location: {property.location}</Text>
      <Text style={[styles.detail, { color: '#FF80AB' }]}>Rent: ${property.rent}</Text>
      <Text style={[styles.detail, { color: '#FF4081' }]}>Safety Score: {property.safetyScore}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },
  verified: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 15,
    marginBottom: 4,
  },
});
