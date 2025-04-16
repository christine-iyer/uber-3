import { useRouter } from 'expo-router';
import { SafeAreaView, Text, Button, StyleSheet, LogBox } from 'react-native';

import { typography } from '../styles/typography.js';

export default function Home() {
  // Ignore specific warnings
  LogBox.ignoreLogs(['props.pointerEvents is deprecated']);
  const router = useRouter();

  // Function to navigate to the "Find Ride" page
  const navigateToFindRide = () => {
    console.log('Button Pressed');
    console.log('Navigating to Find Ride'); // Debug log
    router.push('/(root)/find-ride');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>
      <Button title="Go to Find Ride" onPress={navigateToFindRide} />
      {/* <Button title="Go to Sign In" onPress={() => router.push('/(auth)/sign-in')} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Replace with your desired background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: typography.JakartaExtraBold,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    fontFamily: typography.JakartaMedium,
    marginBottom: 20,
  },
});
