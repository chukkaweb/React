import { comLocation } from '../actions';

const initialState = {
    top30Feed :[],
    vibeFeed : [],
    vibeLocationModal : false,
    communityLocations : [],
    test : ''
}

function VibeReducer (state=initialState, action){
    switch(action.type){
        case 'GET_TOP30FEED' : return {
            ...state, top30Feed : action.top30feed 
        }
        
        case 'GET_VIBEFEED' : return{
            ...state, vibeFeed : action.vibefeed
        }
        case 'LOCATION_MODAL' : return{
            ...state, vibeLocationModal : !state.vibeLocationModal
        }
        case 'GET_LOCATIONS' : return {
            ...state, communityLocations : action.communityLocations 
        }
        case 'GET_VIBE_LATEST_FEED' : return {
            ...state, vibeFeed : action.vibeLatestFeed
        }
        case 'GET_TITLE_UPDATE' : return {
            ...state, vibeFeed : action.updateFeed
        }
        /* case 'BTNUPDATE' : return {
            ...state, vibeFeed : action.updateFeed
        } */
        default : return state
    }
     
}

export default VibeReducer;