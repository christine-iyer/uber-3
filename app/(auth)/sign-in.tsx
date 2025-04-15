import { GOOGLE_MAPS_API_KEY } from '@env';
import axios from 'axios';
import { useState } from 'react';
import { Text, View, StyleSheet, Alert, TextInput } from 'react-native';

import CustomButton from '../../components/CustomButton';

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

    console.log('GOOGLE_MAPS_API_KEY:', GOOGLE_MAPS_API_KEY); // Debug API key

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
      <TextInput
        style={styles.input}
        placeholder="From"
        value={form.from}
        onChangeText={(value) => setForm({ ...form, from: value })}
      />

      <TextInput
        style={styles.input}
        placeholder="To"
        value={form.to}
        onChangeText={(value) => setForm({ ...form, to: value })}
      />

      <CustomButton
        title={loading ? 'Calculating...' : 'Find Now'}
        onPress={calculateDistance}
        disabled={loading}
      />

      {distance && <Text style={styles.result}>Distance: {distance || 'N/A'}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default FindRide;
