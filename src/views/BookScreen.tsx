import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from './TravelScreen'; // Asumiendo que tienes definido el tipo RootStackParamList en un archivo types.tsx
import BottomTabNavigator from '../components/BottomTabNavigator';

type BookScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Book'>;
  route: RouteProp<RootStackParamList, 'Book'>;
};

const BookScreen: React.FC<BookScreenProps> = ({ navigation, route }) => {
  const { destinationName, color, destinationImage } = route.params;
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleBooking = async () => {
    if (!selectedDate) {
      Alert.alert("Error", "Seleccione una fecha y hora");
      return;
    }

    const reservation = {
      destinationName,
      selectedDate,
    };

    try {
      const existingReservations = await AsyncStorage.getItem('reservations');
      const reservations = existingReservations ? JSON.parse(existingReservations) : [];
      reservations.push(reservation);
      await AsyncStorage.setItem('reservations', JSON.stringify(reservations));
      Alert.alert("Éxito", "Reserva guardada exitosamente");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al guardar la reserva");
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#C9E7E5' }]}>
      <View style={styles.header}>
        <Image source={destinationImage} style={styles.destinationImage} />
        <Text style={styles.title}>Reservar en {destinationName}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>Ingrese una fecha y hora para su reserva:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="YYYY-MM-DD HH:MM"
          placeholderTextColor="#ccc"
          value={selectedDate}
          onChangeText={setSelectedDate}
        />
        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.bookButtonText}>Reservar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      <BottomTabNavigator navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 0,
    marginTop: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: 'black',
  },
  destinationImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
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
  textInput: {
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
