import { SET_CATEGORY, SET_CHANNELDETAILS, SET_SEARCHTEXT } from "./actionTypeCategory";

const initialState = {
    selectedCategory: "Trending",
    searchText : "",
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

        case SET_SEARCHTEXT:
            return {
                ...state,
                searchText: action.payload
            }
        default:
            return state;
    }
}

export default reducerCategory;