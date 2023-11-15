import { configureStore } from "@reduxjs/toolkit";
import userReducer from './store/users'
import articleReducer from './store/article'
import courseReducer from './store/course'

export default configureStore(
    {
      reducer :{
        users:userReducer,
        articles:articleReducer,
        courses:courseReducer
      }
    }
)