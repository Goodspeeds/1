'use strict';

import React from 'react-native';

let { StyleSheet } = React;

const styles = StyleSheet.create({

deleteIcon:{
  width:20,
  height:20,
  margin:10,

},




	searchHeader:{
		color:'rgba(0,0,0,0.8)',
		fontSize:18,
		marginTop:30,
		marginLeft:10
	},
  container: {
   
    flex: 1,
    backgroundColor: '#eae7ff',
    
  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width:99,
    height:138,
    margin:6,
  },
  item:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'rgba(100,52,201,0.1)',
    paddingBottom:6,
    paddingTop:6,
    flex:1,
  },
  itemContent:{
    flex:1,
    marginLeft:13,
    marginTop:6
  },
  itemHeader:{
    fontSize:18,
    fontFamily:'Helvetica Neue',
    fontWeight:'300',
    color:'#6435c9',
    marginBottom:6
  },
  itemMeta:{
    fontSize:16,
    color:'rgba(0,0,0,0.6)',
    marginBottom:6
  },
  redText:{
    color:'#db2828',
    fontSize:15
  },
  itemText:{
    fontSize:16,
    fontFamily:'Helvetica Neue',
    fontWeight:'300',
    color:'rgba(0,0,0,0.8)',
    lineHeight:26
  }
});

export { styles as default };