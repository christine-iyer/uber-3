import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-lg font-bold text-yellow-500">Hey Jayadeva</Text>
      <Text className="text-lg font-bold text-blue-500">Hari Gita Govinda</Text>
      <Text className="text-lg font-bold text-yellow-500">Ravana Veda</Text>

      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
