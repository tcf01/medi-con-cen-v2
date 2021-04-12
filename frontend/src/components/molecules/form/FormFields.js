import React from 'react';
import { StyleSheet, View, TextInput, Text as Title, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FormField = ({ children, iconInfo, formValues, showName, fieldName, customTextStyle, customTitleStyle,type, onChangeHandler, ...props }) => {
    const handleOnChange = (val, changeFieldName) => {
        onChangeHandler(val, changeFieldName)
    }

    return (
        <View style={styles.formFieldWrapper}>
            <Title style={[styles.title, customTitleStyle ? customTitleStyle : null].filter(Boolean)}>{showName}</Title>
            {children
                ? children
                : (
                    <View style={styles.iconTextWrapper}>
                        {iconInfo !== undefined ? <FontAwesome style={styles.icon} {...iconInfo} /> : null}
                        <TextInput autoCapitalize={"none"}
                            style={[styles.textInput, customTextStyle ? customTextStyle : null].filter(Boolean)} onChangeText={(val) => handleOnChange(val, fieldName)} secureTextEntry={type === "password" ? true : false} {...props}>{formValues[fieldName] || ""}</TextInput>
                    </View>
                )
            }
        </View>
    )
};


const styles = StyleSheet.create({
    formFieldWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        ,
        marginRight: 5
    },
    title: {
        padding: 10,
        fontSize: 20,
        color: "black"
    },
    iconTextWrapper: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },
    textInput: {
        flex: 1,
        padding: 10,
        fontSize: 12,
        color: "black",
        height: "100%",
        paddingLeft: 10,
        borderColor: "#333",
        borderStyle: "solid",
        borderRadius: 5,
        backgroundColor: "white",
        marginTop: Platform.OS === 'ios' ? 0 : -12,
    }
})

export default FormField;
