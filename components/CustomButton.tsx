import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { ButtonProps } from '@/types/type';

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return styles.secondaryButton;
    case 'danger':
      return styles.dangerButton;
    case 'success':
      return styles.successButton;
    case 'outline':
      return styles.outlineButton;
    default:
      return styles.primaryButton;
  }
};

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return styles.textPrimary;
    case 'secondary':
      return styles.textSecondary;
    case 'danger':
      return styles.textDanger;
    case 'success':
      return styles.textSuccess;
    default:
      return styles.textDefault;
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  className, // ✅ No longer needed, remove from props
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonBase, getBgVariantStyle(bgVariant)]}
      onPress={onPress}
      {...props}>
      {IconLeft && <IconLeft style={styles.iconLeft} />}
      <Text style={[styles.buttonText, getTextVariantStyle(textVariant)]}>{title}</Text>
      {IconRight && <IconRight style={styles.iconRight} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    width: '50%',
    borderRadius: 999, // Equivalent to `rounded-full`
    paddingVertical: 12, // Equivalent to `p-3`
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#aaa',
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    margin: 8,
  },

  // ✅ Button Background Variants
  primaryButton: {
    backgroundColor: '#0286FF', // Default primary color
  },
  secondaryButton: {
    backgroundColor: '#6B7280', // Gray
  },
  dangerButton: {
    backgroundColor: '#DC2626', // Red
  },
  successButton: {
    backgroundColor: '#16A34A', // Green
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#D1D5DB',
    borderWidth: 0.5,
  },

  // ✅ Button Text Variants
  buttonText: {
    fontSize: 18, // Equivalent to `text-lg`
    fontWeight: 'bold',
  },
  textPrimary: {
    color: 'gray',
  },
  textSecondary: {
    color: 'pink',
  },
  textDanger: {
    color: 'orange',
  },
  textSuccess: {
    color: 'green',
  },
  textDefault: {
    color: 'antiquewhite',
  },

  // ✅ Icon Spacing
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default CustomButton;
