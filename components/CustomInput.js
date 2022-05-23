import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: 'bleu',
        borderWidth: .5,
        borderRadius: 5,

        paddingHorizontal:10,
        marginVertical:8
    },
    input: {
        paddingHorizontal: 10,
        marginHorizontal: 5
    }
})

export default CustomInput