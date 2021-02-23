import { StyleSheet } from "react-native";
import { AppColors, WindowWidth } from "../../config/appconstants";

export const addformStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        padding: 10,
        backgroundColor: AppColors.LightGrey
    },
    textInput: {
        height: 40, 
        borderColor: AppColors.DarkGrey, 
        borderWidth: 1,
        backgroundColor: AppColors.White,
        padding: 10
    },
    bigTextInput: {
        marginTop: 20,
        borderColor: AppColors.DarkGrey, 
        borderWidth: 1,
        backgroundColor: AppColors.White,
        padding: 10,
        textAlignVertical: "top"
    },
    saveOpacity: {
        width: WindowWidth - 20,
        height: 50,
        backgroundColor: AppColors.Green,
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 20
    },
    saveText: {
        color: AppColors.White,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 18
    }
})