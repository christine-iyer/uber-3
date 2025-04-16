import { View, Text, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Setting up a Profile</Text>
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
});
