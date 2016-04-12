/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from './app/Styles/Main';
import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import icons from './app/Asseets/Icon';
import Featured from './app/Components/Featured';
import Search from './app/Components/Search';


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TabBarIOS
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

class hhhhhh extends Component {

 constructor(props){
 	super(props);
 	this.state = {
       selectedTab:'featured'

 	};
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
 }

 	

  render() {

    return (
    	<TabBarIOS barTintColor='darkslateblue' tintColor='white'>
    	<TabBarIOS.Item
    	//systemIcon="featured"
    	icon={{uri:icons.star,scale:4.6}}
    	title="推荐电影"
    	selectedIcon={{uri:icons.starActive,scale:4.6}}
		selected={this.state.selectedTab === 'featured'}
		onPress={() => {
			this.setState({
				selectedTab:'featured'
			});
		}
		}
    	>
    	<Featured />
		</TabBarIOS.Item>
		<TabBarIOS.Item 
        icon={{uri:icons.board,scale:4.6}}
    	title="北美电影"
    	selectedIcon={{uri:icons.boardActive,scale:4.6}}
		selected={this.state.selectedTab === 'us_box'}
		onPress={() => {
			this.setState({
				selectedTab:'us_box'
			});
		}
		}>
	  <USBox />
        </TabBarIOS.Item>
         <TabBarIOS.Item 
          icon={{uri:icons.search,scale:4.6}}
          title="搜索"
          selectedIcon={{uri:icons.search,scale:4.6}}
          selected={this.state.selectedTab === 'search'}
          onPress={() => {
            this.setState({
              selectedTab:'search'
            });
          }
          }>
          <Search />
   </TabBarIOS.Item>
   </TabBarIOS>
    );

  }
}




AppRegistry.registerComponent('hhhhhh', () => hhhhhh);
