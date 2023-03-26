import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
  } from 'react-native';

const Advertisement = (props: {adText: string, adImage: ImageSourcePropType}) => {
  return (
    <View style={styles.adContainer}>
    <View style={styles.adLeftHalf}>
        <Text style={styles.adLeftText}>{props.adText}</Text>
    </View>
    <View style={styles.adRightHalf}>
        <Image style={styles.adImage} source={props.adImage}/>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    adContainer: {
        position: "relative",
        width: Dimensions.get("screen").width - 50,
        marginRight: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation: 3,
    },
    adLeftHalf: {
        position: "absolute",
        backgroundColor: "#3669C9",
        padding: 10,
        width: "50%",
        height: "100%",
        zIndex: 50,
        borderRadius: 20,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100
    },
    adLeftText: {
        top: 40,
        width: "70%",
        color: "#FFFFFF",
        fontSize: 24
    },
    adRightHalf: {
        position: "absolute",
        right: 0,
        width: "75%",
        height: "100%",
    },
    adImage: {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: "100%",
        height: "100%",
    },
})

export default Advertisement