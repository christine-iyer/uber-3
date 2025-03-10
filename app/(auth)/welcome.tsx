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
  toskip: {
    width: '100%',
    flex: 1,
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }, //w-full flex justify-end items-end p-5
  skiptext: { fontFamily: typography.JakartaExtraBold }, //text-black text-md font-JakartaBold
  dot: {
    marginHorizontal: 4,
    height: 4,
    width: 32,
    backgroundColor: '#E2E8F0',
    borderRadius: 9999,
  },
  activedot: {
    marginHorizontal: 4,
    height: 4,
    width: 32,
    backgroundColor: '#0286FF',
    borderRadius: 9999,
  },
  id: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }, //"flex items-center justify-center p-5"})
  viewone: {
    marginTop: 40,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginHorizontal: 40, // ✅ mx-10 (10 * 4px = 40px)
    textAlign: 'center', // ✅ text-center
    fontSize: 24, // ✅ text-3xl (3xl = 24px)
    fontWeight: 'bold', // ✅ font-bold
    color: 'black', // ✅ text-black
  },
  description: {
    fontSize: 16, // ✅ text-md (md = 16px)
    fontFamily: 'Jakarta-SemiBold', // ✅ font-JakartaSemiBold (Assuming a custom font is set up)
    marginHorizontal: 40, // ✅ mx-10 (10 * 4px = 40px)
    marginTop: 12, // ✅ mt-3 (3 * 4px = 12px)
    textAlign: 'center', // ✅ text-center
    color: '#858585', // ✅ text-[#858585]
  },
  image: {
    height: 300, // ✅ h-[300px]
    width: '100%', // ✅ w-full
  },
  button: {
    marginBottom: 20, // ✅ mb-5 (5 * 4px = 20px)
    marginTop: 10, // ✅ mt-10 (10 * 4px = 40px)
    width: '91.666%', // ✅ w-11/12 (11/12 = 91.66%)
  },
});
