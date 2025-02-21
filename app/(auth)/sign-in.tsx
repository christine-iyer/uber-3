import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function SignInScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign In Here</Text>
      <Button title="🔙" onPress={() => router.back()} />
      <Button title="Go to Home" onPress={() => router.replace('/(root)/(tabs)/home')} />
    </View>
  );
}
