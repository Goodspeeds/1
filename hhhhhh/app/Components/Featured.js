/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import styles from '../Styles/Main';
import MovieList from './MovieList';

let {
  
  Text,
  View,
  NavigatorIOS,/*导航*/
  
} = React;





class Featured extends React.Component{
	render(){
		return(
			<NavigatorIOS
			style={styles.container}
			initialRoute={{
				title:'推荐电影',
				component:MovieList
			}}
			shadowHidden={true}
			barTintColor="darkslateblue"
			titleTextColor="rgba(255,255,255,0.8)"
			tintColor="rgba(255,255,255,0.8)"
			translucent={true}
			/>
			);
	}
}

export { Featured as default };