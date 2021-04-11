import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Picker } from '@react-native-community/picker';

import { GeneralButton } from '../../../../components/atoms/Button';
import FormField from '../../../../components/molecules/form/FormFields';
import { GeneralModal } from '../../../../components/molecules/modal';
import { APP_API_LIST } from '../../../../constants/api';
import ACTION from '../../../../constants/dispatchActionType';
import { GlobalContext } from '../../../../contexts';
import { callApi } from '../../../../utils/api';
import { genFormFieldNames } from '../../../../utils/commonFunction';


const bookingInfoFields = [
    {
        showName: 'Clinic',
        fieldName: 'clinicName',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Doctor Name',
        fieldName: 'doctorName',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Patient Name',
        fieldName: 'patientName',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Diagnosis',
        fieldName: 'diagnosis',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Medication',
        fieldName: 'medication',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Consultation fee',
        fieldName: 'consultationFee',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Date',
        fieldName: 'date',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Time',
        fieldName: 'time',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Follow Up Needed?',
        fieldName: 'hasFollowUp',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "user-o",
            color: "#05357a",
            size: 20
        }
    },
]

const NewBookingModal = ({ title, isOpen }) => {
    const { globalState, globalDispatch } = React.useContext(GlobalContext)
    const [formValues, setFormValues] = useState(genFormFieldNames(bookingInfoFields))

    const onChange = useCallback((val, fieldName) => {
        setFormValues({ ...formValues, [fieldName]: val })
    }, [formValues])

    const handleAddRecord = async () => {
        debugger
        try {
            const { data } = await callApi('post', APP_API_LIST.BOOKING_RECORD, { recordInfo: formValues })
            const { msg } = data

            if (!msg) {
                // globalDispatch({ type: ACTION.LOGIN, payload: { id, email } })
                // navigation.navigate('HomeScreen')
                globalDispatch({ type: ACTION.SET_MODAL_CLOSE })

            } else {
                globalDispatch({ type: ACTION.SET_ERROR_MSG, payload: msg })
            }
        } catch (e) {
            console.log(e)
        }

    }

    const isButtonDisable = Object.values(formValues).filter(formValue => formValue === "").length > 0 ? true : false;

    return (
        <GeneralModal title={title} isOpen={isOpen}>
            <View>
                {bookingInfoFields.map((formField, i) => {
                    return formField.fieldName !== "hasFollowUp" ?
                        <FormField
                            key={`form-field-${formField.fieldName}-${i}`}
                            onChangeHandler={onChange}
                            formValues={formValues}
                            type={formField.type}
                            fieldName={formField.fieldName}
                            {...formField}
                        />
                        :
                        <FormField
                            key={`form-field-${formField.fieldName}-${i}`}
                            onChangeHandler={onChange}
                            formValues={formValues}
                            type={formField.type}
                            fieldName={formField.fieldName}
                            {...formField}>
                            <Picker
                                selectedValue={formValues.hasFollowUp}
                                onValueChange={(value) => onChange(value, 'hasFollowUp')}
                            >
                                <Picker.Item label="Yes" value={true} />
                                <Picker.Item label="No" value={false} />
                            </Picker>
                        </FormField>
                })}
            </View>

            <GeneralButton title={"Add"}
                onPressHandler={handleAddRecord}
                isDisable={isButtonDisable}
                buttonCustomStyle={styles.signIn}
            />
        </GeneralModal>
    )
}

const styles = StyleSheet.create({

})

export default NewBookingModal;