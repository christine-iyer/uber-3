import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { typography } from 'styles/typography';

import CustomButton from '../../components/CustomButton';
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
        <TextInput
          style={styles.input}
          placeholder="Enter your location"
          value={form.from}
          onChangeText={(value) => setForm({ ...form, from: value })}
        />
      </View>

      <View style={styles.viewtwo}>
        <Text style={styles.label}>To</Text>
        <TextInput
          style={styles.input}
          placeholder="To?"
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
  input: { marginBottom: 16 },
  viewtwo: { marginBottom: 16 },
  label: {
    fontFamily: typography.JakartaSemiBold,
    fontSize: 18,
    lineHeight: 28,
    color: 'black',
    marginBottom: 8,
  },
});

export default ConfirmRide;
