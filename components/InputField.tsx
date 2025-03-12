import {
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TextInput,
  Platform,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { InputFieldProps } from 'types/type';

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  style,
  ...props
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Text style={styles.text}>{label}</Text>
        <View>
          <TextInput secureTextEntry={secureTextEntry} {...props} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
const styles = StyleSheet.create({
  text: { color: 'red', backgroundColor: 'yellow', padding: 12 },
});

export default InputField;
