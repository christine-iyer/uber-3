import { useRouter } from 'expo-router';
import { Text, View, Image, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

import CustomButton from '../../components/CustomButton';
import { icons } from '../../constants';

// Mock formatTime function (Ensure you replace it with a real one)
const formatTime = (time) => time;

const BookRide = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dqjhgnivi/image/upload/v1741373526/y8uyk4xzxj4scwi5p1gp.png',
        }}
        style={styles.image}
      />

      {/* Title and Rating */}
      <View style={styles.titleview}>
        <Text style={styles.titletext}>Manny</Text>
        <View style={styles.starsview}>
          <Image source={icons.star} style={styles.starstitle} resizeMode="contain" />
          <Text style={styles.ratingtext}>4.8</Text> {/* Assuming some rating value */}
        </View>
      </View>

      {/* Ride Price, Pickup Time, Car Seats */}
      <View style={styles.priceviewone}>
        <View style={styles.priceviewtwo}>
          <Text style={styles.pricetextone}>Ride Price</Text>
          <Text style={styles.pricetexttwo}>$38.50</Text>
        </View>

        <View style={styles.timeview}>
          <Text style={styles.timetextone}>Pickup Time</Text>
          <Text style={styles.timetexttwo}>{formatTime('12:38 pm')}</Text>
        </View>

        <View style={styles.seatsview}>
          <Text style={styles.seatstextone}>Car Seats</Text>
          <Text style={styles.seatstexttwo}>4</Text>
        </View>
      </View>

      {/* Address Section */}
      <View style={styles.addressviewone}>
        <View style={styles.addressviewtwo}>
          <Image source={icons.to} style={styles.image} />
          <Text style={styles.addresstext}>46 Atlantic St.</Text>
        </View>

        <View style={styles.destinationview}>
          <Image source={icons.point} style={styles.destinationpoint} />
          <Text style={styles.destinationtext}>29 Longfellow</Text>
        </View>
      </View>

      {/* Button */}
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
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 112, height: 112, borderRadius: 56, marginTop: 10 },
  titleview: { flexDirection: 'column', alignItems: 'center', marginTop: 10 },
  titletext: { fontSize: 18, fontWeight: '600', marginTop: 10 },
  starsview: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  starstitle: { width: 20, height: 20 },
  ratingtext: { fontSize: 16, fontWeight: '500', marginLeft: 5 },

  priceviewone: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    marginTop: 10,
  },
  priceviewtwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  pricetextone: { fontSize: 16, fontWeight: '500' },
  pricetexttwo: { fontSize: 16, fontWeight: '500', color: '#0CC25F' },

  timeview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
    marginTop: 5,
  },
  timetextone: { fontSize: 16, fontWeight: '500' },
  timetexttwo: { fontSize: 16, fontWeight: '500' },

  seatsview: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 },
  seatstextone: { fontSize: 16, fontWeight: '500' },
  seatstexttwo: { fontSize: 16, fontWeight: '500' },

  addressviewone: { marginTop: 10, width: '100%' },
  addressviewtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
  },
  addresstext: { fontSize: 16, marginLeft: 5 },

  destinationview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
  },
  destinationpoint: { width: 24, height: 24 },
  destinationtext: { fontSize: 16, marginLeft: 5 },
});

export default BookRide;
