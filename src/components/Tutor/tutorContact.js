import React, {Component} from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ScrollView, Text} from 'react-native';
import { Button, } from 'react-native-elements';

export class tutorContact extends Component {

    static navigationOptions = {
        title: 'Book a tutor'
    };

    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
   },
});