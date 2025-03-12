import { useRouter } from 'expo-router';
import { Text, View, Image, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';
import { icons } from '../../constants';
import CustomButton from '../../components/CustomButton';

const BookRide = () => {
     const router = useRouter();

     return (
    
     <View style={styles.view} 
       source={{ uri: driverDetails?.profile_image_url }} //https://res.cloudinary.com/dqjhgnivi/image/upload/v1741373526/y8uyk4xzxj4scwi5p1gp.png
       style={styles.image} 
     />

     <View style={styles.titleview} //"flex flex-row items-center justify-center mt-5 space-x-2">
       <Text style={styles.titletext} 
         {driverDetails?.title}
       </Text >

     <View style={styles.starsview}>
          <Image
               source={icons.star}
               style={styles.starstitle}
               resizeMode="contain"
          />
          <Text style={styles.ratingtext} 
         </Text>
       </View >
     </View >
   </View >

   <View style={styles.priceviewone}>
     <View style={styles.priceviewtwo} >
       <Text style={styles.pricetextone} >Ride Price</Text>
       <Text style={styles.pricetexttwo} >
         ${driverDetails?.price}
       </Text>
     </View>

     <View style={styles.timeview} >
       <Text style={styles.timetextone} >Pickup Time</Text>
       <Text style={styles.timetexttwo}>
         {formatTime(driverDetails?.time!)}
       </Text>
     </View>

     <View style={styles.seatsview}>
       <Text style={styles.seatstextone} >Car Seats</Text>
       <Text style={styles.seatstexttwo} >
         {driverDetails?.car_seats}
       </Text>
     </View>
   </View >

   <View style={styles.addressviewone} >
     <View style={styles.addressviewtwo}>
       <Image source={icons.to} style={styles.image}/>
       <Text style={styles.addresstext}>
         {userAddress}
       </Text>
     </View>

     <View style={styles.destinationview}>
       <Image source={icons.point} style={styles.destinationpoint} />
       <Text style={styles.destinationtext}>
         {destinationAddress}
       </Text>
     </View>
   </View >
     <CustomButton
          title="Find Now"
          bgVariant="success"
          textVariant="default"
          onPress={() => router.push(`/(root)/confirm-ride`)}
     />
    </View >
  );
};

const styles = StyleSheet.create({
     image: {}, //"w-28 h-28 rounded-full"
     view: {},   //"flex flex-col w-full items-center justify-center mt-10"
     titleview: {},//"flex flex-row items-center justify-center mt-5 space-x-2"
     titletext: { marginTop: 20 }, //"text-lg font-JakartaSemiBold">
     starsview: { marginTop: 12, marginBottom: 12 }, //"flex flex-row items-center space-x-0.5"
     starstitle: {},
     ratingtext: {},
     priceviewone: {},  //"flex flex-col w-full items-start justify-center py-3 px-5 rounded-3xl bg-general-600 mt-5"
     priceviewtwo: {}, //"flex flex-row items-center justify-between w-full border-b border-white py-3"
     pricetextone: {}, //"text-lg font-JakartaRegular"
     pricetexttwo: {}, //"text-lg font-JakartaRegular text-[#0CC25F]"
     timeview: {}, //"flex flex-row items-center justify-between w-full border-b border-white py-3"
     timetextone: {}, //"text-lg font-JakartaRegular"
     timetexttwo: {},  //"text-lg font-JakartaRegular"
     seatsview: {},  //"flex flex-row items-center justify-between w-full py-3"
     seatstextone: {}, //"text-lg font-JakartaRegular"
     seatstexttwo: {}, //"text-lg font-JakartaRegular
     addressviewone: {}, //"flex flex-col w-full items-start justify-center mt-5"
     addressviewtwo: {},  //"flex flex-row items-center justify-start mt-3 border-t border-b border-general-700 w-full py-3"
     addresstext: {},  //"text-lg font-JakartaRegular ml-2"
     destinationview: {},  //"flex flex-row items-center justify-start border-b border-general-700 w-full py-3"
     destinationpoint: {},  //"w-6 h-6"
     destinationtext: {}  //"text-lg font-JakartaRegular ml-2"




},

);


export default BookRide;
