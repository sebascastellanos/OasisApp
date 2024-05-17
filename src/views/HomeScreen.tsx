import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Map: undefined;
};

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const themes = [
    {
      id: 1,
      name: 'Tropical Jungle',
      imageSource: require('../assets/jungles.jpg'),
    },
    {
      id: 2,
      name: 'Desert',
      imageSource: require('../assets/desert.jpg'),
    },
    {
      id: 3,
      name: 'Sabana',
      imageSource: require('../assets/sabana.jpg'),
    },
    // Agrega más temas aquí si lo deseas
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/profilepic.jpg')} style={styles.profileImage} />
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>
            <Text>Explore the</Text>
            {'\n'}
            <Text>Beautiful world!</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.destinationText}>Choose your destination!</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.themesContainer}
      >
        {themes.map((theme) => (
          <TouchableOpacity key={theme.id} style={styles.themeCard}>
            <Image source={theme.imageSource} style={styles.themeImage} />
            <Text style={styles.themeText}>{theme.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.mapButton} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.mapButtonText}>View on Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f0fe',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  titleContainer: {
    marginLeft: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 40,
  },
  destinationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  themesContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  themeCard: {
    width: 300,
    height: 300,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
  },
  themeImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  themeText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  mapButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;