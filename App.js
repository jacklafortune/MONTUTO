
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login }  from './src/components/login/login';
import { StackNavigator } from 'react-navigation';
import { Login_Info } from "./src/components/login/Login_Info";
import {Profile} from "./src/components/Profile/Profile";

 /* export default class App extends React.Component{
  render(){
    return(
        <Login_Info />
    )
  }
} */


 const RootStack = StackNavigator(
    {
        Home: {
            screen: Login,
        },
        Home_Login: {
            screen: Login_Info,
        },
        Profile: {
            screen: Profile,
        }
    }, {
        initialRouteName: 'Profile',
    }
);

export default class App extends React.Component {
    render(){
        return <RootStack />;
    }
}
