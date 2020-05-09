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
        height: '40%',
        width: '100%',
    },
    containerOptions: {
        position:'absolute',
        backgroundColor: '#FFFFFF',
        height: '70%',
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        zIndex: 100
    }
})

export default class App extends Component {
render(){
    return (
        <>
        <View style={styles.container}>
        <View style={styles.header}></View>
            <View style={styles.containerOptions}></View>
        </View>
        </>
    )
}
}