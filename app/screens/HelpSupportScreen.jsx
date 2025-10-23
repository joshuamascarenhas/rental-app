import React from 'react';
import { ScrollView, StyleSheet, Linking, Alert } from 'react-native';
import { List, Divider, Text, useTheme } from 'react-native-paper';

export default function HelpSupportScreen() {
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
      <Text style={[styles.header, { color: colors.primary }]}>Help & Support</Text>
      <Divider style={styles.divider} />
      <List.Section>
        <List.Item
          title="FAQs"
          description="Frequently Asked Questions"
          left={(props) => <List.Icon {...props} icon="help-circle-outline" />}
          onPress={() => openLink('https://example.com/faqs')}
        />
        <List.Item
          title="Contact Support"
          description="Reach out via email"
          left={(props) => <List.Icon {...props} icon="email-outline" />}
          onPress={() => openLink('mailto:support@saferental.com')}
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
