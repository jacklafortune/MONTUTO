import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

//FB SDK
const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
} = FBSDK;


export class Login_Info extends Component {
    static navigationOptions = {
      title: 'Home_Login',
        headerStyle: {
          backgroundColor: '#fff'
        }
    };

    constructor(props){
        super(props);
        this.state={
            text: ''
        };
    }


    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/montuto_logo.png')} />
                </View>

                <View style={styles.formGroup}>
                    <FormInput onChangeText={(text) => this.setState({text})}
                               value={this.state.text}
                               placeholder="Your email"
                    />

                    <FormInput onChangeText={(text) => this.setState({text})}
                               value={this.state.text}
                               placeholder="Password"
                    />
                </View>
                <View style={{alignItems:'center', marginBottom: 15, }}>
                    <Text style={{color: '#bdbdbd'}}>Or, login with</Text>
                </View>

                <View style={styles.btn_group}>
                    <LoginButton
                        readPermissions={["public_profile email"]}
                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    alert("Login failed with error: " + result.error);
                                } else if (result.isCancelled) {
                                    alert("Login was cancelled");
                                } else {
                                    alert("Login was successful with permissions: " + result.grantedPermissions)
                                    this.props.navigation.navigate("Profile");
                                }
                            }
                        }
                        onLogoutFinished={() => alert("User logged out")}
                    />

                    <Button
                        title="Google"
                        icon={{name: 'google', type: 'font-awesome'}}
                        rounded
                        large
                        backgroundColor="#ED312B"
                    />
                </View>
                <View style={{alignItems: 'center', marginBottom: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#bdbdbd'}}>Not registered yet?</Text>
                        <Text style={{color:'#add8e6'}}> Sign up now</Text>
                    </View>
                </View>

            </View>
                <Button
                    title="Login"
                    backgroundColor="#2B98F0"
                    buttonStyle={{height: 70, marginBottom: 5}}
                    fontSize={20}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       flexDirection: 'column',
       padding: 10,
       backgroundColor: '#fff'

   } ,
    loginContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    formGroup: {
       justifyContent: 'center',
    },
    btn_group: {
       flexDirection:'row',
       justifyContent: 'center',
        marginBottom: 20,
    },
});