import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { FormInput, Button, FormLabel, FormValidationMessage} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';

export class SignUp extends Component {


    //From validation
    handleSubmit = () => {

        if (this.state.name.length > 1){
            this.setState({nameCheck: true})
        }  if (this.state.email.includes('@')){
            this.setState({emailCheck: true})
        }  if (this.state.pass.length >= 6){
            this.setState({passCheck: true});
            console.log("passCheck: " + this.state.passCheck)
        }  if (this.state.pass === this.state.passConfirm){
            this.setState({passConfirmCheck: true});
            console.log("passConfCheck" + this.state.passConfirmCheck)
        }

        if (this.state.nameCheck === false){
            this.setState({nameError: 'must enter a name!'});
            console.log(this.state.nameCheck);

        } else if (this.state.nameCheck === true){
            this.setState({nameError: ''});
            console.log(this.state.nameCheck);
        }

        if (this.state.emailCheck === false){
            this.setState({emailError: 'Must enter a valid email'});
            console.log("email check:" + this.state.emailCheck);
        } else if (this.state.emailCheck === true){
            this.setState({emailError: ''});
            console.log("email check:" + this.state.emailCheck);
        }

        if (this.state.passCheck === false){
            this.setState({passError: 'Password must be at least 6 characters'})
        } else if (this.state.passCheck === true){
            this.setState({passError: ''})
        }

        if (this.state.passConfirmCheck === false){
            this.setState({passConfirmError: "Passwords don't match"})
        } else if (this.state.passConfirmCheck === true){
            this.setState({passConfirmError: ''})
        }

        if (this.state.nameCheck && this.state.passCheck && this.state.emailCheck && this.state.passConfirmCheck === true){
            //All Good!
            firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.pass)
                .then((user) => {
                        user = firebase.auth().currentUser;
                        this.props.navigation.navigate('DrawerStack');
                    }
                );

        }

    };

    static navigationOptions = {
        title: "Sign Up",
        headerMode: 'float',
    };

    constructor(props){
        super(props);
        this.state = {
            name: '',
            nameCheck: false,
            nameError: '',

            email: '',
            emailCheck: false,
            emailError: '',

            pass: '',
            passCheck: false,
            passError: '',


            passConfirm: '',
            passConfirmCheck: false,
            passConfirmError: '',
        }
    }




    render(){
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/montuto_logo.png')} />
                </View>
                    <View style={styles.formGroup}>
                        <FormLabel>Name</FormLabel>
                        <FormInput
                            placeholder="Enter name"
                            value={this.state.name}
                            onChangeText={(name) => this.setState({name: name})}
                            style={{marginBottom: 10}}
                        />
                        <TextInput
                            editable={false}
                            defaultValue={this.state.nameError}
                            style={{color: '#F00'}}
                        />
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            placeholder='Enter email'
                            value={this.state.email}
                            onChangeText={(email) => this.setState({email: email})}
                            style={{marginBottom: 10}}
                        />
                        <TextInput
                            editable={false}
                            defaultValue={this.state.emailError}
                            style={{color: '#F00'}}
                        />
                        <FormLabel>Password</FormLabel>
                        <FormInput
                            placeholder='Enter password'
                            value={this.state.pass}
                            onChangeText={(pass) => this.setState({pass: pass})}
                            style={{marginBottom: 10}}
                            autoCorrect={false}
                            secureTextEntry={true}
                        />
                        <TextInput
                            editable={false}
                            defaultValue={this.state.passError}
                            style={{color: '#F00'}}
                        />
                        <FormLabel>Confirm Password</FormLabel>
                        <FormInput
                            placeholder='Enter password again!'
                            value={this.state.passConfirm}
                            onChangeText={(passConfirm) => this.setState({passConfirm: passConfirm})}
                            style={{marginBottom: 10}}
                            autoCorrect={false}
                            secureTextEntry={true}
                        />
                        <TextInput
                            editable={false}
                            defaultValue={this.state.passConfirmError}
                            style={{color: '#F00'}}
                        />

                    </View>
                <Button
                    title='Create Account'
                    large
                    rounded
                    onPress={this.handleSubmit}

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#fff',
       padding: 15,
       flex: 1,
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
    formGroup: {
        justifyContent: 'center',
        flexGrow: 1,
    }
});