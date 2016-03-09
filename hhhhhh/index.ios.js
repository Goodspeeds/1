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
  View,
  ListView,
  Image
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

class hhhhhh extends Component {

 constructor(props){
 	super(props);
/* 	let movies = [
       {title:'肖申克的救赎'},
       {title:'这个杀手不太冷'},
       {title:'阿甘正传'},
	   {title:'霸王别姬'},
	   {title:'美丽人生'},
 	];
　let dataSource = new ListView.DataSource({
	rowHasChanged:(row1,row2) => row1 !== row2
	});
*/
	this.state = {
 	//movies:dataSource.cloneWithRows(movies)
 	movies:new ListView.DataSource({
 	rowHasChanged:(row1,row2) => row1 !== row2
 	}),
 	 loaded:false
   };
   this.fetchData();
 }

 	fetchData(){
 		fetch(REQUEST_URL)
 		.then(response =>response.json())
 		.then(responseData =>{
 			this.setState({
 			movies:this.state.movies.cloneWithRows(responseData.subjects),
 			loaded:true
 		 });
 		})
 		.done()
 	}

renderMovieList(movie){
	return(
<View style={styles.item}>
<View style={styles.itemImage}>
 	<Image
 		source={{uri:movie.images.large}}
 		style={styles.image}
 		/>

 		</View>
 			<View style={styles.itemContent}>
 			<Text style={styles.itemHeader}>{movie.title}</Text>
			<Text style={styles.itemMeta}>
			{movie.original_title}({movie.year})
			</Text>
			<Text style={styles.redText}>{movie.rating.average}</Text>
 		</View>
 		</View>
		);
}


  render() {
  	if (!this.state.loaded) {
  		return(
  			<View style={styles.container}>
				<View style={styles.loading}>
					<Text>加载中。。。。。。</Text>
				</View>
  			</View>
  			);
  	}
    return (
      <View style={styles.container}>
      <ListView
      dataSource={this.state.movies}
      renderRow={this.renderMovieList}
 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flexDirection:'row',
    flex: 1,
    backgroundColor: '#eae7ff',
    paddingTop:23,
  
  },

loading:{
	flex: 1,
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
    marginBottom:6,
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
}
});

AppRegistry.registerComponent('hhhhhh', () => hhhhhh);
