const initialState = {
    partyInfo: []
}

function metaDataReducer(state=initialState, action){
    switch(action.type){
        case 'setPartyInfo' : return {
            ...state, partyInfo : action.payload
        } 

        default : return state
    }
};

export default metaDataReducer;

// Action Creators
export const setPartyInfo = (partyInfo) => ({
    type: 'setPartyInfo', 
    payload: partyInfo
});