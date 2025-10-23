import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Text, List, Divider, Switch, useTheme } from 'react-native-paper';
import { auth } from '../config/firebaseConfig';

export default function ProfileScreen() {
  const { colors } = useTheme();
  const user = auth.currentUser;

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Placeholder: no navigation or alert on toggle
  };

  const clearAppData = () => {
    // Placeholder: no action for clear data
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* User Info Header */}
      <View style={styles.header}>
        <Avatar.Text
          size={80}
          label={user?.email?.[0]?.toUpperCase() || 'U'}
          style={{ backgroundColor: colors.primary }}
        />
        <Text style={[styles.email, { color: colors.text }]}>{user?.email || 'No email available'}</Text>
      </View>

      <List.Section>
        {/* Help & Support */}
        <List.Subheader style={{ color: colors.text }}>Help & Support</List.Subheader>
        <List.Item
          title="FAQs"
          description="Frequently Asked Questions"
          left={(props) => <List.Icon {...props} icon="help-circle-outline" />}
          // No onPress
        />
        <List.Item
          title="Contact Support"
          description="support@saferental.com"
          left={(props) => <List.Icon {...props} icon="email-outline" />}
          // No onPress
        />

        <Divider style={styles.divider} />

        {/* Legal */}
        <List.Subheader style={{ color: colors.text }}>Legal</List.Subheader>
        <List.Item
          title="Terms of Service"
          left={(props) => <List.Icon {...props} icon="file-document-outline" />}
          // No onPress
        />
        <List.Item
          title="Privacy Policy"
          left={(props) => <List.Icon {...props} icon="shield-lock-outline" />}
          // No onPress
        />

        <Divider style={styles.divider} />

       
        <List.Item
          title="Clear App Data"
          description="Remove all saved data"
          left={(props) => <List.Icon {...props} icon="delete-outline" />}
          // No onPress
        />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: { alignItems: 'center', marginBottom: 20 },
  email: { marginTop: 8, fontSize: 18, fontWeight: '600' },
  divider: { marginVertical: 10 },
});
