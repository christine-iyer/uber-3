import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { typography } from 'styles/typography';
import { icons } from '@/constants';
import { formatTime } from '@/lib/utils';
import { DriverCardProps } from '@/types/type';

const DriverCard = ({ item, selected, setSelected }: DriverCardProps) => {
  return (
    <TouchableOpacity
      onPress={setSelected}
      style={styles.name}{`${
        selected === item.id ? 'bg-general-600' : 'bg-white'
      } flex flex-row items-center justify-between rounded-xl px-3 py-5`}>
      <Image source={{ uri: item.profile_image_url }} style={styles.image} />

      <View style={styles.name}"mx-3 flex flex-1 flex-col items-start justify-center">
        <View style={styles.name}"mb-1 flex flex-row items-center justify-start">
          <Text style={styles.name}"font-JakartaRegular text-lg">{item.title}</Text>

          <View style={styles.name}"ml-2 flex flex-row items-center space-x-1">
            <Image source={icons.star} style={styles.name}"h-3.5 w-3.5" />
            <Text style={styles.name}"font-JakartaRegular text-sm">4</Text>
          </View>
        </View>

        <View style={styles.name}"flex flex-row items-center justify-start">
          <View style={styles.name}"flex flex-row items-center">
            <Image source={icons.dollar} style={styles.name}"h-4 w-4" />
            <Text style={styles.name}"font-JakartaRegular ml-1 text-sm">${item.price}</Text>
          </View>

          <Text style={styles.name}"font-JakartaRegular text-general-800 mx-1 text-sm">|</Text>

          <Text style={styles.name}"font-JakartaRegular text-general-800 text-sm">
            {formatTime(item.time!)}
          </Text>

          <Text style={styles.name}"font-JakartaRegular text-general-800 mx-1 text-sm">|</Text>

          <Text style={styles.name}"font-JakartaRegular text-general-800 text-sm">
            {item.car_seats} seats
          </Text>
        </View>
      </View>

      <Image source={{ uri: item.car_image_url }} style={styles.name}"h-14 w-14" resizeMode="contain" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
     container: {
       
     },
     heading: {
       
     },
     image: {
           height: 14,
               width: 14,     
               borderRadius: 7,
       
     },
   });


export default DriverCard;
