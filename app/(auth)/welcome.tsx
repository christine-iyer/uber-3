import CustomButton from 'app/components/CustomButton';
import { onboarding } from 'constants/';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import { typography } from '../../styles/typography';
export default function WelcomeScreen() {
  const router = useRouter();
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            router.replace('/(auth)/sign-up');
          }}
          style={styles.toskip}>
          <Text style={styles.skiptext}>Skip</Text>
        </TouchableOpacity>

        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activedot} />}
          onIndexChanged={(index) => setActiveIndex(index)}>
          {onboarding.map((item) => (
            <View key={item.id} style={styles.id}>
              <Image source={item.image} style={styles.image} resizeMode="contain" />
              <View style={styles.viewone}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
        </Swiper>

        <CustomButton
          title={isLastSlide ? 'Get Started' : 'Next'}
          onPress={() =>
            isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)
          }
          style={styles.button}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome Here for a Clone Ride</Text>
        <Button title="➡ to Sign In" onPress={() => router.push('/(auth)/sign-in')} />
        <Button title="➡ to Sign Up" onPress={() => router.push('/(auth)/sign-up')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  toskip: {}, //w-full flex justify-end items-end p-5
  skiptext: { fontFamily: typography.JakartaExtraBold }, //text-black text-md font-JakartaBold
  dot: { margin: 1, height: 4, width: 32, backgroundColor: '#E2E8F0' }, // }"mx-1 h-[4px] w-[32px] rounded-full bg-[#E2E8F0]",
  activedot: {}, // "mx-1 h-[4px] w-[32px] rounded-full bg-[#0286FF]"
  id: {}, //"flex items-center justify-center p-5"})
  viewone: {}, //"mt-10 flex w-full flex-row items-center justify-center"
  title: {}, //"mx-10 text-center text-3xl font-bold text-black"
  description: {}, //"text-md font-JakartaSemiBold mx-10 mt-3 text-center text-[#858585]"
  image: {}, //"h-[300px] w-full"
  button: {}, //"mb-5 mt-10 w-11/12"
});
