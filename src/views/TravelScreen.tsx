import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import BottomTabNavigator from '../components/BottomTabNavigator'; // Importa el BottomTabNavigator

export type RootStackParamList = {
  Home: undefined;
  Travel: { theme: string; destinations: { name: string; image: ImageSourcePropType; color: string }[] };
  Book: { destinationName: string; color: string; destinationImage: ImageSourcePropType };
};

type TravelScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Travel'>; // Usa NavigationProp con RootStackParamList
  route: RouteProp<RootStackParamList, 'Travel'>;
};

const headerImages: { [key: string]: ImageSourcePropType } = {
  'Tropical Jungle': require('../assets/jungles.jpg'),
  Desert: require('../assets/desert.jpg'),
  Sabana: require('../assets/sabana.jpg'),
  Artic: require('../assets/artic.jpg'),
};

const TravelScreen = ({ navigation, route }: TravelScreenProps) => {
  const { theme, destinations } = route.params;
  let backgroundColor;

  switch (theme) {
    case 'Tropical Jungle':
      backgroundColor = '#B5EAD7'; // Pastel verde
      break;
    case 'Desert':
      backgroundColor = '#F8D5C4'; // Pastel arena
      break;
    case 'Sabana':
      backgroundColor = '#FFF1A8'; // Pastel dorado
      break;
    case 'Artic':
      backgroundColor = '#D6EFFF'; // Pastel azul
      break;
    default:
      backgroundColor = '#EDE7F6'; // Color de respaldo
  }

  const navigateToBook = (destinationName: string, color: string, destinationImage: ImageSourcePropType) => {
    navigation.navigate('Book', { destinationName, color, destinationImage });
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={headerImages[theme]} style={styles.headerImage} />
        <Text style={styles.title}>{theme} Biome</Text>
        <Text style={styles.description}>
          Exploring a {theme.toLowerCase()} biome offers a rich tapestry of biodiversity, where nature's vibrant hues and diverse life forms thrive in a lush, tropical haven. A true adventure into nature's untamed splendor awaits.
        </Text>
        <Text style={styles.destinos}>Popular Destinations</Text>
        <View style={styles.destinationsContainer}>
          {destinations.map((destination, index) => (
            <TouchableOpacity
              key={index}
              style={styles.destinationButton}
              onPress={() => navigateToBook(destination.name, destination.color, destination.image)}
            >
              <Image source={destination.image} style={styles.destinationImage} />
              <Text style={styles.destinationName}>{destination.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomTabNavigator navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  destinos: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#607D8B', // Pastel gris azulado
    textAlign: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 310,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#4E4E4E', // Gris oscuro pastel
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    color: '#757575', // Gris pastel
  },
  destinationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  destinationButton: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Blanco
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  destinationImage: {
    width: 120,
    height: 80,
    resizeMode: 'cover',
  },
  destinationName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333', // Gris oscuro
    textAlign: 'center',
    padding: 5,
  },
});

export default TravelScreen;
