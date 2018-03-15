import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating';
import { Rating} from 'react-native-elements';

export class TutorCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Image
                    style={{width: 115, height: 115, borderRadius: 5}}
                    source={{uri: 'https://source.unsplash.com/featured/?portrait'}}
                />
                <Text style={{fontSize: 18}}>{this.props.tutorName}</Text>
                <Text style={{color: '#a6a6a6'}}>{this.props.subject}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Rating
                        type="star"
                        ratingCount={5}
                        startingValue={this.props.starValue}
                        imageSize={16}
                        ratingBackgroundColor="#a6a6a6s"
                    />

                </View>
            </View>
        )
    }
}