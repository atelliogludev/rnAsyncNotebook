import {StyleSheet} from 'react-native';
import {AppColors} from '../../config/appconstants';

export const homeStyle = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    flex: 5,
  },
  buttonView: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: AppColors.White,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.LightGrey,
  },
  homeSafeAreaView: {
    flex: 1,
    backgroundColor: AppColors.LightGrey,
  },
  addbuttonText: {
    fontSize: 42,
    color: AppColors.White,
    lineHeight: 48,
  },
  addbuttonView: {
    width: 60,
    height: 60,
    backgroundColor: AppColors.Green,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
  },
  addbuttonTouchable: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  searchTextInput: {
    backgroundColor: AppColors.White,
    height: 40,
    margin: 10,
    borderColor: AppColors.DarkGrey,
    borderWidth: 1,
  }
});
