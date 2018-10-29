import React, { Component } from 'react';
import {
  View,
  Image

} from 'react-native';
export default class OtherDevices extends Component {

  render() {

    return (
      <View style={{
        alignItems: "center",
        justifyContent: "center",
      }} >
        <Image source={require('./Images/construction.png')}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>
    );
  }
}
