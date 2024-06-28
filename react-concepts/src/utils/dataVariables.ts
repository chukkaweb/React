import constants from "./constants";

// export const globalFilters = localStorage.getItem('globalFilters') ? JSON.parse(localStorage.getItem('globalFilters') || '') : constants.defaultGlobalfilters


export const DataVar:Record<string, any> = {
    globalFilters: localStorage.getItem('globalFilters') ? JSON.parse(localStorage.getItem('globalFilters') || '') : constants.defaultGlobalfilters,
    partyInfo: localStorage.getItem('partyInfo') ? JSON.parse(localStorage.getItem('partyInfo') || '') : [],
    userId: localStorage.getItem('partyUserId') ? localStorage.getItem('partyUserId') : '2',
    dateRange: {
        startTs: '',
        endTs: ''
    },
    isShowSeeAllModal: false,
    moduleDataType: 'trending',
    modalDate: {
        startTs: '2024-06-05 00:00:00',
        endTs: '2024-06-11 14:56:00'
    },
    widgetType: '',
    filters: {
        sentimentId: []
    }
}

export const MetaData:Record<string, any> = {
    states: [],
    parties: [],
    leaders: []
}

export const Infographics:Record<string, any> = {
    partyIntervalCoverage: [],
    oppoLeadersIntervalCoverage: [],
    oppoPartiesIntervalCoverage: [],
    graphModalData: [],
    heatMapData: [],
    graphModal: {
        isShow:false,
        coverageName: 'coverage',
        coverageType: 'coverage',
        chartType: 'bar1',
        data: [],
        tableData: [],
        graphId: ''
    },
    entityFilter: {
        list: [],
        selectedList: []
    },
    dateRange: {
        startTs: '',
        endTs: '',
        count: 0,
        heatMapCount: 0,
        dates: [],
        heatMapResponseCount: 0
    }
}

export const Trending:Record<string, any> = {
    nextBatch: '',
    moreStats:[]
}

export const Feed:Record<string, any> = {
    nextBatch: [],
    moreFeed:[],
    governanceFeed:[],
    isInfiniteScrolling:false,

    newsfeedModal : {
        isShow: false,
        entityId: '',
        entityName: '',
        entityType: '',
        sentiment: '',
        nextBatch: [],
        insightsFilter: 'feed'
    }
}

export const widgets = [
    { type: 'party_mediatypes', setiment: 'all' },
    { type: 'state_leaders', setiment: 'all' },
    { type: 'governance_feed', setiment: 'all' }
];

