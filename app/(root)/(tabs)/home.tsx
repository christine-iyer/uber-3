// import { useRouter } from 'expo-router';
// import { View, Text, Button } from 'react-native';

// export default function HomeScreen() {
//   const router = useRouter();
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>🏚️</Text>
//       <Button title="➡ to Chat" onPress={() => router.push('/(root)/(tabs)/chat')} />
//     </View>
//   );
// }

import { useUser, useAuth } from '@clerk/clerk-expo';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { typography } from 'styles/typography';
const handleSignOut = () => {
    signOut();
    router.replace('/(auth)/sign-in');
  };

// import GoogleTextInput from './components/GoogleTextInput';
// import Map from './components/Map';
// import RideCard from './components/RideCard';
// import { Ride } from './types/type';
import { icons, images } from '../../../constants/index';

  

      const location = await Location.getCurrentPositionAsync({});

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      setUserLocation({
        latitude: location.coords?.latitude,
        longitude: location.coords?.longitude,
        address: `${address[0].name}, ${address[0].region}`,
      });
    })();
  }, []);

  const handleDestinationPress = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    setDestinationLocation(location);

    router.push('/(root)/find-ride');
  };

  return (
    <SafeAreaView style={styles.safeview}>
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) =>
          <RideCard ride={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyview}>
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  style={styles.image}
                  alt="No recent rides found"
                  resizeMode="contain"
                />
                <Text style={styles.textsm}>No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={
          <>
            <View style={styles.viewtwo}>
              <Text style={styles.texttwo}>Welcome {user?.firstName}👋</Text>
              <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Image source={icons.out} style={styles.imageone} />
              </TouchableOpacity>
            </View>

            <GoogleTextInput
              icon={icons.search}
              containerStyle="bg-white shadow-md shadow-neutral-300"
              handlePress={handleDestinationPress}
            />

            <>
              <Text style={styles.currentlocation}>Your current location</Text>
              <View style={styles.currentlocview}>
                <Map />
              </View>
            </>

            <Text style={styles.recentrides}>Recent Rides</Text>
          </>
        }
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeview: { flex: 1, padding: 5, backgroundColor: 'white' }, //"bg-general-500"
  list: { flex: 1 }, //"px-5"
  emptyview: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'antiquewhite',
  }, //"flex flex-col items-center justify-center"
  textsm: { fontFamily: typography.JakartaExtraBold }, //"text-sm"
  textthree: { fontSize: 24, fontFamily: typography.JakartaExtraBold, marginTop: 12 }, //"text-3xl font-JakartaBold mt-3"
  texttwo: { marginTop: 8, padding: 7, textAlign: 'center', fontSize: 16 }, // "font-JakartaExtraBold text-2xl"
  viewtwo: {}, //"my-5 flex flex-row items-center justify-between"
  image: {}, //"h-40 w-40",
  imageone: {}, //"h-4 w-4"
  button: {}, // "h-10 w-10 items-center jus.tify-center rounded-full bg-white"
  currentlocation: {}, //"font-JakartaBold mb-3 mt-5 text-xl"
  currentlocview: {}, //"flex h-[300px] flex-row items-center bg-transparent"
  recentrides: {}, //"font-JakartaBold mb-3 mt-5 text-xl"
});

export default Home;
