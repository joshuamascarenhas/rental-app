import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

export default function Header({ title, navigation, back }) {
  const { colors } = useTheme();

  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} titleStyle={{ color: 'white' }} />
    </Appbar.Header>
  );
}
