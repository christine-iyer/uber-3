import { useSignIn } from '@clerk/clerk-expo'; // ✅ Import useSignIn from Clerk
import { useRouter } from 'expo-router';
import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, ActivityIndicator } from 'react-native';
import { typography } from 'styles/typography';

import CustomButton from '../../components/CustomButton';

export default function SignInScreen() {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in both email and password.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    if (!validateForm()) return;

    setLoading(true);
    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/(root)/(tabs)/home');
      } else {
        console.log(JSON.stringify(signInAttempt, null, 2));
        Alert.alert('Error', 'Log in failed. Please try again.');
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      const errorMessage =
        err?.errors?.[0]?.longMessage || 'An unexpected error occurred. Please try again.';
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  }, [isLoaded, form]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In Here</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        secureTextEntry
      />

      {/* Loading Indicator */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <CustomButton
          title="Sign In"
          bgVariant="primary"
          textVariant="default"
          onPress={onSignInPress}
        />
      )}

      {/* 🔙 Back Button */}
      <CustomButton
        title="Back"
        bgVariant="secondary"
        textVariant="secondary"
        onPress={() => router.back()}
      />

      {/* 🏠 Go to Home */}
      <CustomButton
        title="Go to Home"
        bgVariant="success"
        textVariant="default"
        onPress={() => router.replace('/(root)/(tabs)/home')}
      />
    </View>
  );
}

// ✅ Styles for the Sign-In Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    marginBottom: 20,
    fontSize: 24,
    fontFamily: typography.JakartaExtraBold,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});
