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
    // Trim input values to remove leading/trailing whitespace
    const from = form.from.trim();
    const to = form.to.trim();

    // Validate input fields
    if (!from || !to) {
      Alert.alert('Error', 'Please fill in both locations.');
      return;
    }

    console.log('GOOGLE_MAPS_API_KEY:', GOOGLE_MAPS_API_KEY); // Debug API key

    setLoading(true);

    try {
      // Construct the API URL
      const apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        from
      )}&destinations=${encodeURIComponent(to)}&key=${GOOGLE_MAPS_API_KEY}`;

      console.log('API URL:', apiUrl); // Log the full API URL

      // Make the API request using axios
      const response = await axios.get(apiUrl);

      const data = response.data;
      console.log('API Response:', data); // Debug API response

      // Check if the response contains valid distance data
      if (
        data.status === 'OK' &&
        data.rows &&
        data.rows[0] &&
        data.rows[0].elements &&
        data.rows[0].elements[0] &&
        data.rows[0].elements[0].distance
      ) {
        const distanceInMeters = data.rows[0].elements[0].distance.value; // Distance in meters
        const distanceInMiles = (distanceInMeters * 0.000621371).toFixed(2); // Convert to miles and round to 2 decimal places

        setDistance(`${distanceInMiles} miles`); // Update state with the converted distance
        Alert.alert('Distance', `The distance is ${distanceInMiles} miles.`);
      } else {
        Alert.alert('Error', 'Unable to calculate distance. Please try again.');
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        console.error('API Error Response:', error.response.data);
      } else if (error.request) {
        console.error('API Error Request:', error.request);
      } else {
        console.error('API Error Message:', error.message);
      }
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
        onChangeText={(value) => setForm((prev) => ({ ...prev, from: value }))}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="To"
        value={form.to}
        onChangeText={(value) => setForm((prev) => ({ ...prev, to: value }))}
        autoCapitalize="none"
        autoCorrect={false}
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
