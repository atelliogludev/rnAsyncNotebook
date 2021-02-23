import React from 'react';
import { TextInput } from 'react-native';
import { homeStyle } from './homeStyle';

const SearchButton = ({value, setSearchText}) => {
    return (
      <TextInput 
        style={homeStyle.searchTextInput}
        placeholder={"Search"}
        value={value}
        onChangeText={(text) => setSearchText(text)}/>
  );
}

export default SearchButton;