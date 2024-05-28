import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './TravelScreen'; // Asumiendo que tienes definido el tipo RootStackParamList en un archivo types.tsx
import BottomTabNavigator from '../components/BottomTabNavigator';

type BookScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Book'>;
  route: RouteProp<RootStackParamList, 'Book'>;
};

const BookScreen: React.FC<BookScreenProps> = ({ navigation, route }) => {
  const { destinationName, color, destinationImage } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: '#C9E7E5' }]}>
      <View style={styles.header}>
        <Image source={destinationImage} style={styles.destinationImage} />
        <Text style={styles.title}>Reservar en {destinationName}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>Seleccione una fecha y hora para su reserva:</Text>
        <View style={styles.datePickerContainer}>
          {/* Aquí iría el componente de selección de fecha y hora */}
          <Text style={styles.placeholderText}>Seleccione la fecha y hora</Text>
        </View>
        <TouchableOpacity style={styles.bookButton} onPress={() => {}}>
          <Text style={styles.bookButtonText}>Reservar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      <BottomTabNavigator navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: 'black',
  },
  destinationImage: {
    width: 400,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  datePickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: 'black',
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BookScreen;
