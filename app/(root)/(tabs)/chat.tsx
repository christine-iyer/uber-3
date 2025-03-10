import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { typography } from 'styles/typography';

import { images } from './../../../constants/index';
export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.textone}>Can you talk?</Text>
        <View style={styles.view}>
          <Image source={images.message} />
          <Text style={styles.texttwo}>No Messages Yet</Text>
          <Text style={styles.textthree}>Start a conversation with your friends and family</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeview: { flex: 1, padding: 5, backgroundColor: 'white' },
  scrollview: { flex: 1 },
  view: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'antiquewhite',
  },
  textone: { fontFamily: typography.JakartaExtraBold },
  textthree: { fontSize: 24, fontFamily: typography.JakartaExtraBold, marginTop: 12 }, //"text-3xl font-JakartaBold mt-3"
  texttwo: { marginTop: 8, padding: 7, textAlign: 'center', fontSize: 16 }, // "text-base mt-2 text-center px-7"
});
