import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🏚️</Text>
      <Button title="➡ to Chat" onPress={() => router.push('/(root)/(tabs)/chat')} />
      <Button title="🔙 Home" onPress={() => router.back()} />
    </View>
  );
}
