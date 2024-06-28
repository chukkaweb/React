import { fetchFeedData } from "../../state/actions/feedAction";
import { fetchModalTrendsData, trendsApiParallelCalling } from "../../state/actions/trends/trendingAction";
import { setFeedInfiniteLoading, setMoreFeed } from "../../state/reducers/feedReducer";
import { setMoreStats, setTrendsInfiniteLoading } from "../../state/reducers/trendingReducer";
import { DataVar, Feed, Infographics, Trending } from "../dataVariables";

export const modalAsynchronousCalls = () => {
    return (dispatch: any) => {

        if (Infographics.graphModal.isShow) {
            if (['heatmapline', 'trends'].includes(Infographics.graphModal.chartType)) { 
                dispatch(trendsApiParallelCalling(DataVar.widgetType));

            } else {
                dispatch(fetchModalTrendsData(DataVar.widgetType));
            }
            

        } else if (DataVar.widgetType.indexOf("feed") !== -1) {
            Feed.nextBatch = [];
            Feed.moreFeed = [];
            Feed.isInfiniteScrolling = false;

            dispatch(setFeedInfiniteLoading(false));
            dispatch(setMoreFeed([]));
            dispatch(fetchFeedData(DataVar.widgetType));

        } else {
            Trending.nextBatch = "";
            Trending.moreStats = [];

            dispatch(setTrendsInfiniteLoading(false));
            dispatch(setMoreStats([]));
            dispatch(fetchModalTrendsData(DataVar.widgetType));
        }
    };
};
