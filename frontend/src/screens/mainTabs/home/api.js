import { APP_API_LIST } from "../../../constants/api"
import { callApi } from "../../../utils/api"

export const fetchConsultationRecord = async (clinicName) => {
    //default case
    const name = clinicName === "" ? "盈寶醫務abc" : clinicName
    const { data } = await callApi('get', `${APP_API_LIST.BOOKING_RECORD}?clinicName=${name}`)

    return data
}