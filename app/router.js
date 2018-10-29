import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

//importing screens 
import OtherDevices from './screens/OtherDevices';
import IRScreen from './screens/IRScreen';
import GetStatus from './screens/GetStatus';
import Profile from './screens/Profile';

//let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
//shows the 1st tab
    'Lists': {
        screen: GetStatus,
        navigationOptions: {
            tabBarLabel: 'wifi remote',
            tabBarIcon: ({tintColor}) => <Icon name="wifi" type="MaterialIcons" size={28} color={tintColor}/>
        },
    },
 //shows the 2nd tab   
    'IRScreen': {
        screen: IRScreen,
        navigationOptions: {
            tabBarLabel: 'Ir remote',
            tabBarIcon: ({tintColor}) => <Icon name="settings-remote" type="MaterialIcons" size={28} color={tintColor}/>
        },
    },
//shows the 3rd tab
    'OtherDevices': {
        screen: OtherDevices,
        navigationOptions: {
            tabBarLabel: 'Other Devices',
            tabBarIcon: ({tintColor}) => <Icon name="devices-other" type="MaterialIcons" size={28} color={tintColor}/> 
        },
    },
//shows the 4th tab
    'My Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-person" type="ionicon" size={28} color={tintColor}/>
        },
    },
});

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            Tabs: { //shows the bottom tab bar 
                screen: Tabs,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
        },
        {
            headerMode: "none",
            mode: "card"
        }
    );
};