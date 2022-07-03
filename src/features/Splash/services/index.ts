/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosHelper from '../../../helpers/Axios'
import { TWeatherDataParams } from '../types'

const getWeatherData = (params?: TWeatherDataParams): Promise<any> => {
    const axiosHelper = new AxiosHelper(`https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lng}&appid=${params.key}&lang=pt_br&units=metric`)
    return axiosHelper.post()
}

export {
    getWeatherData
}