import  { SET_CATEGORY } from './actionTypeCategory' 

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    }
} 