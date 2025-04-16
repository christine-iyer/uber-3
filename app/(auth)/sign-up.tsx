// const [emailAddress, setEmailAddress] = React.useState('');
// const [password, setPassword] = React.useState('');
// const [username, setUserName] = React.useState('');

import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { typography } from 'styles/typography';

import CustomButton from '../../components/CustomButton';

export default function SignUpScreen() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const onSignUpPress = () => {
    setLoading(true);

    // Simulate a delay for loading (optional)
    setTimeout(() => {
      setLoading(false);
      router.replace('/(root)/(tabs)/home'); // Navigate to the home page
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up Here</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={form.username}
        onChangeText={(text) => setForm((prev) => ({ ...prev, username: text }))}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        secureTextEntry
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <CustomButton
          title="Sign Up"
          bgVariant="primary"
          textVariant="default"
          onPress={onSignUpPress}
        />
      )}

      <CustomButton
        title="Back"
        bgVariant="secondary"
        textVariant="secondary"
        onPress={() => router.back()}
      />
    </View>
  );
}

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
