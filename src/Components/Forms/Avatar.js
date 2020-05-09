import React from 'react';
import {View, ImageBackground, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    content:{
        borderWidth: 1,
        borderRadius: 75,
        width: 125,
        height: 125,
        marginTop: '-20%'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
})

const Avatar = ({ image, eventOnclickImg }) => {
    return(
        <View style={styles.content} onTouchStart={() => alert('Esta funcionalidad aún no se encuentra habilitada')} >
            <ImageBackground source={image} style={styles.image} />
        </View>
    )
}

export default Avatar;