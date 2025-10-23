import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Title, HelperText, useTheme } from 'react-native-paper';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

export default function RegisterScreen({ navigation }) {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = () => /\S+@\S+\.\S+/.test(email);
  const validatePasswords = () => password && password === confirmPassword && password.length >= 6;

  const handleRegister = async () => {
    if (!validateEmail()) {
      setError('Please enter a valid email address');
      return;
    }
    if (!validatePasswords()) {
      setError('Passwords must match and be at least 6 characters');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={[styles.container, { backgroundColor: colors.background }]}>
      <Title style={[styles.title, { color: colors.primary }]}>Create Your Account</Title>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        error={error && !validateEmail()}
        left={<TextInput.Icon name="email" />}
        placeholderTextColor={colors.placeholder}
      />
      <HelperText type="error" visible={error && !validateEmail()}>
        Invalid email address
      </HelperText>

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon name="lock" />}
        placeholderTextColor={colors.placeholder}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon name="lock-check" />}
        placeholderTextColor={colors.placeholder}
      />

      {!!error && <Text style={[styles.errorText, { color: colors.error }]}>{error}</Text>}

      <Button mode="contained" onPress={handleRegister} loading={loading} disabled={loading} style={styles.button}>
        Register
      </Button>

      <Button onPress={() => navigation.navigate('Login')} compact style={styles.link}>
        Already have an account? Login
      </Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  input: { marginBottom: 10 },
  button: { marginTop: 10 },
  link: { marginTop: 20, alignSelf: 'center' },
  errorText: { marginBottom: 10, textAlign: 'center' },
});
