'use strict';
import styles from '../Styles/Main';

import React, {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicatorIOS,
  TouchableHighlight,
} from 'react-native';

class MovieDetail extends React.Component{
	constructor(props){
		super(props);
		this.state={
		  movieDetail:'',
		  loaded:false,
		};

	const REQUEST_URL = `https://api.douban.com//v2/movie/subject/${this.props.movie.id}`;
	
	this.fetchData(REQUEST_URL);
	}

	fetchData(REQUEST_URL){
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movieDetail:responseData,
          loaded:true,
        });
      })
      .done()
  }

  render(){
  	if(!this.state.loaded){
      return(
        <View style={[styles.container,{paddingTop:60}]}>
            <View style={styles.loading}>
              <ActivityIndicatorIOS
                  size='large'
                  color='#6435c9'
               />
            </View>
        </View>
        );
    }

    let movie = this.state.movieDetail;
    let summary = movie.summary.split(/\n/).map( p => {
    	return(
			<View style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
				<Text style={styles.itemText}>{p}</Text>
			</View>
    	);
    });

  	return(
  	   <View style={[styles.container,{paddingTop:70}]}>
  	   	 <View style={[styles.item,{flexDirection:'column'}]}>
           {summary}
  	   	 </View>
  	   </View>
  	);
  }
}

export { MovieDetail as default }