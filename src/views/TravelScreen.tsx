import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Travel: { theme: string };
};

type TravelScreenRouteProp = RouteProp<RootStackParamList, 'Travel'>;

type TravelScreenProps = {
  route: TravelScreenRouteProp;
};

const TravelScreen: React.FC<TravelScreenProps> = ({ route }) => {
  const { theme } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {theme}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TravelScreen;
