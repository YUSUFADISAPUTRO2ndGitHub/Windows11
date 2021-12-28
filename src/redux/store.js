import { configureStore } from '@reduxjs/toolkit'
import controller from './controller'

export default configureStore({
  reducer: {
    app: controller
  }
})