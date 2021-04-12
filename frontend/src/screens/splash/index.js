import React, { useState, useMemo, useCallback } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

import { Form as LoginForm } from '../../components/molecules/form/index.js';
import FormField from '../../components/molecules/form/FormFields.js';
import { callApi } from '../../utils/api'
import { APP_API_LIST } from "../../constants/api";
import { GlobalContext } from '../../contexts/index.js';
import ACTION from '../../constants/dispatchActionType';
import { GeneralButton } from '../../components/atoms/Button.js';
import { ThemeContext } from '../../styles/index.js';


const SplashScreen = ({ navigation }) => {
    const { globalState, globalDispatch } = React.useContext(GlobalContext);
    const { color } = React.useContext(ThemeContext);
    const [formValues, setFormValues] = useState({ email: "", password: "" })
    const loginFormFields = useMemo(() => ([
        {
            showName: 'Email',
            fieldName: 'email',
            placeHolder: 'Enter here',
            type: 'text',
            onChangeHandler: (val) => {
                setFormValues({ ...formValues, email: val })
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
                name: "lock",
                color: "#05357a",
                size: 20
            }
        }
    ]), [formValues]);


    const handleLogin = async () => {
        try {
            const { data } = await callApi('post', APP_API_LIST.LOGIN, { loginInfo: formValues })
            const { id, email, clinicName, msg } = data

            if (!msg) {
                globalDispatch({ type: ACTION.LOGIN, payload: { id, email, clinicName } })
            } else {
                globalDispatch({ type: ACTION.SET_ERROR_MSG, payload: msg },)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleRegister = useCallback(() => {
        navigation.navigate('RegisterScreen')
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.innerContentWrapper}>
                <Text style={styles.innerContentText}>MediConCen Clinic System</Text>
                <LoginForm style={styles.loginFormWrapper} formFields={loginFormFields}>
                    <View style={styles.loginFormInnerContent}>
                        {loginFormFields.map((formField, i) => (
                            <FormField key={`form-field-${formField.fieldName}-${i}`}
                                formValues={formValues}
                                type={formField.type}
                                fieldName={formField.fieldName}
                                {...formField} />))
                        }
                    </View>
                    <GeneralButton title={'Login'} onPressHandler={handleLogin} />
                </LoginForm>
                <GeneralButton
                    title={'Register'}
                    onPressHandler={handleRegister}
                    textCustomStyle={{ color: color.primaryTextColor }}
                    buttonWrapperStyle={{ backgroundColor: color.primaryButtonBg }} />
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
    innerContentText: {
        fontSize: 25,
        marginBottom: 100
    },
    loginFormWrapper: {
        // width: "80%"
    },
    loginFormInnerContent: {
        width: "80%"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})

export default SplashScreen;