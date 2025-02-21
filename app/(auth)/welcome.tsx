import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome Here for a Clone Ride</Text>
      <Button title="➡ to Sign In" onPress={() => router.push('/(auth)/sign-in')} />
      <Button title="➡ to Sign Up" onPress={() => router.push('/(auth)/sign-up')} />
    </View>
  );
}
