import { axiosWithoutAuth } from '../api/api'

export const CategoryService = {
	async getAll() {
		return axiosWithoutAuth.get('category/all')
	}
}