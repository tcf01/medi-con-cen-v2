import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const FormField = ({ children, iconInfo, formValues, validateType, showName, fieldName, customTextStyle, customTitleStyle, type, onChangeHandler, errorHandler, ...props }) => {
    const [error, setError] = useState("")
    const textStyle = [styles.textInput, customTextStyle ? customTextStyle : null].filter(Boolean)
    const titleStyle = [styles.title, customTitleStyle ? customTitleStyle : null].filter(Boolean)
    const isPassword = type === "password" ? true : false


    const handleOnChange = (val, changeFieldName) => {
        onChangeHandler(val, changeFieldName)
    }

    const handleError = (errorMsg, fieldName) => {
        errorHandler && errorHandler(errorMsg, fieldName)
    }

    const validate = (e, type) => {
        const val = e.nativeEvent.text;

        if (val !== "") {
            if (type === "email") {
                const emailPattern = /\S+@\S+\.\S+/

                if (emailPattern.test(val)) {
                    setError("")

                } else {
                    setError("Invalid Email pattern")

                }
            } else if (type === "number") {
                const pricePattern = /\d+/

                if (pricePattern.test(val)) {
                    setError("")
                } else {
                    setError("This should be number")
                }
            } else {
                setError("")
            }
        } else {
            setError("Field cannot be blank")
        }

    }

    useEffect(() => {
        handleError(error, fieldName)
    }, [error])


    return (
        <View style={styles.formFieldWrapper}>
            <Text style={titleStyle}>{showName}</Text>
            {children
                ? children
                : (
                    <View style={styles.iconTextWrapper}>
                        <View style={styles.inputRow}>
                            {iconInfo !== undefined && <FontAwesome style={styles.icon} {...iconInfo} />}

                            <TextInput autoCapitalize={"none"}
                                style={textStyle}
                                onChangeText={(val) => handleOnChange(val, fieldName)}
                                secureTextEntry={isPassword}
                                onBlur={(e) => validate(e, validateType)}
                                {...props}
                            >
                                {formValues[fieldName] || ""}
                            </TextInput>
                        </View>

                        <Text style={{ fontSize: 10, color: "red" }}>{error}</Text>
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
    inputRow: {
        display: "flex",
        flexDirection: "row"
    },
    iconTextWrapper: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
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
