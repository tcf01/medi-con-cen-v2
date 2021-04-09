import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const TextInput = ({ children }) => {
    return (
        <TextInput>
            {children}
        </TextInput>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10
    }
})

export default TextInput