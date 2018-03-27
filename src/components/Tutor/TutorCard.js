import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating';
import { Rating} from 'react-native-elements';

let rating;

export class TutorCard extends Component {
    constructor(props){
        super(props);

    }

    componentDidUpdate(){
        rating = this.props.starValue.rating;
        console.log(this.props.starValue.rating);
    }

    //TODO: Rating is rendering wrong starting value. But rating is logging right amount
    render(){
        return(
            <View>
                    <Image
                        style={{width: 117, height: 117, borderRadius: 5}}
                        source={{uri: 'https://source.unsplash.com/featured/?portrait'}}
                    />

                <Text style={{fontSize: 18}}>{this.props.tutorName.name}</Text>
                <Text style={{color: '#a6a6a6'}}>{this.props.subject.field}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Rating
                        type="star"
                        ratingCount={5}
                        startingValue={rating}
                        imageSize={16}
                        ratingBackgroundColor="#a6a6a6s"
                        readonly
                    />

                </View>
            </View>
        )
    }
}