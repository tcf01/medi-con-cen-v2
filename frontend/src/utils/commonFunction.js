export const genFormFieldNames = (formFields) => {
    const result = formFields.reduce((fieldObj, field) => {
        const { fieldName } = field;
        fieldObj[fieldName] = ""

        return fieldObj
    }, {})

    return result
}