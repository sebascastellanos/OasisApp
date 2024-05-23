import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import BottomTabNavigator from '../components/BottomTabNavigator';

const HomeScreen = ({ navigation }: any) => {
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
      {/* Llama a BottomTabNavigator aquí */}
      <BottomTabNavigator navigation={navigation} />
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
    paddingTop: 30,
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
});

export default HomeScreen;
