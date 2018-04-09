import React, {Component} from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ScrollView, Text} from 'react-native';
import { Button, Avatar, Rating, FormInput, FormLabel} from 'react-native-elements';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

export class tutorContact extends Component {
    static navigationOptions = {
        title: 'Book a tutor'
    };

    constructor(props){
        super(props);

        this.state = {
            info: '',
        }
    }

    componentDidMount(){

    }


    render(){
        const params = this.props.navigation.state.params;
        console.log(params);

        return(
            <View style={styles.container}>
                <View style={styles.infoWrap}>
                    <Avatar
                        xlarge
                        rounded
                        source={{uri: 'https://source.unsplash.com/oJUTLMxMsgE/300x300'}}
                    />
                    <Text style={styles.tutorName}>Alex Sagel</Text>
                    <Text style={styles.tutorField}>Computer Science</Text>
                    <Rating
                        type="star"
                        ratingCount={5}
                        startingValue={0}
                        imageSize={25}
                        ratingBackgroundColor="#a6a6a6s"
                        readonly
                    />
                </View>
                <View style={styles.formWrap}>
                    <FormLabel>Info</FormLabel>
                    <FormInput
                        placeholder='Describe what you need help with in a few words...'
                        multiline={true}
                        numberOfLines={3}
                        onChangeText={(info) => this.setState({info: info})}
                    />
                    <FormLabel>Select a date</FormLabel>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
       padding: 12,
   },
    infoWrap: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    tutorName: {
        marginLeft: 3,
        fontSize: 32,
        fontWeight: '400'
    },
    formWrap: {

    },

});