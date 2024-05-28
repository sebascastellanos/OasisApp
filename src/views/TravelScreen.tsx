import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Travel: { theme: string; destinations: { name: string; image: ImageSourcePropType }[] };
};

type TravelScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Travel'>;
  route: RouteProp<RootStackParamList, 'Travel'>;
};

const headerImages: { [key: string]: ImageSourcePropType } = {
  'Tropical Jungle': require('../assets/jungles.jpg'),
  Desert: require('../assets/desert.jpg'),
  Sabana: require('../assets/sabana.jpg'),
  Artic: require('../assets/artic.jpg'),
};

const TravelScreen = ({ route }: TravelScreenProps) => {
  const { theme, destinations } = route.params;
  let backgroundColor;

  switch (theme) {
    case 'Tropical Jungle':
      backgroundColor = '#3E721D';
      break;
    case 'Desert':
      backgroundColor = '#D2B48C';
      break;
    case 'Sabana':
      backgroundColor = '#BDB76B';
      break;
    case 'Artic':
      backgroundColor = '#ADBDBB';
      break;
    default:
      backgroundColor = '#9e8d67';
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={headerImages[theme]} style={styles.headerImage} />
        <Text style={styles.title}>{theme} Biome</Text>
        <Text style={styles.description}>
          Exploring a {theme.toLowerCase()} biome offers a rich tapestry of biodiversity, where nature's vibrant hues and diverse life forms thrive in a lush, tropical haven. A true adventure into nature's untamed splendor awaits.
        </Text>
        <View style={styles.destinationsContainer}>
          {destinations.map((destination, index) => (
            <TouchableOpacity key={index} style={styles.destinationButton}>
              <Image source={destination.image} style={styles.destinationImage} />
              <Text style={styles.destinationName}>{destination.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentContainer: {
    flexGrow: 1,
   
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    color: '#fff',
  },
  destinationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  destinationButton: {
    margin: 10,
    alignItems: 'center',
  },
  destinationImage: {
    width: 120,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  destinationName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TravelScreen;