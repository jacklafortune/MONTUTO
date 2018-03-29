import React, {Component} from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ScrollView} from 'react-native';
import { Button, Text, Avatar, Card, Icon, Rating } from 'react-native-elements';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarRating from 'react-native-star-rating';
import firebase from 'react-native-firebase';
import ReviewCard from '../Profile/reviewCard'

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
  * - To change Graph params update GraphRequest fields /me?...
  * - Permissions are requested in Login_Info.js inside LoginButton readPermissions array
  */

   /* _responseInfoCallback = (error, result) => {
        if (error) {
            console.log("FB SDK error  " + error.toString());
        } else {
            this.setState({name: result.name, pic: result.picture.data.url});
        }
    }; */

    componentWillMount(){
        /**
         * Cloud Firestore calls to fetch tutor data
         */
        let docRef = firebase.firestore().collection('tutors').doc('Alex Sagel');
        docRef.get().then(function(doc){
            if (doc.exists){
                this.setState({
                    name: doc.data().name,
                    field: doc.data().field,
                    about: doc.data().about,
                    skills: doc.data().skills,
                    rating: doc.data().rating,
                    availability: doc.data().availability,
                })
            }
        }.bind(this))



      /*  console.disableYellowBox = true;
        const infoRequest = new GraphRequest(
            '/me?fields=name,picture',
            null,
            this._responseInfoCallback
        );

        new GraphRequestManager().addRequest(infoRequest).start();

        this.googleUserData() */
    }

    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            name:'',
            field: '',
            skills: '',
            about: '',
            availability: [],

            pic: '',
            ratingCount: 23
        };
    }


    static navigationOptions = {
      drawerLabel: 'Find Tutor',
    };



    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                {/* Profile info section*/}
                <Grid>
                    <Col size={60}>
                        <View style={{marginLeft: 15}}>
                            <Text style={styles.name}>{this.state.name}</Text>
                            <Text style={{color: '#bdbdbd', marginLeft: 3, fontSize: 15}}>{this.state.field}</Text>

                            <View style={styles.starContainer}>
                                <Rating
                                    type="star"
                                    ratingCount={5}
                                    startingValue={this.state.rating}
                                    imageSize={25}
                                    ratingBackgroundColor="#a6a6a6s"
                                    readonly
                                />
                                <Text style={{marginLeft: 7.5, marginTop: 2.5, fontSize: 17, color: '#bdbdbd'}}>{this.state.ratingCount}</Text>
                        </View>
                        </View>
                        <View style={styles.contact_btn_wrap}>
                            <Button
                                title='Contact'
                                icon={{name: 'message'}}
                                rounded
                                backgroundColor="#2B98F0"
                                onPress={() => this.props.navigation.navigate('tutorContact')}
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
                            containerStyle={{marginRight: 5, marginTop: 10,}}
                        />
                    </Col>
                </Grid>

                {/* Skills card*/}
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.cardTitle}>
                       Skills
                    </Text>
                    <Text style={styles.cardText}>
                        {this.state.skills}
                    </Text>
                </Card>

                {/* About me*/}
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.cardTitle}>
                        About me
                    </Text>
                    <Text style={styles.cardText}>
                        {this.state.about}
                    </Text>
                </Card>

                {/* Availability */}
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.cardTitle}>Availability</Text>
                    <View style={styles.gridList}>
                        <View style={styles.blockFill}>
                            <Text style={{color: '#fff'}}>Mon</Text>
                        </View>
                        <View style={styles.block}>
                            <Text>Tue</Text>
                        </View>
                        <View style={styles.blockFill}>
                            <Text style={{color: '#fff'}}>Wed</Text>
                        </View>
                        <View style={styles.blockFill}>
                            <Text style={{color: '#fff'}}>Thu</Text>
                        </View>
                        <View style={styles.block}>
                            <Text>Fri</Text>
                        </View>
                        <View style={styles.block}>
                            <Text>Sat</Text>
                        </View>
                        <View style={styles.block}>
                            <Text>Sun</Text>
                        </View>
                    </View>
                </Card>

                {/* Reviews  */}
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.cardTitle}>Reviews</Text>
                    <View>
                        <ReviewCard name='Steven Marcus' starCount={3} timestamp='2h ago'/>
                        <ReviewCard name='Mark Marcusson' starCount={5} timestamp='6h ago'/>
                        <ReviewCard name='George Neery' starCount={4} timestamp='Dec 12, 2017'/>
                    </View>
                </Card>
            </View>
            </ScrollView>
        );
    }

    //Firebase Google User data fetch
  /*  googleUserData(){
        firebase.auth().onAuthStateChanged(function(user) {
         user = firebase.auth().currentUser;
        if (user != null){
            this.setState({name: user.displayName, pic: user.photoURL});
            console.log('grabbed google data!');
            console.log(user);
        } else {
            console.log('Google auth error');
            user = firebase.auth().currentUser;
            console.log(user);
        }
        }.bind(this));
    }

    signOut(){
        firebase.auth().signOut().done();
    }
    */

}



const styles = StyleSheet.create({
   container: {
       backgroundColor: '#fff',
       padding: 10,
       flex: 1,
       flexDirection: 'column'
   },
    name: {
        marginLeft: 3,
        fontSize: 32,
        fontWeight: "400",

    },
    starContainer: {
        marginTop: 15,
        flexDirection: 'row',

    },
    contact_btn_wrap: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 0,
    },
    cardTitle: {
       marginBottom: 8,
        color: '#75BDE4',
        fontWeight: 'bold',
        fontSize: 17
    },
    cardText: {
       fontSize: 15,
        color: '#848484'
    },
    gridList: {
       flexDirection: 'row',
    },
    blockFill: {
        width: 40,
        height: 40,
        backgroundColor: '#57C3F4',
        borderRadius: 5,
        borderWidth: .3,
        borderColor: '#dadada',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7,
    },
    block: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: .3,
        borderColor: '#dadada',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7
    },

    /**
     * ATTN: Shadow params are IOS only as of V0.54
     * Only elevation works on Android
     */
    cardStyle: {
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2.5,
        borderRadius: 5,
    }
});