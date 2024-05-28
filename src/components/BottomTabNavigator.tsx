import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface BottomTabNavigatorProps {
  navigation: any; 
}

const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({ navigation }) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home-outline" size={24} color="white" />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('Scanner')}
      >
        <Ionicons name="camera-outline" size={24} color="white" />
        <Text style={styles.tabText}>Scanner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('Map')}
      >
        <Ionicons name="map-outline" size={24} color="white" />
        <Text style={styles.tabText}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate('Chat')}
      >
        <Ionicons name="chatbubbles-outline" size={24} color="white" />
        <Text style={styles.tabText}>Chatbot</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderTopWidth: 3,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 20,
    margin: 20
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    marginTop: 5,
    fontSize: 12,
    color: '#fff'
  },
});

export default BottomTabNavigator;
