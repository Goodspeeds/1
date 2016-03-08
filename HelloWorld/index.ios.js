/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
    <View style={styles.container}>
          <View style={ [styles.item,styles.center]}>
          <Text style={styles.font}>酒店</Text>
          </View>
       <View style={[styles.item.lineLeftRight]}>
             <View style={[styles.center,styles.flex,styles.lineCenter]}>
             <Text style={styles.font}>海外酒店</Text></View>
             <View style={[styles.center,styles.flex]}>
             <Text style={styles.font}>特价酒店</Text></View>
         </View>
          <View style={styles.item}>
             <View style={[styles.center,styles.flex,styles.lineCenter]}>
             <Text style={styles.font}>团购</Text></View>
             <View style={[styles.center,styles.flex]}>
             <Text style={styles.font}>民宿客栈</Text></View>
          </View>
    </View>
  };
}

}

const styles = StyleSheet.create({

 container: {
    marginTop:25,
    marginLeft:15,
    marginRight:5,
    height:84,

    
    flexDirection:'row',
    borderRadius:5,
    padding:2,
    backgroundColor:'#ff0067',
  },

item:{
   flex:1,
   height:80,
   
 
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  flex:{
    flex:1
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  }
  
});
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
