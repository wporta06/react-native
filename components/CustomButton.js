import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ text, onPress, type = 'PRIMARY', bgColor, fgColor }) => {
    return (
        <Pressable onPress={onPress} style={[
            styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}
        ]}>
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}]}
            >
                {text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",

        padding: 15,
        marginVertical: 5,

        alignItems: "center",
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: "#3B71F3",
    },
    container_TERTIRY: {},
    container_SECONDARY: {
        boderColor: "#3B71F3",
        borderWidth:1
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_TERTIRY: {
        color: 'gray'
    },
    text_SECONDARY: {
        color: "#3B71F3"
    }
})

export default CustomButton