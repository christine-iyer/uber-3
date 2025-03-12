import { useRouter } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

import CustomButton from '../../components/CustomButton';

const BookRide = () => {
  const router = useRouter();

  return (
    <View style={styles.title}>
      <View style={styles.viewone}>
        <Text style={styles.textone}>From</Text>
      </View>

      <View style={styles.viewtwo}>
        <Text style={styles.texttwo}>To</Text>
      </View>

      <CustomButton
        title="Find Now"
        bgVariant="success"
        textVariant="default"
        onPress={() => router.push(`/(root)/confirm-ride`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  viewone: { marginTop: 12, marginBottom: 12 },
  textone: {
    fontFamily: typography.JakartaSemiBold,
    marginBottom: 12,
    fontSize: 18,
    lineHeight: 28,
  }, //"mb-3 text-lg"

  confirm: { marginTop: 20 },

  viewtwo: { marginTop: 12, marginBottom: 12 },

  texttwo: {
    fontFamily: typography.JakartaSemiBold,
    marginBottom: 12,
    fontSize: 18,
    lineHeight: 28,
  },
});

export default BookRide;
