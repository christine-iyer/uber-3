import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

import { icons } from '../constants';
import { formatTime } from '../lib/utils';

import { DriverCardProps } from '@/types/type';

const DriverCard = ({ item, selected, setSelected }: DriverCardProps) => {
  return (
    <TouchableOpacity
      onPress={setSelected}
      style={[
        styles.button,
        selected === item.id ? styles.selectedButton : styles.unselectedButton,
      ]}>
      <Image source={{ uri: item.profile_image_url }} style={styles.image} />

      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.ratingContainer}>
            <Image source={icons.star} style={styles.iconSmall} />
            <Text style={styles.ratingText}>4</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.priceContainer}>
            <Image source={icons.dollar} style={styles.iconSmall} />
            <Text style={styles.priceText}>${item.price}</Text>
          </View>

          <Text style={styles.separator}>|</Text>

          <Text style={styles.detailText}>{formatTime(item.time!)}</Text>

          <Text style={styles.separator}>|</Text>

          <Text style={styles.detailText}>{item.car_seats} seats</Text>
        </View>
      </View>

      <Image source={{ uri: item.car_image_url }} style={styles.carImage} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  selectedButton: {
    backgroundColor: '#4CAF50', // Replace with your "bg-general-600" color
  },
  unselectedButton: {
    backgroundColor: '#FFFFFF', // Replace with your "bg-white" color
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 12,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontFamily: typography.JakartaRegular,
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  iconSmall: {
    height: 14,
    width: 14,
  },
  ratingText: {
    fontFamily: typography.JakartaRegular,
    fontSize: 12,
    marginLeft: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: typography.JakartaRegular,
    fontSize: 12,
    marginLeft: 4,
  },
  separator: {
    fontFamily: typography.JakartaRegular,
    fontSize: 12,
    color: '#6B7280', // Replace with your "text-general-800" color
    marginHorizontal: 4,
  },
  detailText: {
    fontFamily: typography.JakartaSemiBold,
    fontSize: 12,
    color: '#6B7280', // Replace with your "text-general-800" color
  },
  carImage: {
    height: 56,
    width: 56,
  },
});

export default DriverCard;
