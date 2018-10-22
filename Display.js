// Libraries ****************************************************************************
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// **************************************************************************************
export default class Display extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>This is the display view</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'red'
  }
});