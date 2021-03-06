// Libraries ****************************************************************************
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// Componentes **************************************************************************
import Display from './Display';

// **************************************************************************************
export default class Main extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Display />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});