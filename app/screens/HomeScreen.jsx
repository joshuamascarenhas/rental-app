import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import PropertyCard from '../components/PropertyCard';

const sampleProperties = [
  {
    id: '1',
    title: 'Spacious 2BHK Apartment',
    rent: 1200,
    location: 'Downtown',
    safetyScore: 85,
    verified: true,
  },
  {
    id: '2',
    title: 'Cozy Studio Apartment',
    rent: 800,
    location: 'Suburbs',
    safetyScore: 72,
    verified: false,
  },
];

export default function HomeScreen({ navigation }) {
  const renderProperty = ({ item }) => (
    <PropertyCard property={item} onPress={() => navigation.navigate('PropertyDetails', { property: item })} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Verified Rentals Near You</Text>
      <FlatList
        data={sampleProperties}
        keyExtractor={(item) => item.id}
        renderItem={renderProperty}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#121212' },
  heading: { fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 16 },
});
