import React, { useState, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-community/picker';

import { GeneralButton } from '../../../../components/atoms/Button';
import FormField from '../../../../components/molecules/form/FormFields';
import { GeneralModal } from '../../../../components/molecules/modal';
import ACTION from '../../../../constants/dispatchActionType';
import { GlobalContext } from '../../../../contexts';
import { genFormFieldNames } from '../../../../utils/commonFunction';
import { addNewRecord, fetchConsultationRecord } from '../api';


const bookingInfoFields = [
    {
        showName: 'Clinic',
        fieldName: 'clinicName',
        placeHolder: 'Enter here',
        type: 'text',
        iconInfo: {
            name: "hospital-o",
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
            name: "tablet",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Consultation fee',
        fieldName: 'consultationFee',
        placeHolder: 'Enter here',
        validateType: "number",
        type: 'text',
        iconInfo: {
            name: "money",
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
            name: "calendar",
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
            name: "mixcloud",
            color: "#05357a",
            size: 20
        }
    },
    {
        showName: 'Follow Up Needed?',
        fieldName: 'hasFollowUp',
        placeHolder: 'Enter here',
        type: 'text',
        initialValue: true,
    },
]

const NewBookingModal = ({ title, isOpen }) => {
    const { globalState, globalDispatch } = React.useContext(GlobalContext)
    const [formValues, setFormValues] = useState(genFormFieldNames(bookingInfoFields))
    const [errors, setErrors] = useState(genFormFieldNames(bookingInfoFields, true))

    const onChange = useCallback((val, fieldName) => {
        setFormValues({ ...formValues, [fieldName]: val })
    }, [formValues])

    const handleSetErrorMsg = (errorMsg, fieldName) => {
        setErrors({ ...errors, [fieldName]: errorMsg })
    }

    const handleAddRecord = async () => {
        const { auth: { userInfo: { clinicName } } } = globalState;

        try {
            const hasErrors = Object.values(errors).filter(error => error !== "").length > 0

            if (hasErrors) {
                alert("1 or more fields has error, please solve that")
                return
            }

            const { msg: errorMsg1 } = await addNewRecord(formValues)
            const { records, msg: errorMsg2, recordsLength } = await fetchConsultationRecord(clinicName)


            if (!errorMsg1 || !errorMsg2) {
                globalDispatch({
                    type: ACTION.SET_CONSULTATION_RECORD, payload: {
                        records,
                        length: recordsLength
                    }
                })
                globalDispatch({ type: ACTION.SET_MODAL_CLOSE })
                setFormValues(genFormFieldNames(bookingInfoFields))
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
                            errorHandler={handleSetErrorMsg}
                            type={formField.type}
                            formValues={formValues}
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
                buttonWrapperStyle={styles.signIn}
            />
        </GeneralModal>
    )
}

const styles = StyleSheet.create({
})

export default NewBookingModal;