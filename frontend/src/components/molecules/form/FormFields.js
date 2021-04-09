import React from 'react';
import { StyleSheet, View, TextInput, Text as Title } from 'react-native';
// import FontAwesome  from 'react-native-vector-icons/FontAwesome';

const FormField = ({ iconInfo, formValues, showName, fieldName, type, onChangeHandler, ...props }) => {
    return (
        <View style={styles.formFieldWrapper}>
            <Title style={styles.title}>{showName}</Title>
            <View style={styles.action}>
                {/* {iconInfo !== undefined ? <FontAwesome {...iconInfo} /> : null} */}
                <TextInput style={styles.textInput} onChangeText={onChangeHandler} secureTextEntry={type === "password" ? true : false} {...props}>{formValues[fieldName] || ""}</TextInput>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    formFieldWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    },
    title: {
        padding: 10,
        fontSize: 20,
        color: "black"
    },
    /* textInput: {
       ,

        backgroundColor: "white",
        borderRadius: 30,
        width: "100%",
        height: 35,
        marginBottom: 20,
        alignItems: "center",
    }, */
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        borderColor: "#333",
        borderStyle: "solid",
        borderRadius: 30,
        backgroundColor: "white",
        padding: 10,
        fontSize: 12,
        color: "black",

        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
})

export default FormField;