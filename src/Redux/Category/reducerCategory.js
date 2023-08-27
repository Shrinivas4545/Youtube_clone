import { SET_CATEGORY } from "./actionTypeCategory";

const initialState = {
    selectedCategory: "Trending",
}

const reducerCategory = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }

        default:
            return state;
    }
}

export default reducerCategory;