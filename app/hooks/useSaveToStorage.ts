import { useCreateCookies } from './useCreateCookies'

export const useSaveToStorage = (data: any) => {
	useCreateCookies(data.accessToken, data.refreshToken)
	localStorage.setItem("user", JSON.stringify(data.user))
}