import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import { Form as LoginForm } from '../../components/molecules/form/index.js';
import FormField from '../../components/molecules/form/FormFields.js';

const HomeScreen = ({ navigation }) => {
    const [formValues, setFormValues] = useState({ username: "", password: "" })
    const loginFormFields = [
        {
            showName: 'Username',
            fieldName: 'username',
            placeHolder: 'Enter here',
            type: 'text',
            onChangeHandler: (val) => {
                console.log(val);
                setFormValues({ ...formValues, username: val })
            },
            iconInfo: {
                name: "user-o",
                color: "#05357a",
                size: 20
            }
        },
        {
            showName: 'Password',
            fieldName: "password",
            placeHolder: 'Enter here',
            type: 'password',
            onChangeHandler: (val) => { setFormValues({ ...formValues, password: val }) },
            iconInfo: {
                name: "user-o",
                color: "#05357a",
                size: 20
            }
        }
    ];

    return (
        <SafeAreaView>
            <View style={styles.innerContentWrapper}>
                <Text style={styles.innerContentText}>MediConCen Clinic System</Text>
                <LoginForm formFields={loginFormFields} buttonText={'Login'} >
                    <View>
                        {loginFormFields.map((formField, i) => (
                            <FormField key={`form-field-${formField.fieldName}-${i}`} formValues={formValues} type={formField.type} fieldName={formField.fieldName} {...formField} />))
                        }
                    </View>
                    <TouchableOpacity
                        // onPress={() => }
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Login</Text>
                    </TouchableOpacity>
                    {/* <Button title={buttonText} onPress={handleOnSubmit} /> */}

                </LoginForm>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RegisterScreen')}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    innerContentWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        width: "100%",
        height: "100%",

        // borderWidth: 1,
        // borderColor: "#333",
        // borderStyle: "solid",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

        //box shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15
    },
    innerContentText: {
        fontSize: 25
    }
})

export default HomeScreen;