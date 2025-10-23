import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import PropertyCard from '../components/PropertyCard';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  const handlePress = (property) => {
    navigation.navigate('PropertyDetails', { property });
  };

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PropertyCard property={item} onPress={() => handlePress(item)} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  emptyText: { color: 'gray', textAlign: 'center', marginTop: 20 },
});
