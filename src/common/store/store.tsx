import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { addApi } from 'common/api/addApi'
import { recycleApi } from 'common/api/recycleApi'
import { modalReducer } from 'common/slices/modalSlice'
import { recycleSlice } from 'common/slices/recycleSlice'

const rootReducer = combineReducers({
  modal: modalReducer,
  recycleReducer: recycleSlice.reducer,
  [recycleApi.reducerPath as keyof object]: recycleApi.reducer,
  [addApi.reducerPath as keyof object]: addApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<any>) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(recycleApi.middleware)
      .concat(addApi.middleware),
})

setupListeners(store.dispatch)
