import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';
import { icons } from './../../constants';

const ConfirmRide = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
  });

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.viewone}>
        <Text style={styles.label}>From</Text>
        <InputField
          label="From"
          placeholder="Enter your location"
          icon={icons.pin}
          value={form.from}
          onChangeText={(value) => setForm({ ...form, from: value })}
        />
      </View>

      <View style={styles.viewtwo}>
        <Text style={styles.label}>To</Text>
        <InputField
          label="To"
          placeholder="Where are you going?"
          icon={icons.marker}
          value={form.to}
          onChangeText={(value) => setForm({ ...form, to: value })}
        />
      </View>

      <CustomButton
        title="Find Now"
        bgVariant="success"
        textVariant="default"
        onPress={() => router.push(`/(root)/book-ride`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  viewone: { marginBottom: 16 },
  viewtwo: { marginBottom: 16 },
  label: {
    fontFamily: typography.JakartaSemiBold,
    fontSize: 18,
    lineHeight: 28,
    color: 'pink',
    marginBottom: 8,
  },
});

export default ConfirmRide;
