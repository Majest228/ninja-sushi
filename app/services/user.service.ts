import { axiosWithAuth } from '../api/api'

export const UserService = {
	async getProfile() {
		const { data } = await axiosWithAuth.get('user/profile')

		return data
	}
}