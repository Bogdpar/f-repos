import BookmarksReducer from './slice/BookmarkSlice'
import LogReducer from './slice/AuthSlice'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  bookmarks: BookmarksReducer, 
  log: LogReducer 
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer