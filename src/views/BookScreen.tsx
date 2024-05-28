import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Book: { destinationName: string };
};

type BookScreenProps = {
  route: RouteProp<RootStackParamList, 'Book'>;
};

const BookScreen: React.FC<BookScreenProps> = ({ route }) => {
  const { destinationName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservar en {destinationName}</Text>
      {/* Aquí puedes agregar los elementos de la pantalla de reserva */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default BookScreen;
