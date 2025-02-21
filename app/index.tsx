import { SafeAreaView, Text, View } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'PlusJakartaSans-ExtraBoldItalic' }}>You're home!</Text>
      </View>
    </SafeAreaView>
  );
}
