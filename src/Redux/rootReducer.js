import { combineReducers } from 'redux'
import reducerCategory from './Category/reducerCategory'

const rootReducer = combineReducers({
    selectedCategory: reducerCategory
})

export default rootReducer