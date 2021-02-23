import {StyleSheet} from 'react-native';
import {AppColors} from '../../config/appconstants';

export const detailStyle = StyleSheet.create({
  titleText: {
    color: AppColors.Black,
    fontSize: 24,
    backgroundColor: AppColors.DarkGrey,
    padding: 10,
  },
  descriptionText: {
    color: AppColors.Black,
    fontSize: 16,
    padding: 10,
  },
});
