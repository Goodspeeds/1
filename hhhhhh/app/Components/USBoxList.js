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

const REQUEST_URL = 'https://api.douban.com/v2/movie/us_box';

class USBoxList extends React.Component {

  constructor(props){
    super(props);
  
    this.state = {
      movies:new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    }),
      loaded:false
    };
    this.fetchData();
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies:this.state.movies.cloneWithRows(responseData.subjects),
          loaded:true
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
          onPress={() =>this.showMovieDetail(movie.subject)}
        >
      <View style={styles.item}>
        <View style={styles.itemImage}>
          <Image
          source={{uri:movie.subject.images.large}}
          style={styles.image}
         />
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.itemHeader}>{movie.subject.title}</Text>
          <Text style={styles.itemMeta}>
            {movie.subject.original_title} ({movie.subject.year})
          </Text>
          <Text style={styles.redText}>{movie.subject.rating.average}</Text>
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


export { USBoxList as default };