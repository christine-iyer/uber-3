\import { useUser } from '@clerk/clerk-expo';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';

export default function Home() {
  const { isSignedIn, isLoaded, user } = useUser();

  if (!isLoaded) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Checking sign-in status...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isSignedIn ? (
        <Text>Welcome, {user?.fullName}!</Text>
      ) : (
        <Text>Please Sign In</Text>
      )}
    </SafeAreaView>
  );
}
