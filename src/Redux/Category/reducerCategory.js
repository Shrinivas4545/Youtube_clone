import { SET_CATEGORY, SET_CHANNELDETAILS } from "./actionTypeCategory";

const initialState = {
    selectedCategory: "Trending",
    channelDetails: {}
}

const reducerCategory = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
        
        case SET_CHANNELDETAILS:
            return {
                ...state, 
                channelDetails: action.payload
            }
        default:
            return state;
    }
}

export default reducerCategory;