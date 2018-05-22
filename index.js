import { AppRegistry } from 'react-native';
import { StatusBar } from 'react-native'
import App from './App';

StatusBar.setHidden(true)
AppRegistry.registerComponent('rndlayoutissue', () => App);
