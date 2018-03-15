import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Button, SearchBar, Icon, Card, List, ListItem} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {TutorCard} from "./TutorCard";


export class TutorPage extends Component {

    static navigationOptions = {
        title: 'Tutors',
    };

    constructor(props){
        super(props)
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

                    <Grid>
                        <Col size={33}>
                       <TutorCard
                        tutorName='Max Maxwell'
                        subject='Chemistry'
                        starValue={4}
                       />
                        </Col>
                        <Col size={33}>
                            <TutorCard
                                tutorName='Eleanor Nash'
                                subject='Math'
                                starValue={4.5}
                            />
                        </Col>
                        <Col size={33}>
                            <TutorCard
                                tutorName='Andy Ramel'
                                subject='English'
                                starValue={4.2}
                            />
                        </Col>
                    </Grid>


                <ScrollView>
                    <View>
                        <Text style={styles.cardTitle}>Browse tutors</Text>

                            <List containerStyle={{borderWidth: 0, marginTop: 10, marginBottom: 30}}>
                                <ListItem
                                leftIcon={{name: 'flask', type: 'font-awesome'}}
                                title='Science'
                                />
                                <ListItem
                                    leftIcon={{name: 'calculator', type: 'font-awesome'}}
                                    title='Math'
                                />
                                <ListItem
                                    leftIcon={{name: 'pencil', type: 'font-awesome'}}
                                    title='English'
                                />
                                <ListItem
                                    leftIcon={{name: 'music', type: 'font-awesome'}}
                                    title='Music'
                                />
                                <ListItem
                                    leftIcon={{name: 'globe', type: 'font-awesome'}}
                                    title='Geography'
                                />
                                <ListItem
                                    leftIcon={{name: 'users', type: 'font-awesome'}}
                                    title='Browse all'
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
        fontSize: 17
    },
});

