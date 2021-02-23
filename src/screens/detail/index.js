import React from 'react';
import { SafeAreaView, Text } from "react-native";
import { StorageNoteKey } from '../../config/appconstants';
import { detailStyle } from './detailStyle';

export default class DetailScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SafeAreaView>
                <Text style={detailStyle.titleText}>
                    {this.props.data.title}
                </Text>
                <Text style={detailStyle.descriptionText}>
                    {this.props.data.input}
                </Text>
            </SafeAreaView>
        )
    }
}