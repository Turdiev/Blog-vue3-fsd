import axios from 'axios'

export const apiResponse = axios.create({
  baseURL: import.meta.env.VITE_APP_QTIM_API_URL,
  headers: {
    'Content-type': 'application/json'
  }
})