import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

import CustomButton from '../components/CustomButton'; // ✅ Import CustomButton

export default function SignInScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In Here</Text>

      {/* 🔙 Back Button */}
      <CustomButton
        title="🔙 Back"
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
