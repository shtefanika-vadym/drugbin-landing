import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'common/store/hooks'
import { ProcessingModal } from 'common/ui/Modal/ProcessingModal/ProcessingModal'
import { SET_SHOW_MODAL } from 'common/slices/modalSlice'
import { useDrugsIdentifyMutation } from 'common/api/recycleApi'
import { SET_DRUGS_FROM_CAMERA, SET_DRUGS_SIZE } from 'common/slices/recycleSlice'

export const Camera = () => {
  const dispatch = useDispatch()
  const { type } = useAppSelector((state) => state.recycleReducer)
  const inputFileRef = useRef(null)
  const [drugsIdentify, { isLoading }] = useDrugsIdentifyMutation()

  const formatDrugObject = (obj: any) => {
    const formattedObject = {
      drugName: {
        drugId: obj.id,
        name: obj.name,
        value: obj.name,
      },
      pack: 'Pack',
      quantity: 1,
      expirationDate: obj?.expirationDate || null,
      lot: obj?.lot || null,
    }

    return formattedObject
  }

  const handleFileUpload = async (event: any) => {
    const image = event.target.files[0]
    const response = await drugsIdentify({ image })
    const { data } = response
    const formattedResponse = data.map((obj: any) => formatDrugObject(obj))
    dispatch(SET_DRUGS_SIZE(formattedResponse.length))
    dispatch(SET_DRUGS_FROM_CAMERA(formattedResponse))
  }

  const handleCloseModal = () => {
    dispatch(SET_SHOW_MODAL({ isOpenModal: false, childModal: null }))
  }

  useEffect(() => {
    if (isLoading) {
      dispatch(
        SET_SHOW_MODAL({
          isOpenModal: true,
          childModal: <ProcessingModal handleCloseModal={handleCloseModal} isLoading={isLoading} />,
        }),
      )
    } else {
      dispatch(SET_SHOW_MODAL({ isOpenModal: false, childModal: null }))
    }
  }, [isLoading])

  useEffect(() => {
    if (type === 'automatic') inputFileRef.current.click()
  }, [type])

  return (
    <div>
      <input
        type='file'
        accept='image/*'
        capture={true}
        style={{ display: 'none' }}
        ref={inputFileRef}
        onChange={handleFileUpload}
      />
    </div>
  )
}
