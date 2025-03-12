import CustomButton from 'components/CustomButton';
import { onboarding } from 'constants/';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import { typography } from '../../styles/typography';
export default function WelcomeScreen() {
  const router = useRouter();
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            router.replace('/(auth)/sign-up');
          }}
          style={styles.toskip}>
          <Text style={styles.skiptext}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Ensure Swiper has enough space */}
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activedot} />}
          onIndexChanged={(index) => setActiveIndex(index)}>
          {onboarding.map((item) => (
            <View key={item.id} style={styles.slide}>
              <Image source={item.image} style={styles.image} resizeMode="contain" />
              <View style={styles.viewone}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
        </Swiper>
      </View>

      {/* ✅ Buttons Section */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title={isLastSlide ? 'Get Started' : 'Next'}
          onPress={() =>
            isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)
          }
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ✅ Ensure the root container takes full screen space
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 10,
  },
  toskip: {
    padding: 5,
  },
  skiptext: {
    fontFamily: typography.JakartaExtraBold,
  },
  swiperContainer: {
    flex: 1, // ✅ Make Swiper take up available space
  },
  slide: {
    flex: 1, // ✅ Allow each slide to take full space
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    flex: 1, // ✅ Allow image to take up available space
    width: '100%', // ✅ Ensure full width
    height: undefined, // ✅ Allow aspect ratio to scale
    aspectRatio: 1.5, // ✅ Maintain image aspect ratio
  },
  viewone: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    marginHorizontal: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Jakarta-SemiBold',
    marginHorizontal: 40,
    marginTop: 12,
    textAlign: 'center',
    color: '#858585',
  },
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
  buttonContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  button: {
    width: '91.666%',
    marginTop: 10,
    marginBottom: 20,
  },
});
