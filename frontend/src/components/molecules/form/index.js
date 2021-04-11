import React from 'react';
import { View, StyleSheet } from 'react-native';



export const Form = ({ formFields, buttonText, handleOnSubmit, children, ...props }) => {
    return (
        <View style={styles.formFieldWrapper}>
            <View style={styles.formFieldWrapper} >
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formFieldWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    formContentWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    }
})

