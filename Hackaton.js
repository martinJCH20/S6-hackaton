import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from 'react-native';

//import { LinearGradient } from 'expo-linear-gradient';
import Input from './src/Components/Forms/InputHack';
import DatePicker from 'react-native-datepicker'
import { faUser, faEnvelope, faMobile, faCalendar } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    container: {
        position:'relative',
        flex: 1,
        backgroundColor: '#DCDEE1',
        height: '100%'
      },
    header: {        
        position:'absolute',
        backgroundColor: '#cb60b3',
        height: '35%',
        width: '100%',
    },
    containerOptions: {
        position:'absolute',
        backgroundColor: '#FFFFFF',
        height: '75%',
        width: '90%',
        marginTop: '35%',
        marginLeft: '5%',
        marginRight: '5%',
        shadowColor: "#000",
        shadowOpacity:  0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginTop: '5%',
        fontFamily: 'fantasy',
        fontWeight: 'bold'
    }
})

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          user:'',
          email:'',
          phoneNumber:'',
          date: ''
        }
      }
render(){
    const { user, email, phoneNumber, date } = this.state;
    return (
        <>
        <View style={styles.container}>
        <View style={styles.header}>
            
        </View>
            <View style={styles.containerOptions}>
            <ScrollView>
                <Text style={styles.title}>USER PROFILE</Text>
                <Input value={user} type='default' onChange={(user) => this.setState({ user})} textLabel={'User Name'} 
                holder={'Enter User Name'} icon={faUser} />
                <Input value={email} type='email-address' onChange={(email) => this.setState({ email})} textLabel={'E-mail'} 
                holder={'Enter E-mail'} icon={faEnvelope} />
                <Input value={phoneNumber} type='phone-pad' onChange={(phoneNumber) => this.setState({ phoneNumber})} textLabel={'Mobile Number'} 
                holder={'Enter your 10 digit mobile number'} 
                icon={faMobile} />
                <Input value={date} type='default' onChange={(date) => this.setState({ date})} textLabel={'Date of Birth'} 
                holder={'DD / MM / YYYY'} 
                icon={faCalendar} />
                {/* <DatePicker format="DD/MM/YYYY" mode="date"
                customStyles={{
                    dateIcon: {
                      display: 'none'
                    }
                  }}
                 /> */}
            </ScrollView>
            </View>
        </View>
        </>
    )
}
}