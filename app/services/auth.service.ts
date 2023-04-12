import { axiosWithoutAuth } from '../api/api'
import { IAuth } from '../types/auth.interface'

export const AuthService = {
	async register(email: string, password: string, login: string) {
		const res = await axiosWithoutAuth.post<IAuth>("/auth/register", {
			email,
			password,
			login
		})
		return res
	},
}