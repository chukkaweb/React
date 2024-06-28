import { useEffect } from "react";
import apiConfig from "../../config/apiConfig";
import constants from "../constants";
import { DataVar } from "../dataVariables";

export const setNetworkUrl = (widget:string) => {
 
    const setUrl = () => {
        let url:string = '';

        url = apiConfig.baseUrl + setPath();
        url += '?userid=' + DataVar.userId + constants.defaultQueryString;
        
        return url;
    }

    const setPath = () => {
        let path:string = '';
    
        if(widget.indexOf('trending') !== -1) {
            path = 'trending';
        } else {
            path = 'feed';
        }

        return path;
    }

    return setUrl();
}