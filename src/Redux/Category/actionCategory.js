import  { SET_CATEGORY, SET_CHANNELDETAILS } from './actionTypeCategory' 

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    }
} 

export const setChannelDetails = (channelDetails) => {
    return {
        type: SET_CHANNELDETAILS,
        payload: channelDetails
    }
}