/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
      
//      let pic = {
//      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//      };
//      return (
//              <Image source={pic} style={{width: 193, height: 110}} />
//              );
      
      return (
              <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
              </View>
      
      );
  }
}


class Greeting extends Component {
    
    render() {
        
        return(
        
               <Text>Hello {this.props.name}</Text>
        );
    }
}























