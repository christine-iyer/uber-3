import InputField from 'components/InputField';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

import CustomButton from '../../components/CustomButton'; // ✅ Import CustomButton

export default function SignInScreen() {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/(root)/(tabs)/home');
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
        console.log(JSON.stringify(signInAttempt, null, 2));
        Alert.alert('Error', 'Log in failed. Please try again.');
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert('Error', err.errors[0].longMessage);
    }
  }, [isLoaded, form]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In Here</Text>

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
});
