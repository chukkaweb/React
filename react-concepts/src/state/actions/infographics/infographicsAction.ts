import axios from "axios";
import { setNetworkUrl } from "../../../utils/networkurl/infographicsUrl";
import { setPayload } from "../../../utils/payload/infographicsPayload";
import { Infographics } from "../../../utils/dataVariables";
import { renderLineGraph } from "./lineGraph";


export const fetchInfographicsData = (widget:string) => {
    return (dispatch:any) => {
        const url = setNetworkUrl(widget);
        const payload = setPayload(widget);
    
        axios.post(url, payload).then(response => {
            return dispatch(handleTheResponse(response, widget));
        });
    }
}

const handleTheResponse = (response:Record<string, any>, widget:string) => {
    return (dispatch:any) => {
        if(response && response?.data) return dispatch(handleTheJSON(response.data, widget));
    }
};

const handleTheJSON = (data:Record<string, any>, widget:string) => {
    return (dispatch:any) => {
        handleStoreJSON(widget, data['response']['items']);
    }
}

const handleStoreJSON = (widget:string, data:Record<string, any>) => {
    switch(widget) {
        case 'party_interval_coverage':
            Infographics.partyIntervalCoverage = data[0].dataPoints;
            renderLineGraph('partyCoverage', 'party_interval_coverage', 'coverage');
            break;

        case 'oppositionparties_interval_coverage':
            Infographics.oppoPartiesIntervalCoverage = data;
            renderLineGraph('oppositionPartiesCoverage', 'oppositionparties_interval_coverage', 'coverage');
            break;

        case 'oppositionleaders_interval_coverage':
            Infographics.oppoLeadersIntervalCoverage = data;
            renderLineGraph('oppositionLeadersCoverage', 'oppositionleaders_interval_coverage', 'coverage');
            break;
    }      
}