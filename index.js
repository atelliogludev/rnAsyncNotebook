import {Navigation} from 'react-native-navigation';
import {HomeScreenNav, HomeStackId} from './src/config/navigationconfig';
import {NavigationRegister} from './src/config/navigationregister';

NavigationRegister();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: HomeStackId,
        children: [
          {
            component: {
              name: HomeScreenNav,
            },
          },
        ],
        options: {
          topBar: {
            title: {
              text: 'Notebook',
            alignment: 'center'
          }},
        },
      },
    },
  });
});
