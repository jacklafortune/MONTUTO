import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import {Button, SearchBar, Icon} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarRating from 'react-native-star-rating';
import {TutorCard} from "./TutorCard";


export class TutorPage extends Component {
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
                containerStyle={{backgroundColor: '#fff', borderWidth: 0, marginBottom: 20}}
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
                <View>
                    <Grid>
                        <Col size={33}>
                            <TutorCard
                                tutorName='Adam Maxwell'
                                subject='Chemistry'
                                starCount={4}
                            />
                        </Col>
                        <Col size={33}>

                        </Col>
                        <Col size={33}>

                        </Col>
                    </Grid>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       padding: 13,
       backgroundColor: '#fff',
   },
    row: {
       flexDirection: 'row',
    }
});

