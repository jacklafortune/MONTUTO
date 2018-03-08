import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import {StackNavigator} from 'react-navigation';


export class Login extends Component {
    static navigationOptions = {
       header: null
    };

    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/montuto_logo.png')} />
                    </View>


                <View style={styles.btn_container}>
                    <Button
                        title='Login'
                        large
                        rounded
                        backgroundColor="#2B98F0"
                        buttonStyle={{marginBottom: 15}}
                        onPress={() => this.props.navigation.navigate('login_info')}
                    />
                    <Button
                        title='Create Account'
                        large
                        rounded
                        outline
                        color="#2B98F0"
                        buttonStyle={{marginBottom: 20}}
                        onPress={() => this.props.navigation.navigate('signUp')}
                    />

                 </View>
                    <View style={styles.text_wrap}>
                        <Text style={styles.text_btn} onPress={() => this.props.navigation.navigate('tutorSignUp')}>
                            Become a tutor
                        </Text>
                    </View>
                </View>
        );
    }
}

//styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        flex: 1,
        flexDirection: 'column'
    },
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
    btn_container: {
        padding: 10,
    },
    text_btn: {
        textDecorationLine: 'underline',
        fontWeight:'bold',
        color:"#2B98F0",
        marginBottom: 20,
    },
    text_wrap:{
      alignItems: 'center',
    }

});