import { AuthService } from '@/app/services/auth.service'
import { IAuth, IAuthForm } from '@/app/types/auth.interface'
import { createAsyncThunk } from "@reduxjs/toolkit"
export const register: any = createAsyncThunk<IAuth, IAuthForm>(
	"auth/register",
	async ({ email, password, login }: IAuth) => {
		try {
			const response = await AuthService.register(email, password, login)
			return response.data
		} catch (e) {
			console.error(e)
		}
	}
)