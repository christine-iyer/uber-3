import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, View, ActivityIndicator, Text } from 'react-native';

export default function Home() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true);
      router.replace('/(auth)/welcome'); // Redirect after delay
    }, 100); // Small delay ensures layout is mounted

    return () => clearTimeout(timeout);
  }, []);

  if (!ready) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'PlusJakartaSans-ExtraBoldItalic' }}>You're home!</Text>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  return null; // Nothing is displayed since it redirects
}
