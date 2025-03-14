import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <GooglePlacesAutocomplete
        placeholder="Search for a place"
        fetchDetails // Returns detailed place data
        onPress={(data, details = null) => {
          console.log('Place Data:', data);
          console.log('Full Details:', details?.geometry.location);
        }}
        query={{
          key: 'YOUR_GOOGLE_API_KEY', // Replace with your API key
          language: 'en',
        }}
        styles={{
          textInput: {
            height: 50,
            borderRadius: 5,
            paddingLeft: 10,
            fontSize: 16,
          },
        }}
      />
    </View>
  );
};

export default GooglePlacesInput;
