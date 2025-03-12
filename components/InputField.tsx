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
      <View style={[styles.container, containerStyle]}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={styles.inputContainer}>
          {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
          <TextInput
            style={[styles.input, inputStyle]}
            secureTextEntry={secureTextEntry}
            {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: { width: '100%', marginBottom: 12 },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 4, color: '#333' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  icon: { width: 20, height: 20, marginRight: 10, tintColor: '#666' },
  input: { flex: 1, paddingVertical: 10, fontSize: 16, color: '#000' },
});

export default InputField;
