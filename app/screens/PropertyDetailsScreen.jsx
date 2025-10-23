import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PropertyDetailsScreen({ route }) {
  const { property } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{property.title}</Text>
      <Text style={styles.text}>Location: {property.location}</Text>
      <Text style={styles.text}>Rent: ${property.rent}</Text>
      <Text style={styles.text}>Safety Score: {property.safetyScore}</Text>
      <Text style={styles.text}>Verification Status: {property.verified ? 'Verified' : 'Not Verified'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, color: 'white' },
  text: { color: 'white', marginBottom: 8 },
});
