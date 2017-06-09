import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import PunScreen from './PunScreen';
import AboutScreen from './AboutScreen';
import styled from 'styled-components/native';

const RedText = styled.Text`
  color: red;
`;

const TextInputMain = styled.TextInput`
  height: 30;
`;

export default class TestRnApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RedText style={styles.welcome}>
          Welcome to the Pun App
        </RedText>
        <TextInputMain style={styles.welcome} placeholder="hey placeholder" />
        <Image source={require ('../assets/Dino.png')}/>
      </View>
    );
  }
}

const mainNavigator = TabNavigator({
  Main: {
    screen: TestRnApp
  },
  Puns: {
    screen: PunScreen
  },
  About: {
    screen: AboutScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestRnApp', () => mainNavigator);
