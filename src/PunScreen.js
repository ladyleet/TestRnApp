import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  margin-top: 40;
`;

const TextPink = styled.Text`
  color: pink;
`;

export default class PunScreen extends Component {
  render() {
    return (
      <Container>
        <TextPink>
         Pun Screen
        </TextPink>
      </Container>
    );
  }
}
