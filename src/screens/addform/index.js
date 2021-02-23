import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {StorageNoteKey } from '../../config/appconstants';
import {HomeStackId} from '../../config/navigationconfig';
import {addformStyle} from './addformStyle';
import {homeStyle} from '../home/homeStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AddFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      inputValue: '',
    };
  }

  saveData = () => {
    AsyncStorage.getItem(StorageNoteKey).then((data) => {
      let parsedData = [];
      if (data !== null) {
        parsedData = JSON.parse(data);
      }

      parsedData.push({
        id: Date.now(),
        title: this.state.titleValue,
        input: this.state.inputValue,
      });
      AsyncStorage.setItem(
        StorageNoteKey,
        JSON.stringify(parsedData),
      ).then(() => Navigation.pop(HomeStackId));
    });
  };

  render() {
    return (
      <SafeAreaView style={addformStyle.safeAreaView}>
        <TextInput
          placeholder={'Lütfen Bir Başlık Giriniz'}
          style={addformStyle.textInput}
          value={this.state.titleValue}
          onChangeText={(text) => this.setState({titleValue: text})}
        />

        <TextInput
          placeholder={'Lütfen Notunuzu Giriniz'}
          multiline={true}
          numberOfLines={10}
          style={addformStyle.bigTextInput}
          value={this.state.inputValue}
          onChangeText={(text) => this.setState({inputValue: text})}
        />
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={addformStyle.saveOpacity}
            onPress={() => this.saveData()}>
            <Text style={addformStyle.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
