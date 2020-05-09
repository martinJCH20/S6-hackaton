import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native'
import Label from './LabelHack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const styles = StyleSheet.create({
    contentInput: {
        height: 40,
        width: '90%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        borderColor:'#E4E4E4',
        flexDirection: 'row',
        marginTop: '2%'
    },
    contentIcon: {
        borderWidth: 1,
        borderRadius: 50,
        width: 38,
        height: '95%',
        borderColor: '#93128D',
        backgroundColor: '#93128D',
        justifyContent: 'center',
        paddingLeft: '2%',
        marginTop:'0.5%',
        marginLeft: '2%'
    },
    styleInput: {
        color:'black'
    }
})

const Input = ({ value, textLabel, onChange, holder, icon, type}) => {
    return(
        <Label label={textLabel}>
            <View style={styles.contentInput}>
                <View style={styles.contentIcon}>
                <FontAwesomeIcon icon={icon} size={ 23 } /></View>
                <TextInput value={value} onChangeText={onChange}  placeholder={holder} keyboardType={type} />
            </View>
        </Label>
    )
}

export default Input;