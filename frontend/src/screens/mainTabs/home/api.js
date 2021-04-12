import { APP_API_LIST } from "../../../constants/api"
import { callApi } from "../../../utils/api"

export const fetchConsultationRecord = async (clinicName) => {
    const name = !clinicName  ? "盈寶醫務" : clinicName
    const { data } = await callApi('get', `${APP_API_LIST.BOOKING_RECORD}?clinicName=${name}`)

    const { data: records, msg } = data;
    const recordsLength = records ? records.length : 0;

    return {
        records,
        msg,
        recordsLength
    }
}

export const addNewRecord = async (formValues) => {
    const { msg } = await callApi('post', APP_API_LIST.BOOKING_RECORD, { recordInfo: formValues })

    return {
        msg
    }
}