export const genFormFieldNames = (formFields) => {
    const result = formFields.reduce((fieldObj, field) => {
        const { fieldName, initialValue } = field;
        fieldObj[fieldName] = initialValue ? initialValue : ""

        return fieldObj
    }, {})

    return result
}