import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Button, SearchBar, Icon, Card, List, ListItem} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {TutorCard} from "./TutorCard";
import firebase from 'react-native-firebase';


const tutorInfo = {
    name: '',
    field: '',
    rating: 0,
};


export class TutorPage extends Component {

    static navigationOptions = {
        drawerLabel: 'Find Tutors',
        drawerIcon: () => (
            <Icon
                name='search'
            />
        )
    };

    constructor(props){
        super(props);

        this.state = {
            tutorLoaded: false,
        }

    }

    componentWillMount(){
        /**
         * Cloud firestore calls
         * collections: hold groups of users (tutors/users)
         * doc: name by full names, contains all user data
         * */

        let docRef = firebase.firestore().collection('tutors').doc('Alex Sagel');
        docRef.get().then(function(doc) {
           if (doc.exists){
                console.log('doc data:', doc.data());

               tutorInfo.name = doc.data().name;
               tutorInfo.field = doc.data().field;
               tutorInfo.rating = doc.data().rating;



               this.setState({tutorLoaded: true});
               console.log(tutorInfo.rating);
           }
        }.bind(this));


    }



    render(){
        return(
            <View style={styles.container}>
                <SearchBar
                lightTheme
                round
                icon={{type: 'font-awesome', name: 'search'}}
                placeholder='Search by name or skill'
                containerStyle={{backgroundColor: '#fff', borderTopWidth: 0, borderBottomWidth: 0, marginBottom: 10,}}
                />
                    <View style={styles.row}>
                        <Icon
                            name='star'
                            color='#ADD8E6'/>
                        <Text style={{fontSize: 16, marginTop: 2}}>Featured tutors</Text>
                        <Text style={{marginLeft: 160,}} >See more</Text>
                        <Icon
                            name='keyboard-arrow-right'
                        />
                    </View>
                {/* Tutor cards */}
                <View style={{height: 190}}>
                    <Grid>

                        <Col size={33}>
                                <TutorCard
                                    tutorName={tutorInfo}
                                    subject={tutorInfo}
                                    starValue={tutorInfo}
                                />
                        </Col>
                        <Col size={33}>
                            {/* <TutorCard
                                tutorName='Eleanor Nash'
                                subject='Math'
                                starValue={4.5}
                            /> */}
                        </Col>
                        <Col size={33}>
                            {/* <TutorCard
                                tutorName='Andy Ramel'
                                subject='English'
                                starValue={4.2}
                            /> */}
                        </Col>

                    </Grid>
                </View>

                <Text style={styles.cardTitle}>Browse tutors</Text>
                <ScrollView>
                    <View>
                            <List containerStyle={{borderWidth: 0, marginTop: 5, marginBottom: 5, borderBottomWidth: 0, borderTopWidth: 0}}>
                                <ListItem
                                leftIcon={{name: 'flask', type: 'font-awesome'}}
                                title='Science'
                                containerStyle={styles.listStyle}
                                />
                                <ListItem
                                    leftIcon={{name: 'calculator', type: 'font-awesome'}}
                                    title='Math'
                                    containerStyle={styles.listStyle}
                                />
                                <ListItem
                                    leftIcon={{name: 'pencil', type: 'font-awesome'}}
                                    title='English'
                                    containerStyle={styles.listStyle}
                                />
                                <ListItem
                                    leftIcon={{name: 'music', type: 'font-awesome'}}
                                    title='Music'
                                    containerStyle={styles.listStyle}
                                />
                                <ListItem
                                    leftIcon={{name: 'globe', type: 'font-awesome'}}
                                    title='Geography'
                                    containerStyle={styles.listStyle}
                                />
                                <ListItem
                                    leftIcon={{name: 'users', type: 'font-awesome'}}
                                    title='Browse all'
                                    containerStyle={styles.listStyle}
                                />
                            </List>

                      </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       flexDirection: 'column',
       padding: 10,
       backgroundColor: '#fff',

   },
    row: {
       flexDirection: 'row',
        marginBottom: 5,
    },
    cardTitle: {
       marginTop: 10,
        color: '#75BDE4',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    },
    listStyle: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
    }
});

