import { useUser, useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { SafeAreaView, Text, ActivityIndicator, Button } from 'react-native';

export default function Home() {
  const router = useRouter();
  const { isSignedIn, isLoaded, user } = useUser();
  const { signOut } = useAuth(); // Import signOut function

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
        <>
          <Text>Welcome, {user?.fullName || 'No Name Found'}!</Text>
          <Text>Email: {user?.primaryEmailAddress?.emailAddress || 'No Email'}</Text>

          {/* Logout Button */}
          <Button
            title="Logout"
            onPress={() => {
              signOut();
              router.replace('/login'); // Replace with your login screen route
            }}
          />
        </>
      ) : (
        <Text>Please Sign In</Text>
      )}
    </SafeAreaView>
  );
}
