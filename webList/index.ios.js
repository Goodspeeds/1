/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var Header = require('./header');
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
      <view style={styles.flex}>
      <Header></Header>
      </view>
    );
  }
}

class List extends Component{
  render(){
    return({
    <View style={styles.list_item}>
       <Text style={styles.list_item_font}>{this.props.title}</Text>
    </View>
    });
  }
}






const styles = StyleSheet.create({
 flex:{
  flex:1
 },

list_item:{
  height:40,
  marginLeft:10,
  marginRight:10,
  borderBottowWidth:1,
  borderBottowColor:'#add',
  justifyContent:'center'
},

list_item_font:{
  fontSize
}


});

AppRegistry.registerComponent('webList', () => webList);
