import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import FormField from '../../components/molecules/form/FormFields.js';
import { GlobalContext } from '../../contexts/index.js';
import { callApi } from '../../utils/api.js';
import { APP_API_LIST } from '../../constants/api.js';
import ACTION from '../../constants/dispatchActionType';


const registerFormFields = [
    {
        showName: 'Email',
        fieldName: 'email',
        placeHolder: 'Enter here',
        type: 'text',
        // onChangeHandler: (val) => { setFormValues({ ...formValues, email: val }) },
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
        // onChangeHandler: (val) => { setFormValues({ ...formValues, password: val }) },
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Clinic Name',
        fieldName: "clinicName",
        placeHolder: 'Enter here',
        type: 'text',
        // onChangeHandler: (val) => { setFormValues({ ...formValues, password: val }) },
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Phone Number',
        fieldName: "phone",
        placeHolder: 'Enter here',
        type: 'text',
        // onChangeHandler: (val) => { setFormValues({ ...formValues, password: val }) },
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Address',
        fieldName: "address",
        placeHolder: 'Enter here',
        type: 'text',
        // onChangeHandler: (val) => { setFormValues({ ...formValues, password: val }) },
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    }
]

const RegisterScreen = ({ navigation }) => {
    const { globalState, globalDispatch } = React.useContext(GlobalContext);
    const [formValues, setFormValues] = useState(genFormFieldNames(registerFormFields))

    const onChange = useCallback((val, fieldName) => {
        setFormValues({ ...formValues, [fieldName]: val })
    }, [formValues])

    const handleRegister = async () => {
        try {
            const { data } = await callApi('post', APP_API_LIST.REGISTER, { registerInfo: formValues })
            const { msg } = data

            if (!msg) {
                // globalDispatch({ type: ACTION.LOGIN, payload: { id, email } })
                alert('Register Successful');
                navigation.navigate('HomeScreen')
            } else {
                globalDispatch({ type: ACTION.SET_ERROR_MSG, payload: msg },)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                    {registerFormFields.map((formField, i) => {
                        return (
                            <FormField key={`form-field-${formField.fieldName}-${i}`}
                                onChangeHandler={onChange}
                                formValues={formValues}
                                type={formField.type}
                                fieldName={formField.fieldName}
                                {...formField}
                            />
                        )
                    })}
                    {/* <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text> */}
                    {/* <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {false ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View> */}
                </ScrollView>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={handleRegister}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
    /*  textPrivate: {
         flexDirection: 'row',
         flexWrap: 'wrap',
         marginTop: 20
     },
     color_textPrivate: {
         color: 'grey'
     } */
});


export default RegisterScreen;
