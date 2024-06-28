import { Feed } from './../../utils/dataVariables';
import axios from "axios";
import { setNetworkUrl } from "../../utils/networkurl/feedUrl";
import { setPayload } from "../../utils/payload/feedPayload";
import { setFeedInfiniteLoading, setGovernanceFeed, setMoreFeed } from "../reducers/feedReducer";
import constants from "../../utils/constants";
import { dateFormat } from "../../utils/date-format";
import { textTrimming } from "../../utils/textTrimming";
import { formatNumber } from "../../utils/formatNumber";
import { DataVar } from "../../utils/dataVariables";


export const fetchFeedData = (widget:string) => {
    return (dispatch:any) => {
        const url = setNetworkUrl(widget);
        const payload = setPayload(widget);
    
        axios.post(url, payload).then(response => {
            return dispatch(handleTheResponse(response, widget));
        });
    }
   
}


const handleTheResponse = (response: Record<string, any>, widget: string) => {
    return (dispatch: any) => {
        if (response && response?.data) {
    Feed.isInfiniteScrolling = false;

            dispatch(setFeedInfiniteLoading(false));
            if(DataVar.isShowSeeAllModal || Feed.newsfeedModal.isShow) setFeedNextBatch(response?.data);
             return dispatch(handleTheJSON(response.data, widget));
        }
    }
};



const setFeedNextBatch =  (data:Record<string, any>)=>{
    if(data['response']['batch'] && data['response']['batch'].length>0) {
        Feed.nextBatch = data['response']['batch'];
    } else {
        Feed.nextBatch = [];
    }
}

const handleTheJSON = (data: Record<string, any>, widget: string) => {
  
    return (dispatch: any) => {
        data['response']['posts'].forEach((item: any) => {

            item.source = constants.sources.find((source: any) => { return source.id === item?.sourceId; });
            if (item?.sourceId === '9' || item?.sourceId === '13' || item?.sourceId === '15' || item?.sourceId === '17') item.isPublicVibePost = true;
      
            item.isImageViewVisible = true;
      
            if (item?.publishedDate) item.publishedDate = dateFormat(item.publishedDate);
            if (item?.who?.name) item.who.shortName = textTrimming(item.who.name, 15);
            if (item?.interactionStats?.viewsCount) item.interactionStats.viewsCount = formatNumber(item.interactionStats.viewsCount);
            if (item?.location && Object.keys(item?.location.length>0)) { setLocationSeparators(item?.location?.details);}
      
          });

          dispatch(handleStoreJSON(widget,data['response']['posts']));

    }
}

const setLocationSeparators = (item:any) => {

    if(item?.constituencyName) {
      item.isDot1 = true;

    } else {
      item.isDot1 = false;
    }

    if(item?.constituencyName || item?.districtName) {
      item.isDot2 = true;
    }
    else {
      item.isDot2 = false;
    }

}

const handleStoreJSON = (widget: string, data: Record<string, any>) => {
    return (dispatch: any) => {

        if(DataVar.isShowSeeAllModal || Feed.newsfeedModal.isShow) {
            data.forEach((item: Record<string, any>) => {
                Feed.moreFeed = Feed.moreFeed.concat(item);
            });
            dispatch(setMoreFeed(Feed.moreFeed));
        } else {

        switch (widget) {
            case 'governance_feed':
                dispatch(setGovernanceFeed(data));
            break;

            default :  break;
        }
       }
    }
}