import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign Up Here</Text>
      <Button title="Complete Sign Up" onPress={() => router.replace('/(auth)/welcome')} />
    </View>
  );
}
