import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import BottomTabNavigator from '../components/BottomTabNavigator';

class ScanScreen extends Component {
  onSuccess = (e: { data: string; }) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
        />
        {/* Agrega BottomTabNavigator aquí */}
        <BottomTabNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScanScreen;
