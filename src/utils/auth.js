import Cookies from "js-cookie"
const token = "Authorization"
export const getToken = () => {
  return Cookies.get(token)
}

export const setToken = (value) => {
  return Cookies.set(token, value)
}

export const removeToken = () => {
  return Cookies.remove(token)
}
