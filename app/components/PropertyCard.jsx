import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PropertyCard({ property, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{property.title}</Text>
        {property.verified && <Text style={styles.verifiedBadge}>✅ Verified</Text>}
      </View>
      <Text style={styles.detail}>Rent: ${property.rent} / month</Text>
      <Text style={styles.detail}>Location: {property.location}</Text>
      <Text style={styles.safetyScore}>Safety Score: {property.safetyScore}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#1E1E1E',
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  title: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  verifiedBadge: { color: '#4CAF50', fontWeight: 'bold' },
  detail: { color: '#ccc', marginVertical: 2 },
  safetyScore: { marginTop: 6, fontWeight: 'bold', color: '#FF4081' },
});
