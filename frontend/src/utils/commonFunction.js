export const genFormFieldNames = (formFields, initAllToEmptyString = false) => {
    const result = formFields.reduce((fieldObj, field) => {
        const { fieldName, initialValue } = field;
        fieldObj[fieldName] = initialValue && !initAllToEmptyString ? initialValue : ""

        return fieldObj
    }, {})

    return result
}