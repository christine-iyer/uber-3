import CustomButton from 'components/CustomButton';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>⌮</Text>
      <CustomButton
        title="➡ to Profile Page"
        bgVariant="outline"
        textVariant="secondary"
        onPress={() => router.push('/(root)/(tabs)/profile')}
      />
      <Text style={styles.heading}>🚗</Text>
      <CustomButton
        title="➡ to Rides"
        bgVariant="outline"
        textVariant="danger"
        onPress={() => router.push('/(root)/(tabs)/rides')}
      />
      <Text style={styles.heading}>🚕</Text>
      <CustomButton
        title="➡ to Schedule Ride"
        bgVariant="outline"
        textVariant="secondary"
        onPress={() => router.push('/(root)/book-ride')}
      />
    </View>
  );
}
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
