import  { SET_CATEGORY, SET_CHANNELDETAILS, SET_SEARCHTEXT } from './actionTypeCategory' 

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    }
} 

export const setSearchText = (searchText) => {
    return {
        type: SET_SEARCHTEXT,
        payload: searchText
    }
}

export const setChannelDetails = (channelDetails) => {
    return {
        type: SET_CHANNELDETAILS,
        payload: channelDetails
    }
}