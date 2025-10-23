import React from 'react';
import { ScrollView, StyleSheet, Linking, Alert } from 'react-native';
import { List, Divider, Text, useTheme } from 'react-native-paper';

export default function LegalScreen() {
  const { colors } = useTheme();

  const openLink = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open link: ${url}`);
      }
    });
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.primary }]}>Legal</Text>
      <Divider style={styles.divider} />
      <List.Section>
        <List.Item
          title="Terms of Service"
          left={(props) => <List.Icon {...props} icon="file-document-outline" />}
          onPress={() => openLink('https://example.com/terms')}
        />
        <List.Item
          title="Privacy Policy"
          left={(props) => <List.Icon {...props} icon="shield-lock-outline" />}
          onPress={() => openLink('https://example.com/privacy')}
        />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  divider: { marginVertical: 10 },
});
