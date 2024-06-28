import { DataVar } from "../dataVariables";
import constants from "../constants";

export const setDefaultPayload = () => {
    DataVar.globalFilter = localStorage.getItem('globalFilters') ? JSON.parse(localStorage.getItem('globalFilters') || '') : constants.defaultGlobalfilters;

    const setPayload = () => {
        let payload:Record<string, any> = {
            dateRange: {},
            filters: {},
            scoringAlgorithm: "SM1",
            sortBy: "VISIBILITY",
            size: 5
        }

        let startTs:string = '', endTs:string = '';

        // startTs = DataVar.globalFilter?.date?.startTs;
        // endTs = DataVar.globalFilter?.date?.endTs;

        startTs = DataVar.dateRange.startTs;
        endTs = DataVar.dateRange.endTs;

        payload.dateRange = setDateRangeObj(startTs, endTs);

        return payload;
    }

    const setDateRangeObj = (startTs:string, endTs:string) =>{
        let dateRange:Record<string, any> = {};

        if(startTs) {dateRange.from = startTs }
        if(endTs) {dateRange.to = endTs }

        dateRange.instantRank = true;
        dateRange.instantStats = true;

        return dateRange;
    }

    return setPayload();
}