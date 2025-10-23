import React from 'react';
import { FavoritesProvider } from './app/context/FavoritesContext';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './app/navigation/AppNavigator';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <FavoritesProvider>
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <AppNavigator />
      </PaperProvider>
    </FavoritesProvider>
  );
}
