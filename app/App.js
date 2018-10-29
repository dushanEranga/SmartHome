import {createRootNavigator} from './router'

export default createRootNavigator();

//To disable the yellow warnings
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Remote debugger']);


