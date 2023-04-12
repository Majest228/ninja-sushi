import { useDispatch } from 'react-redux'
import { AppDipsatch } from '../redux/store'

export const useAppDispatch = () => useDispatch<AppDipsatch>()