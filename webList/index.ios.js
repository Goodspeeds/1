/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
//var Header = require('./header');
import Header from './header';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class webList extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header></Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 flex:{
  flex:1
 },
});

AppRegistry.registerComponent('webList', () => webList);
