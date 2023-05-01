import { useMemo } from "react"
import { useAppDispatch } from "./useAppDispatch"
import { bindActionCreators } from "redux"
import { rootActions } from "../redux/roote-action"

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
