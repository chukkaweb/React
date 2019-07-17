import axios from "axios";

export const comLocation = {
  
    communityLocation : {},
    vibeFeedPosts : [],
    top30FeedPosts : []
}



export function getTop30Feed (){
    return(dispatch) => axios.get('https://api.publicvibe.com/pvrest-2/restapi/vposts/toppicks/batch/0?userid=2&&district=167368&locationid=167368&locationtypeid=12&latitude=16.5103177&longitude=80.5742485&language=2&devicetype=1&networktype=wifi')

    .then(response => {
            comLocation.top30FeedPosts = response.data.posts
        dispatch({type:'GET_TOP30FEED', top30feed: comLocation.top30FeedPosts})
    }

    )
}



export function getVibeFeed (){

    return(dispatch) => axios.get('https://api.publicvibe.com/pvrest-2/restapi/vposts/latest/location/167368/batch/0?userid=2&language=2&radius=0&devicetype=1&networktype=wifi')

    .then(response => {
        comLocation.vibeFeedPosts = response.data.posts
        dispatch({type:'GET_VIBEFEED', vibefeed: comLocation.vibeFeedPosts})
    }

    )
}

export function toggleLocationModal () {
    return {
        type : 'LOCATION_MODAL'
        
    }
}

export function getCommunityLocations () {
   return (dispatch) => axios.get('https://api.publicvibe.com/pvrest-2/restapi/community/locations?userid=2&devicetype=1&networktype=wifi')
.then(response => {
    dispatch({type:'GET_LOCATIONS', communityLocations : response.data.list})
})
}

export function getLocationsFeed (locations) {
   
    return (dispatch) => {
        
       return (
           comLocation.communityLocation.radius = 0,
   comLocation.communityLocation.name = locations.locationName,
    comLocation.communityLocation.communityTypeId = locations.communityTypeId,
    comLocation.communityLocation.id = locations.id,
    comLocation.communityLocation.latitude = locations.latitude,
    comLocation.communityLocation.longitude = locations.longitude
       ),
       
       dispatch(toggleLocationModal()),
       dispatch(getVibeLatestFeed())
      
    }
    
  }

  export function getVibeLatestFeed () {
   comLocation.vibeFeedPosts = []
   return (dispatch) => axios.get('https://api.publicvibe.com/pvrest-2/restapi/vposts/latest/district/' + comLocation.communityLocation['id'] + '/batch/0?userid=2&language=2&radius=0&devicetype=1&networktype=wifi').then(response => {
        if (response.data.posts === undefined || response.data.posts === null || response.data.posts === '') { 
       
          return; 
        }
        if (response.data.posts.length > 0) {
            response.data.posts.forEach((item) => {
             comLocation.vibeFeedPosts.push(item);
            });
           
          }
        
        dispatch({type:'GET_VIBE_LATEST_FEED', vibeLatestFeed:comLocation.vibeFeedPosts})
       
    })
  
  }

  export function  titleUpdate (feed) {
    
    return (dispatch) => {
        
        if(comLocation.vibeFeedPosts.length > 0){
            
            comLocation.vibeFeedPosts.forEach((item) => {
                if(item.postId === feed.postId){
                    console.log(item.title)
                   item.title="rajesh"
                  console.log(item.title)
                }
               
            })  
            
        }
        
      
        dispatch({type:'GET_TITLE_UPDATE', updateFeed:comLocation.vibeFeedPosts}) 
    }
  }

  


  /* export function btnUpdate () {
      return (dispatch) => {
          
        dispatch({type:'BTNUPDATE'})
      }
     
  } */