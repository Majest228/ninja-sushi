import { axiosWithoutAuth } from '../api/api'

export const ProductService =  {
	async getAll(search: string) {
			return  axiosWithoutAuth.get('product/all', {data : {search: search}})
	}
}