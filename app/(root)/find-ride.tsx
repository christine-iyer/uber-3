import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, Alert, TextInput } from 'react-native';
import { typography } from 'styles/typography';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const FindRide = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
  });
  const [distance, setDistance] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateDistance = async () => {
    if (!form.from || !form.to) {
      Alert.alert('Error', 'Please fill in both locations.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
        params: {
          origins: form.from,
          destinations: form.to,
          key: GOOGLE_MAPS_API_KEY,
        },
      });

      const data = response.data;

      if (
        data.status === 'OK' &&
        data.rows &&
        data.rows[0] &&
        data.rows[0].elements &&
        data.rows[0].elements[0] &&
        data.rows[0].elements[0].distance
      ) {
        const distanceText = data.rows[0].elements[0].distance.text;
        setDistance(distanceText);
        Alert.alert('Distance', `The distance is ${distanceText || 'N/A'}.`);
      } else {
        Alert.alert('Error', 'Unable to calculate distance. Please try again.');
      }
    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error.message);
      Alert.alert('Error', 'An error occurred while calculating the distance.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label="From"
        placeholder="Enter your location"
        value={form.from}
        onChangeText={(value) => setForm({ ...form, from: value })}
      />

      <CustomInput
        label="To"
        placeholder="Where are you going?"
        value={form.to}
        onChangeText={(value) => setForm({ ...form, to: value })}
      />

      <CustomButton
        title={loading ? 'Calculating...' : 'Find Now'}
        bgVariant="success"
        textVariant="default"
        onPress={calculateDistance}
        disabled={loading}
      />

      {distance && <Text style={styles.result}>Distance: {distance || 'N/A'}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  result: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: typography.JakartaSemiBold,
    color: 'green',
  },
});

export default FindRide;
