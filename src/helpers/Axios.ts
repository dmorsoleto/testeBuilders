import axios, { AxiosError, AxiosResponse } from "axios"
import { TReturnErrorAxios } from "./types"

const configHeader = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
}

class AxiosHelper {

    private url = ""
    private dataPost: Object | null = null

    constructor(urlTemp: string, postData?: Object) {
        this.url = urlTemp
        this.dataPost = postData
    }

    async get(): Promise<AxiosResponse|TReturnErrorAxios|unknown> {
        try {
            const res = await axios
                .get(this.url, configHeader)
            return res
        } catch (error) {
            const errors = error as Error | AxiosError
            return errors
        }
    }

    async post(): Promise<AxiosResponse|TReturnErrorAxios|unknown> {
        try {
            const res = await axios
                .post(this.url, this.dataPost, configHeader)
            return res
        } catch (error) {
            const errors = error as Error | AxiosError
            if(axios.isAxiosError(error) && errors.response) {
                return {
                    status: errors.response?.status,
                    data: errors.response?.data.error,
                    message: errors.response?.data.message || null,
                }
            } else {
                return error
            }
        }
    }

}

export default AxiosHelper