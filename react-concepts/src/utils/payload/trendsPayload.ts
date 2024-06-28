import { setDefaultPayload } from "./defaultPayload";
import { setPartyFilter, setLeaderFilter, setTagFilter, setContentFilter, setContextFilter, setLocationFilter } from "./filters";
import { DataVar } from '../dataVariables';
import constants from '../constants';
import { setActionableInsightsPayload } from "./actionableInsightsPayload";


export const setPayload = (widget:string) => {
    DataVar.globalFilter = localStorage.getItem('globalFilters') ? JSON.parse(localStorage.getItem('globalFilters') || '') : constants.defaultGlobalfilters;

    let payload:Record<string, any> = setDefaultPayload();;
    let filters:Record<string, any> = {};

    let partyId: string[] = DataVar.globalFilter.party.id;
    const tagId: string[] = DataVar.globalFilter.tag.id;
    const entityTypeId: string[] = DataVar.globalFilter.tag.entityTypeId;
    const categoryId: string[] = constants.tags.issues.categoryId;
    const sentimentId: string[] = DataVar.filters.sentimentId;

    const stateId: string[]= DataVar.globalFilter.location.stateId;
    let location:any = {}, constituencyId: string[] = [], constituencyType:string = '';
 

    // party summary
    const setPartyCoverageSummary = () => {
        filters.party = setPartyFilter(partyId, {}, []);

        location = setLocationFilter(stateId, [], [], '');
        filters.content = setContentFilter(location, [], []);
        filters.context = setContextFilter(location);

        if(Object.keys(filters).length !== 0) return filters;
    }

    // state parties
    const setStateParties = () => {
        location = setLocationFilter(stateId, [], [], '');
        filters.party = setPartyFilter([], location, sentimentId);

        filters.content = setContentFilter(location, [], []);

        if(Object.keys(filters).length !== 0) return filters;
    }

    // mediatypes
    const setPartyMediaTypes = () => {
        filters.party = setPartyFilter(partyId, {}, []);

        location = setLocationFilter(stateId, [], [], '');
        filters.content = setContentFilter(location, [], []);

        if(Object.keys(filters).length !== 0) return filters;
    }

    // party socialmedia
    const setPartySocialMedia = () => {
        filters.party = setPartyFilter(partyId, {}, []);

        if(!filters?.content) filters.content = {};
        filters.content.sourceIdGroups = ["FACEBOOK", "YOUTUBE", "TWITTER", "INSTAGRAM"];

        if(Object.keys(filters).length !== 0) return filters;
    }

    // state leaders
    const setStateLeaders = () => {
        location = setLocationFilter(stateId, [], [], '');
        filters.leader = setLeaderFilter([], [], location, sentimentId);

        if(Object.keys(filters).length !== 0) return filters;
    }

    // party/opposition leaders
    const setPartyLeaders = (widget:string) => {
        if(widget === 'opposition_leaders') partyId = DataVar.globalFilter.party.oppositionId;

        location = setLocationFilter(stateId, [], [], '');
        filters.leader = setLeaderFilter(partyId, [], location, sentimentId);


        if(Object.keys(filters).length !== 0) return filters;
    }

    // party sources
    const setPartySources = () => {
        location = setLocationFilter(stateId, [], [], '');
        filters.content = setContentFilter(location, [], []);

        filters.party = setPartyFilter(partyId, {}, sentimentId);

        if(Object.keys(filters).length !== 0) return filters;
    }

    // party topics/issues
    const setPartyTopics = (widget:string) => {
        filters.party = setPartyFilter(partyId, {}, sentimentId);

        location = setLocationFilter(stateId, [], [], '');
        filters.content = setContentFilter(location, [], []);

        if(widget === 'party_topics') filters.tag = setTagFilter(tagId, [], categoryId, []);
        if(widget === 'state_issues') filters.tag = setTagFilter(tagId, entityTypeId, [], []);
        

        if(Object.keys(filters).length !== 0) return filters;
    }

     // party locations(constituencies/districts/parliaments)
     const setPartyLocations = () => {
        filters.party = setPartyFilter(partyId, {}, sentimentId);
        
        location = setLocationFilter(stateId, [], [], '');
        filters.content = setContentFilter(location, [], []);

        if(Object.keys(filters).length !== 0) return filters;
    }

    // final payload
    const setFinalPayload = (widget:string) => {

        if(widget === 'party_coverage_summary') payload.filters = setPartyCoverageSummary();
        if(widget === 'state_parties') payload.filters = setStateParties();
        if(widget === 'party_mediatypes') payload.filters = setPartyMediaTypes();
        if(widget === 'party_socialmedia') payload.filters = setPartySocialMedia();
        if(widget === 'state_leaders') payload.filters = setStateLeaders();
        if(widget === 'party_leaders' || widget === 'opposition_leaders') payload.filters = setPartyLeaders(widget);
        if(widget === 'party_topics' || widget === 'state_issues') payload.filters = setPartyTopics(widget);
        if(widget === 'party_sources') payload.filters = setPartySources();
        if(widget === 'party_districts' || widget === 'party_constituencies'|| widget === 'party_parliament_constituencies') payload.filters = setPartyLocations();
        
        if(widget.indexOf('actionable_insights') !== -1) payload = setActionableInsightsPayload(widget, payload)

        return payload;
    }

     

    return setFinalPayload(widget);

}