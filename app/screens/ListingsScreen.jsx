import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button, Menu, ActivityIndicator } from 'react-native-paper';
import PropertyCard from '../components/PropertyCard';

const categories = ['All', 'Verified', 'Safety > 80', 'Rent < 1000'];
const sampleProperties = [
  { id: '1', title: 'Downtown 2BHK', rent: 1200, verified: true, safetyScore: 85, location: 'Downtown' },
  { id: '2', title: 'Suburban Studio', rent: 800, verified: false, safetyScore: 72, location: 'Suburbs' },
  { id: '3', title: 'Uptown Family', rent: 900, verified: true, safetyScore: 90, location: 'Uptown' },
];

export default function ListingsScreen({ navigation }) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProperties, setFilteredProperties] = useState(sampleProperties);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let filtered = sampleProperties;
    if (selectedCategory === 'Verified') {
      filtered = sampleProperties.filter(p => p.verified);
    } else if (selectedCategory === 'Safety > 80') {
      filtered = sampleProperties.filter(p => p.safetyScore > 80);
    } else if (selectedCategory === 'Rent < 1000') {
      filtered = sampleProperties.filter(p => p.rent < 1000);
    }
    setTimeout(() => {
      setFilteredProperties(filtered);
      setLoading(false);
    }, 500);
  }, [selectedCategory]);

  const handlePress = (property) => {
    navigation.navigate('PropertyDetails', { property });
  };

  return (
    <View style={styles.container}>
      <Menu
        visible={filterVisible}
        onDismiss={() => setFilterVisible(false)}
        anchor={
          <Button mode="outlined" onPress={() => setFilterVisible(true)} style={styles.filterButton}>
            Filter: {selectedCategory}
          </Button>
        }
      >
        {categories.map(cat => (
          <Menu.Item
            key={cat}
            onPress={() => { setSelectedCategory(cat); setFilterVisible(false); }}
            title={cat}
          />
        ))}
      </Menu>

      {loading ? (
        <ActivityIndicator animating={true} size="large" color="#FF4081" style={{ marginTop: 30 }} />
      ) : filteredProperties.length ? (
        <FlatList
          data={filteredProperties}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <PropertyCard property={item} onPress={() => handlePress(item)} />}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      ) : (
        <Text style={{ marginTop: 20, textAlign: 'center', color: 'gray' }}>No properties found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#121212' },
  filterButton: { marginBottom: 10, alignSelf: 'center' },
});
