import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating';

export class TutorCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Image
                    style={{width: 150, height: 150, borderRadius: 5}}
                    source={{uri: 'https://picsum.photos/200'}}
                />
                <Text>{this.props.tutorName}</Text>
                <Text>{this.props.subject}</Text>
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
                <Text>{this.props.starCount}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});