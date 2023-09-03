import { SET_TYPE } from 'common/slices/recycleSlice'
import { useAppDispatch, useAppSelector } from 'common/store/hooks'
import { Selected, SwitchButtonContent } from './SwitchButton.styled'

export const SwitchButton = () => {
  const dispatch = useAppDispatch()
  const { type } = useAppSelector((state) => state.recycleReducer)

  return (
    <SwitchButtonContent>
      <Selected isActive={type === 'manual'} onClick={() => dispatch(SET_TYPE('manual'))}>
        Manual
      </Selected>
      <Selected isActive={type === 'automatic'} onClick={() => dispatch(SET_TYPE('automatic'))}>
        Automatic
      </Selected>
    </SwitchButtonContent>
  )
}
