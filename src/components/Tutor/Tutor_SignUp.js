import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';

export class Tutor_SignUp extends Component {

    static navigationOptions = {
        title: 'Tutor Sign Up'
    };

    constructor(props){
        super(props);

        this.state = {
            name: '',
            field: '',
            skills: [],
            about: '',
            availability: [],
        };

        this.ref = firebase.firestore().collection('tutors');
    }

    tutorSubmit = () => {
        this.ref.doc(this.state.name).set({
            name: this.state.name,
            field: this.state.field,
            about: this.state.about,
            rating: 0,
        }).then(
            console.log('doc written to success!')
        ).catch(
            console.log('error writing to doc')
        );

      console.log(this.state.field);

        this.setState({
            name: '',
            field: '',
            skills: [],
            about: '',
            availability: [],
        })
    };


    render (){
        return(
            <View style={styles.container}>
                <View>
                    <FormLabel>Name</FormLabel>
                    <FormInput
                        onChangeText={(name) => this.setState({name: name})}
                        placeholder='Enter your full name'
                        value={this.state.name}
                    />


                    <FormLabel>Field of study</FormLabel>
                    <Picker
                        selectedValue={this.state.field}
                        onValueChange={(itemValue, itemIndex) => this.setState({field: itemValue})}>

                        <Picker.Item label="Math" value='math'/>
                        <Picker.Item label="Science" value='science'/>
                        <Picker.Item label="English" value='english'/>
                        <Picker.Item label="French" value='french'/>
                        <Picker.Item label="Art" value='art'/>
                        <Picker.Item label="Music" value='music'/>
                    </Picker>

                    <FormLabel>About me</FormLabel>
                    <FormInput
                        onChangeText={(about) => this.setState({about: about})}
                        placeholder='Enter a few words about yourself'
                        value={this.state.about}
                        multiline={true}
                        numberOfLines={4}
                    />
                <Button
                    rounded
                    title='Done!'
                    large
                    onPress={this.tutorSubmit}
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       padding: 15,
       backgroundColor: '#fff',
       flex: 1,
   }
});
