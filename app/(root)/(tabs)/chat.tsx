import { View, Text, StyleSheet } from 'react-native';

export default function ChatScreen() {
  return (
    <View style={styles.chat}>
      <Text>Can yoiu talk?</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  chat: {
    backgroundColor: 'green',
    fontFamily: '../',
  },
});
