import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import {FormLabel, FormInput, Button, SocialIcon} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';

let newAvail = [];

export class Tutor_SignUp extends Component {

    static navigationOptions = {
        title: 'Tutor Sign Up'
    };

    constructor(props){
        super(props);

        this.state = {
            name: '',
            field: '',
            skills: '',
            about: '',
            availability: [],
        };

        this.ref = firebase.firestore().collection('tutors');
    }

    //TODO: Bug: doesn't set index 0 in state
    availSelect(index){
       switch (index){
           case 0:
               newAvail.push('monday');
               break;
           case 1:
               newAvail.push('tuesday');
               break;
           case 2:
               newAvail.push('wednesday');
               break;
           case 3:
               newAvail.push('thursday');
               break;
           case 4:
               newAvail.push('Friday');
       }
       console.log(newAvail);

       console.log('state:' + this.state.availability);
    }



    tutorSubmit = () => {
        this.setState({availability: newAvail});

        this.ref.doc(this.state.name).set({
            name: this.state.name,
            skills: this.state.skills,
            field: this.state.field,
            about: this.state.about,
            availability: this.state.availability,
            rating: 0,
            ratingCount: 0,
        }).then(
            console.log('doc written to success!')
        ).catch(
            console.log('error writing to doc')
        );

       console.log(this.state.availability);

        this.setState({
            name: '',
            field: '',
            skills: '',
            about: '',
            availability: [],
        });

        newAvail = newAvail[''];
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
                    <FormLabel>Skills</FormLabel>
                    <FormInput
                        onChangeText={(skills) => this.setState({skills: skills})}
                        placeholder='Enter some of your skills'
                        value={this.state.skills}
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

                    <FormLabel>Availability</FormLabel>
                    <View style={styles.btn_container}>
                        <Button
                            title='Mon'
                            onPress={() => this.availSelect(0)}
                            buttonStyle={{width: 50, height: 50, marginRight: 0}}
                        />
                        <Button
                            title='Tue'
                            onPress={() => this.availSelect(1)}
                            buttonStyle={{width: 50, height: 50}}
                        />
                        <Button
                            title='Wed'
                            onPress={() => this.availSelect(2)}
                            buttonStyle={{width: 50, height: 50}}
                        />
                        <Button
                            title='Thu'
                            onPress={() => this.availSelect(3)}
                            buttonStyle={{width: 50, height: 50}}
                        />
                        <Button
                            title='Fri'
                            onPress={() =>this.availSelect(4)}
                            buttonStyle={{width: 50, height: 50}}
                        />
                    </View>

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
   },
    btn_container: {
       flexDirection: 'row',
        margin: 10,
    }
});
