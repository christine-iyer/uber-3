import { View, Text, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';
export default function ChatScreen() {
  return (
    <View style={styles.chat}>
      <Text style={styles.text}>Can yoiu talk?</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  chat: {
    backgroundColor: 'antiquewhite',
  },
  text: {
    fontFamily: typography.JakartaExtraLight,
  },
});
