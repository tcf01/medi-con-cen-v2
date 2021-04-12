import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FormField from '../../components/molecules/form/FormFields.js';
import { GlobalContext } from '../../contexts/index.js';
import { callApi } from '../../utils/api.js';
import { APP_API_LIST } from '../../constants/api.js';
import ACTION from '../../constants/dispatchActionType';
import { genFormFieldNames } from '../../utils/commonFunction.js';
import { ThemeContext } from '../../styles/index.js';


const registerFormFields = [
    {
        showName: 'Email',
        fieldName: 'email',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "envelope-open",
            color: "white",
            size: 20
        }
    },
    {
        showName: 'Password',
        fieldName: "password",
        placeHolder: 'Enter here',
        type: 'password',
        iconInfo: {
            name: "lock",
            color: "white",
            size: 20
        }
    },
    {
        showName: 'Clinic',
        fieldName: "clinicName",
        placeHolder: '',
        type: 'text',
        iconInfo: {
            name: "hospital-o",
            color: "white",
            size: 20
        }
    },
    {
        showName: 'Phone Number',
        fieldName: "phone",
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "phone",
            color: "white",
            size: 20
        }
    },
    {
        showName: 'Address',
        fieldName: "address",
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "address-book",
            color: "white",
            size: 20
        }
    }
]


const RegisterScreen = ({ navigation }) => {
    const { color } = React.useContext(ThemeContext);
    const { _, globalDispatch } = React.useContext(GlobalContext);
    const [formValues, setFormValues] = useState(genFormFieldNames(registerFormFields))

    const onChange = useCallback((val, fieldName) => {
        setFormValues({ ...formValues, [fieldName]: val })
    }, [formValues])

    const handleRegister = async () => {
        try {
            const { data } = await callApi('post', APP_API_LIST.REGISTER, { registerInfo: formValues })
            const { msg } = data

            if (!msg) {
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
        <View style={[styles.container, { backgroundColor: color.primaryButtonBg }]}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={[styles.textHeader, color.primaryTextColor]}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, { backgroundColor: color.secondButtonBg }]}
            >
                <ScrollView>
                    {registerFormFields.map((formField, i) => {
                        return (
                            <FormField key={`form-field-${formField.fieldName}-${i}`}
                                onChangeHandler={onChange}
                                formValues={formValues}
                                customTextStyle={{ color: "black" }}
                                customTitleStyle={{ color: "white" }}
                                type={formField.type}
                                fieldName={formField.fieldName}
                                {...formField}
                            />
                        )
                    })}
                </ScrollView>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signIn, { backgroundColor: color.primaryButtonBg }]}
                        onPress={handleRegister}
                    >
                        <View>
                            <Text style={[styles.textSign]}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 30
    },
    textFooter: {
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
});


export default RegisterScreen;
