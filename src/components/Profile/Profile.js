import React, {Component} from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Button, Text, Avatar, Card, Icon } from 'react-native-elements';
import {StackNavigator} from 'react-navigation';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarRating from 'react-native-star-rating';


//FB SDK
const FBSDK = require('react-native-fbsdk');
const {
    GraphRequest,
    GraphRequestManager,
} = FBSDK;

export class Profile extends Component {

 /**
  * FBSDK Graph API
  *
  * - To change Graph params update GraphRequest fields
  * - Permissions are requested in Login_Info.js inside LoginButton readPermissions array
  */

    _responseInfoCallback = (error, result) => {
        if (error) {
            alert('Error fetching data: ' + error.toString());
        } else {
            this.setState({name: result.name, pic: result.picture.data.url});
        }
    };

    componentWillMount(){
        const infoRequest = new GraphRequest(
            '/me?fields=name,picture',
            null,
            this._responseInfoCallback
        );

        new GraphRequestManager().addRequest(infoRequest).start();
    }


    constructor(props) {
        super(props);
        this.state = {
            starCount: 4.5,
            name:'',
            pic: ''
        };
    }


    static navigationOptions = {
      title: 'Find Tutor'
    };



    render(){
        return(
            <View style={styles.container}>
                {/* Profile info section*/}
                <Grid>
                    <Col size={60}>
                        <Text h3>{this.state.name}</Text>
                        <Text style={{color: '#bdbdbd'}}>Computer Science tutor</Text>

                        <View style={styles.starContainer}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starCount}
                                fullStarColor={'yellow'}
                                starSize={30}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                emptyStar={'ios-star-outline'}
                                iconSet={'Ionicons'}
                            />
                            <Text style={{marginLeft: 7.5, marginTop: 10}}>{this.state.starCount}</Text>
                        </View>
                        <View style={styles.contact_btn_wrap}>
                            <Button
                                title='Contact'
                                icon={{name: 'message'}}
                                rounded
                                backgroundColor="#2B98F0"
                            />
                            <TouchableOpacity
                                style={{
                                    borderWidth:1,
                                    borderColor:'rgba(0,0,0,0.2)',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    width:40,
                                    height:40,
                                    backgroundColor:'#2B98F0',
                                    borderRadius:100,
                                    marginTop: 2.5,
                                }}>
                                <Icon
                                    name='play-arrow'
                                    color='white'
                                />
                            </TouchableOpacity>
                        </View>
                    </Col>
                    <Col size={40}>
                        <Avatar
                            xlarge
                            rounded
                            source={{uri:this.state.pic}}
                            containerStyle={{marginRight: 5}}
                        />
                    </Col>
                </Grid>

                {/* Skills card*/}
                <Card
                    title='Skills'>
                    <Text style={{marginBottom: 10}}>
                        Testing this react thingy
                    </Text>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#F7FDFE',
       padding: 10,
       marginTop:10,
       flex: 1,
       flexDirection: 'column'
   },
    starContainer: {
        marginTop: 15,
        flexDirection: 'row',

    },
    contact_btn_wrap: {
        flexDirection: 'row',
        marginTop: 15,
    },
});