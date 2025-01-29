/**
 * @format
 */
// import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import demo from './Demo';

// AppRegistry.registerComponent(appName,()=>demo);

AppRegistry.registerComponent(appName, () => App);
