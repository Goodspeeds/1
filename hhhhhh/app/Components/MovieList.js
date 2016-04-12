/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from '../Styles/Main';
import MovieDetail from './MovieDetail';
import React, {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicatorIOS,
  TouchableHighlight
} from 'react-native';



class MovieList extends React.Component {

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
 	movies:[],
 	  loaded:false,
    count:20,
    start:0,
    total:0,

   };

this.REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
this.dataSource = new ListView.DataSource({
  rowHasChanged:(row1,row2) => row1 !== row2
  });


   this.fetchData();
 }

 requestURL(
    url = this.REQUEST_URL,
    count = this.state.count,
    start = this.state.start
  ){
  return(
    `${url}?count=${count}&start=${start}`
    )
 }

 	fetchData(){
 		fetch(this.requestURL())
 		.then(response =>response.json())
 		.then(responseData =>{
      let newStary = responseData.start + responseData.count;
 			this.setState({
 			movies:responseData.subjects,
 			loaded:true,
      total:responseData.total,
      start:newStary,
 		 });
 		})
 		.done()
 	}

showMovieDetail(movie){
  this.props.navigator.push({
      title:movie.title,
      component:MovieDetail,
      passProps:{movie},
  });
}





renderMovieList(movie){
	return(
    <TouchableHighlight
          underlayColor="rgba(34,26,38,0.1)"
          onPress={() => this.showMovieDetail(movie)}
            /*{
            console.log(`<${movie.title}>被点了！`)
          }}*/
      >
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
    </TouchableHighlight>
		);
}


onEndReached(){
  console.log('到底啦～');
  if (this.state.total > this.state.start) {
    this.loadMore();
  }
}

loadMore(){
    fetch(this.requestURL())
    .then(response =>response.json())
    .then(responseData =>{
      let newStary = responseData.start + responseData.count;
      this.setState({
      movies:[...this.state.movies,...responseData.subjects],
      start:newStary,
     });
    })
    
  }

renderFooter(){
  if (this.state.total > this.state.start){
    return(
    <View style={{marginVertical:20,paddingBottom:50,alignSelf:'center'}}>
      <ActivityIndicatorIOS/>
    </View>
      );
}else{
   return(
    <View style={{marginVertical:20,paddingBottom:50,alignSelf:'center'}}>
      <Text style={{color:'rgba(0,0,0,0.5)'}}>没有可显示内容：)</Text>
    </View>
    );






  }
}

  render() {
  	if (!this.state.loaded) {
  		return(
  			<View style={[styles.container,{paddingTop:30}]}>
				<View style={styles.loading}>
					
          <ActivityIndicatorIOS 
            size='large'
            color='#6435c9'
            />
				</View>
  			</View>
  			);
  	}




    return (
      <View style={[styles.container,{paddingTop:60}]}>
      <ListView
      renderFooter={this.renderFooter.bind(this)}
      pageSize={this.state.count}
      onEndReached={this.onEndReached.bind(this)}
      initialListSize={this.state.count}
      dataSource={this.dataSource.cloneWithRows(this.state.movies)}
      renderRow={this.renderMovieList.bind(this)}
 />
      </View>
    );
  }
}


export { MovieList as default };
