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
  TouchableHighlight,
} from 'react-native';

class SearchResult extends React.Component {

  constructor(props){
    super(props);
  
    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    });

    this.state = {
      movies:this.props.result.subjects,
      total:this.props.result.total,
      count:this.props.result.count,
      start:this.props.result.start,
      query:this.props.query,
    }
    this.REQUEST_URL = 'http://api.douban.com/v2/movie/search';
  }

  requestURL(
    url = this.REQUEST_URL,
    count = this.state.count,
    start = this.state.start,
    query = this.props.query
  ){
  return(

    `${url}?q=${query}&scount=${count}&start=${start}`
    )
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
          onPress={() =>this.showMovieDetail(movie)}
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
            {movie.original_title} ({movie.year})
          </Text>
          <Text style={styles.redText}>{movie.rating.average}</Text>
        </View>
        
      </View>
      </TouchableHighlight>
      );
  }

  render() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
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
      <View style={[styles.container,{paddingTop:70}]}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList.bind(this)}
         />
      </View>
    );
  }
}


export { SearchResult as default };