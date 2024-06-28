import { fetchFeedData } from "../../state/actions/feedAction";
import { fetchInfographicsData } from "../../state/actions/infographics/infographicsAction";
import { fetchTrendingData } from "../../state/actions/trends/trendingAction";
import { setGovernanceFeed } from "../../state/reducers/feedReducer";
import { setPartyMediaTypes } from "../../state/reducers/trendingReducer";
import { setStateLeaders } from "../../state/reducers/trendingReducer";

export const asynchronousCalls = () => {
    return (dispatch: any) => {
    
    dispatch(setPartyMediaTypes([]));
    dispatch(setStateLeaders([]));
    dispatch(setGovernanceFeed([]));

    // dispatch(fetchTrendingData('party_coverage_summary'));
    dispatch(fetchInfographicsData('party_interval_coverage'));
    dispatch(fetchInfographicsData('oppositionparties_interval_coverage'));
    dispatch(fetchInfographicsData('oppositionleaders_interval_coverage'));

    dispatch(fetchTrendingData("party_mediatypes"));
    // dispatch(fetchTrendingData('party_socialmedia'));
    // dispatch(fetchTrendingData('state_parties'));
    dispatch(fetchTrendingData('state_leaders'));
    // dispatch(fetchTrendingData('party_leaders');

    // dispatch(fetchTrendingData('party_leaders'));
    // dispatch(fetchTrendingData('opposition_leaders'));
    // dispatch(fetchTrendingData('party_districts'));
    // dispatch(fetchTrendingData('party_constituencies'));
    // dispatch(fetchTrendingData('party_topics'));
    // dispatch(fetchTrendingData('state_issues'));
    // dispatch(fetchTrendingData('party_sources'));

    // dispatch(fetchFeedData('party_feed'));
    // dispatch(fetchFeedData('opposition_feed'));
    // dispatch(fetchFeedData('issues_feed'));
    dispatch(fetchFeedData('governance_feed'));
  };
};
