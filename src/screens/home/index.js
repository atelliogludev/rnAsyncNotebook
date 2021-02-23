import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {StorageNoteKey} from '../../config/appconstants';
import {AddButton} from './components/addbutton';
import SearchButton from './search';
import {homeStyle} from './homeStyle';
import {IconRemove} from '../../assets/index';
import { DetailScreenNav, HomeStackId } from '../../config/navigationconfig';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      showData: null,
      searchText: '',
    };
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidAppear() {
    this.fetchData();
  }

  fetchData() {
    AsyncStorage.getItem(StorageNoteKey).then((data) => {

      let parsedData = [];
      if (data !== null) {
        parsedData = JSON.parse(data);
      }

      this.setState({
        data: parsedData,
        showData: parsedData,
      });
    });
  }

  setSearchText = (text) => {
    let showData = this.state.data;
    if (this.state.data !== null && Array.isArray(this.state.data)) {
      showData = this.state.data.filter((item) => {
        if (item.title.toLowerCase().includes(text.toLowerCase())) {
          return true;
        }
        return false;
      });
    }

    this.setState({
      searchText: text,
      showData: showData,
    });
  };

  deleteItem(id) {
    let newData = this.state.data.filter((item)  => {
      if(item.id !== id){
        return true
      }
      return false
    });

    AsyncStorage.setItem(StorageNoteKey, JSON.stringify(newData))
    .then(() => {
      this.setState({
        data: newData,
        showData: newData
      })
    })
  }

  render() {
    if (this.state.data === null) {
      return (
        <SafeAreaView style={homeStyle.homeSafeAreaView}>
          <ActivityIndicator></ActivityIndicator>
          <AddButton />
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={homeStyle.homeSafeAreaView}>
        <SearchButton
          value={this.state.searchText}
          setSearchText={this.setSearchText}
        />
        <FlatList
          data={this.state.showData}
          keyExtractor={(item) => 'noteitem' + item.id}
          renderItem={({item, index}) => {
            return (
              <View style={homeStyle.buttonView}>
                <Text
                  onPress={() => {
                    Navigation.push(HomeStackId, {
                      component: {
                        name: DetailScreenNav,
                        passProps: { data: item }
                      }
                    })
                  }}
                  style={homeStyle.buttonText}>
                  {item.title}
                </Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <TouchableOpacity onPress={() => this.deleteItem(item.id)}>
                  <Image source={IconRemove} style={{width: 20, height: 20}}/>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        <AddButton />
      </SafeAreaView>
    );
  }
}
