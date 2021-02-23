import React from "react"
import { Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { Navigation } from "react-native-navigation"
import { AddformScreenNav, HomeStackId } from "../../../config/navigationconfig"
import { homeStyle } from "../homeStyle"

export const AddButton = () => {
    return(
        <TouchableOpacity style={homeStyle.addbuttonTouchable} onPress={() => {
            Navigation.push(HomeStackId, {
                component: {
                    name: AddformScreenNav
                }
            })
        }}>
            <View style={homeStyle.addbuttonView}>
                <Text style={homeStyle.addbuttonText}>{"+"}</Text>
            </View>
        </TouchableOpacity>
    )
}