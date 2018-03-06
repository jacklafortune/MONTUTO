
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login }  from './src/components/login/login';
import { StackNavigator } from 'react-navigation';
import { Login_Info } from "./src/components/login/Login_Info";
import {Profile} from "./src/components/Profile/Profile";
import firebase from 'react-native-firebase';

/**
 * Navigation
 *
 * To add another screen to StackNavigator simply create object with component name and import component
 *
 */

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
        initialRouteName: 'Home_Login',
    }
);


  /* export default class App extends React.Component{
 render(){
   return(
       <RootStack />
   )
 }
} */

   export default class App extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: true,
        };
    }



    componentDidMount(){
        this.authSubscription =
            firebase.auth().onAuthStateChanged((user) => {
                this.setState({
                    loading: false,
                    user,
                });
            });
    }

    componentWillUnmount(){
        this.authSubscription();
    }

    render(){
          if (this.state.loading){
            return null;
        } else if (this.state.user){
            return <Profile />;
        } else {
            return <Login_Info />
        }

    }
}
