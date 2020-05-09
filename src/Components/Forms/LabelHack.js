import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    content:{
        marginLeft: '2%',
        marginTop: '5%'
    },
    textLabel: {
        color: '#93128D',
        fontWeight: 'bold',
        fontSize: 15
    }
})

const Label = ({children, label}) => {
    return(
        <View style={styles.content}>
            <Text style={styles.textLabel} >{label}</Text>
            {children}
        </View>
    );
}

export default Label;