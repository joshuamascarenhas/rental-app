import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, IconButton, useTheme } from 'react-native-paper';
import { useFavorites } from '../context/FavoritesContext';

export default function PropertyDetailsScreen({ route }) {
  const { property } = route.params;
  const { colors } = useTheme();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(property.id);

  const toggleFavorite = () => {
    if (favorite) removeFavorite(property.id);
    else addFavorite(property);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{property.title}</Text>
      <Text style={[styles.text, { color: colors.text }]}>Location: {property.location}</Text>
      <Text style={[styles.text, { color: colors.text }]}>Rent: ${property.rent}</Text>
      <Text style={[styles.text, { color: colors.text }]}>Safety Score: {property.safetyScore}</Text>
      <Text style={[styles.text, { color: colors.text }]}>
        Verification Status: {property.verified ? 'Verified' : 'Not Verified'}
      </Text>

      <Button
        mode={favorite ? 'contained' : 'outlined'}
        icon={favorite ? 'heart' : 'heart-outline'}
        onPress={toggleFavorite}
        style={styles.button}
        labelStyle={{ color: favorite ? 'white' : colors.primary }}
      >
        {favorite ? 'Unlike' : 'Like'}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  text: { fontSize: 16, marginBottom: 8 },
  button: { marginTop: 24, alignSelf: 'center', minWidth: 150 },
});
