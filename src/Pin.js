import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Pin extends Component {
  render() {
    return (
      <View style={[styles.viewMarker, {backgroundColor: this.props.corFundo} ]}>
          <Text style={styles.textoMarker}>{this.props.aviso}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewMarker: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  textoMarker: {
    color: '#FFFF',
  }
});
