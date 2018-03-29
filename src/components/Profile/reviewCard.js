import React, {Component} from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Avatar, Divider} from 'react-native-elements';
import StarRating from 'react-native-star-rating';


/**
 * Component doesn't render a card!! Must nest component within a card to get desired render layout
 *
 * Props: name, timestamp, rating
 * Fed in through Profile component
 */

export default class ReviewCard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.background}>
                <Grid>
                    <Col size={20}>
                        <Avatar
                            medium
                            rounded
                            source={{uri: "https://picsum.photos/200"}}
                        />
                    </Col>
                    <Col size={80}>
                        <Text style={styles.reviewName}>{this.props.name}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: '#cdcdcd', marginRight: 7}}>{this.props.timestamp}</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.props.starCount}
                                fullStarColor={'#e6e600'}
                                starSize={15}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                emptyStar={'ios-star-outline'}
                                iconSet={'Ionicons'}
                            />
                        </View>
                    </Col>
                </Grid>
                <View style={styles.reviewText}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Viverra maecenas accumsan lacus vel facilisis.
                        Ullamcorper a lacus vestibulum sed.
                    </Text>
                </View>
                <Divider style={{marginTop: 5, marginBottom: 18}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    background: {
        // backgroundColor: '#fafafa'
        flex: 1,
    },
    reviewName: {
        fontSize: 18,
        fontWeight: "400",
        color: '#3a5e72'
    },
    reviewText: {
        marginTop: 7,
    }
});