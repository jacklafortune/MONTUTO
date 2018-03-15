
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon, Header} from 'react-native-elements';
import { Login }  from './src/components/login/login';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Login_Info } from "./src/components/login/Login_Info";
import {Tutor_SignUp} from './src/components/Tutor/Tutor_SignUp';
import {Profile} from "./src/components/Profile/Profile";
import firebase from 'react-native-firebase';
import {SignUp} from "./src/components/login/SignUp";
import {TutorPage} from "./src/components/Tutor/TutorPage";

/**
 * Navigation
 *
 * To add another screen to StackNavigator simply create object with component name and import component
 *
 */
const LoginStack = StackNavigator({
        loginScreen: {screen: Login},
        login_info: {screen: Login_Info},
        signUp: {screen: SignUp},
        tutorSignUp: {screen: Tutor_SignUp},
        profile: {screen: Profile}

    },
    {

        // initialRouteName: 'signUp',
    });

const DrawerStack = DrawerNavigator({
    tutorPage: {screen: TutorPage},
    profile: {screen: Profile},


});



const DrawerNavigation = StackNavigator({
    DrawerStack:
        {screen: DrawerStack}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerLeft:
            <View style={{marginLeft: 15}}>
                <Icon
                onPress={() => navigation.navigate('DrawerOpen')}
                name='menu'>
                    </Icon>
            </View>
    })

});

const PrimaryNav = StackNavigator({
    loginStack: {screen: LoginStack},
    drawerStack: {screen: DrawerNavigation}
},
    {
        headerMode: 'none',
        initialRouteName: 'drawerStack'
    }
    );


  const RootStack = StackNavigator(
    {
        Home: {
            screen: Login,
        },
        home_Login: {
            screen: Login_Info,
        },
        Profile: {
            screen: Profile,
        },
        Tutor_SignUp: {
            screen: Tutor_SignUp,
        }
    }, {
        initialRouteName: 'home_Login',
    },

);




   export default class App extends React.Component{

 render(){
   return(
       <DrawerNavigation />
   )
 }
}

  /* export default class App extends React.Component {

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
        }  if (this.state.user){
            return <PrimaryNav />;
        } else {
            return <LoginStack />
        }
    }
} */
