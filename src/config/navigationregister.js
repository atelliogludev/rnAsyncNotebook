import { Navigation } from "react-native-navigation";
import AddFormScreen from "../screens/addform";
import DetailScreen from "../screens/detail";
import HomeScreen from "../screens/home";
import { AddformScreenNav, DetailScreenNav, HomeScreenNav } from "./navigationconfig";

export const NavigationRegister = () => {
    Navigation.registerComponent(HomeScreenNav, () => HomeScreen);
    Navigation.registerComponent(AddformScreenNav, () => AddFormScreen);
    Navigation.registerComponent(DetailScreenNav, () => DetailScreen);
}