import { View, Text, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { typography } from 'styles/typography';

export default function ProfileScreen() {
  // Function to handle button presses
  const handlePress = (message: string) => {
    Alert.alert(message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an Option</Text>

      {/* Button 1 */}
      <TouchableOpacity onPress={() => handlePress('Hi')} style={styles.button}>
        <Image
          source={require('../../../assets/images/image1.png')} // Replace with the correct path to your first image
          style={styles.image}
        />
      </TouchableOpacity>

      {/* Button 2 */}
      <TouchableOpacity onPress={() => handlePress('Bye')} style={styles.button}>
        <Image
          source={require('../../../assets/images/image2.png')} // Replace with the correct path to your second image
          style={styles.image}
        />
      </TouchableOpacity>

      {/* Button 3 */}
      <TouchableOpacity onPress={() => handlePress('Yellow')} style={styles.button}>
        <Image
          source={require('../../../assets/images/image3.png')} // Replace with the correct path to your third image
          style={styles.image}
        />
      </TouchableOpacity>
      {/* Button 4 */}
      <TouchableOpacity onPress={() => handlePress('Red')} style={styles.button}>
        <Image
          source={require('../../../assets/images/image4.png')} // Replace with the correct path to your fourth image
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: typography.JakartaExtraBold,
  },
  button: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
