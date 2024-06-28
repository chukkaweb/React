
import apiConfig from "../../config/apiConfig";
import constants from "../constants";
import { DataVar } from "../dataVariables";

export const setNetworkUrl = (widget:string) => {
 
    const setUrl = () => {
        let url:string = '';

        url = apiConfig.baseUrl + setPath();
        if(widget === 'globalfilters') url = apiConfig.cmsUrl + setPath() + '?userid=2' + constants.defaultQueryString + '&origin=cms';
        if(widget === 'state_info') url = apiConfig.cmsUrl + setPath() + '?userid=2&id=' + DataVar.globalFilters.location.stateId[0] + constants.defaultQueryString + '&origin=cms';
        
        return url;
    }

    const setPath = () => {
        let path:string = '';
        
        if(widget === 'meta_parties')  path = 'list/parties';
        if(widget === 'meta_leaders')  path = 'meta/leaders';
        if(widget === 'globalfilters') path = 'cm/globalconfigs';
        if(widget === 'party_info')  path = 'meta/parties';
        if(widget === 'state_info')  path = 'cm/state/list';

        return path;
    }

    return setUrl();
}