import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Regular': require('./../../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Bold': require('./../../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Light': require('./../../assets/fonts/PlusJakartaSans-Light.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <View>{children}</View>;
}
