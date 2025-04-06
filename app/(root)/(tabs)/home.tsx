import CustomButton from 'components/CustomButton';
import DriverCard from 'components/DriverCard';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { typography } from 'styles/typography';

const mockDrivers = [
  {
    id: 1,
    profile_image_url:
      'https://res.cloudinary.com/dqjhgnivi/image/upload/v1742507143/gsrngye632hkdukgt5vp.jpg',
    title: 'John Doe',
    price: 25,
    time: '15 mins',
    car_seats: 4,
    car_image_url:
      'https://res.cloudinary.com/dqjhgnivi/image/upload/v1739206132/ja8krfybi5qaoxrgn2z8.jpg',
  },
  {
    id: 2,
    profile_image_url:
      'https://res.cloudinary.com/dqjhgnivi/image/upload/v1738882388/ditez2hgfxqidzkrfdpu.jpg',
    title: 'Jane Smith',
    price: 30,
    time: '10 mins',
    car_seats: 4,
    car_image_url:
      'https://res.cloudinary.com/dqjhgnivi/image/upload/v1738616573/kr2buald7dozicyaeuxw.jpg',
  },
];

export default function HomeScreen() {
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);

  const handleSelectDriver = (id: number) => {
    setSelectedDriver(id);
  };

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

      <FlatList
        data={mockDrivers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DriverCard
            item={item} // Pass the driver data as "item"
            selected={selectedDriver === item.id} // Pass the selected state
            setSelected={() => handleSelectDriver(item.id)} // Pass the selection handler
          />
        )}
        contentContainerStyle={{ padding: 20 }}
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
