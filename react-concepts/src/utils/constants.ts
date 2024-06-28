
const constants = {
    defaultQueryString: '&devicetype=1&networktype=wifi',
    defaultGlobalfilters: {
        date: {
            startTs: '2024-05-16 00:00:00',
            endTs: '2024-05-22 18:00:00'   
        },
        location: {
            mandalId: [],
            constituencyId: [],
            districtId: [],
            stateId: []
        },
        party: {
            id: [],
            sentimentId: []
        },
        leader: {
            id: [],
            functionId: [],
            sentimentId: []
        },
        tag: {
            id: [],
            entityTypeId: [],
            sentimentId: []
        },
        contextParty: {
            id: [],
            sentimentId: [],
        },
        contextLeader: {
            id: [],
            sentimentId: []
        },
        contextTag: {
            id: [],
            sentimentId: [],
        },
        sentiment: {
            id: []
        },
        source: {
            id: []
        },
        channel: {
            id: []
        },
        genre: {
            id: []
        },
        category: {
            id: [],
            contextId: [],
        },
        language: {
            id: []
        },
        contextCategory: {
            id: []
        }
    },
    tags: {
        issues: {
          genreId: ['29'],
          categoryId: ['204']
        },
        governance: {
          genreId: ['51'],
          categoryId: ['200']
        },
        crime: {
          genreId: ['33']
        },
        schemes: {
          categoryId: ['190']
        }
    },
    sources: [
        { 'id': '3', 'name': 'Facebook', 'imgUrl': '/images/news/facebook.svg' },
        { 'id': '4', 'name': 'Youtube', 'imgUrl': '/images/news/youtube.svg' },
        { 'id': '5', 'name': 'Twitter', 'imgUrl': '/images/news/twitter.svg' },
        { 'id': '6', 'name': 'Instagram', 'imgUrl': '/images/news/instagram.svg' },
        { 'id': '9', 'name': 'PublicVibe', 'imgUrl': '/images/news/publicvibe.svg' },
        { 'id': '13', 'name': 'PublicVibe', 'imgUrl': '/images/news/publicvibe.svg' },
        { 'id': '15', 'name': 'PublicVibe', 'imgUrl': '/images/news/publicvibe.svg' },
        { 'id': '16', 'name': 'Dailyhunt', 'imgUrl': '/images/news/dailyhunt.svg' },
    ],
    partySemtimentWhiteListWidgets: ['state_parties', 'party_topics', 'state_issues', 'party_districts', 'party_constituencies', 'party_sources', 'party_socialmedia', 'party_mediatypes'],
    socialMediaColors: [
        {id: 'YOUTUBE', code: '#ff0000'},
        {id: 'INSTAGRAM', code: '#c32aa3'},
        {id: 'TWITTER', code: '#1da1f2'},
        {id: 'FACEBOOK', code: '#3b5998'},
    ],
    date: {
        format: {
            MMDD: 'YYYY-MM-DD',
            MMDDHH: 'YYYY-MM-DD 00:00:00',
            HHmm: 'YYYY-MM-DD HH:mm:00',
            DDHH: 'YYYY-MM-DD HH:00:00',
            MMMDO: 'Do MMM YYYY'
        },
        dayType: {
            HH: 'hours',
            DD: 'days',
            MM: 'month',
            D: 'day'
        }
    },

    infographicInsights : [

        {'id':'coverage','name':'coverage',isDisable:false},
        {'id':'positive coverage','name':'positive coverage',isDisable:false},
        {'id':'negative coverage','name':'negative coverage',isDisable:false},
    
        {'id':'reach','name':'reach',isDisable:false},
        {'id':'positive reach','name':'positive reach',isDisable:false},
        {'id':'negative reach','name':'negative reach',isDisable:false},
    
        {'id':'sentiment','name':'sentiment',isDisable:false},
        {'id':'rank','name':'rank',isDisable:false},
    
        {'id':'constituencies','name':'constituencies',isDisable:false},
        {'id':'constituenciesPositiveCoverage','name':'positive constituencies',isDisable:false},
        {'id':'constituenciesNegativeCoverage','name':'negative constituencies',isDisable:false},
    
        {'id':'topics','name':'topics',isDisable:false},
        {'id':'topicsPositiveCoverage','name':'positive topics',isDisable:false},
        {'id':'topicsNegativeCoverage','name':'negative topics',isDisable:false},
    
        {'id':'sources','name':'sources',isDisable:false},
        {'id':'sourcesPositiveCoverage','name':'positive sources',isDisable:false},
        {'id':'sourcesNegativeCoverage','name':'negative sources',isDisable:false},
    
        {'id':'leaders','name':'leaders',isDisable:false},
        {'id':'leadersPositiveCoverage','name':'positive leaders',isDisable:false},
        {'id':'leadersNegativeCoverage','name':'negative leaders',isDisable:false},
    
        {'id':'followers','name':'followers',isDisable:false}
    
      ]
}

export default constants;