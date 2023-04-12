import { axiosWithoutAuth } from '../api/api'

export const ProductService = {
	async getAll(search: string) {
		return axiosWithoutAuth.get('product/all', { data: { search: search } })
	},
	async getById(id: number) {
		return axiosWithoutAuth.get(`product/by/${id}`)
	},
	async getManyByIdCategory(name: string) {
		return axiosWithoutAuth.get(`product/many/${name}`)
	}

}