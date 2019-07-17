import React, { Component } from 'react';
import {
    MDBCard, MDBCardBody,
    MDBCardTitle, MDBCardText
} from 'mdbreact';
import Truncate from 'react-truncate';
import { getVibeFeed,getVibeLatestFeed,titleUpdate, comLocation } from '../actions';
import { connect } from 'react-redux';

class VibeFeed extends Component {
    state = {  }
    componentWillMount() {
       this.props.getVibeFeed()
        
    }
    render() { 
        console.log(this.props.vibeFeed)
        return ( 
            <React.Fragment>
                                
                    <div className="vibecard_container">
                        {this.props.vibeFeed.map(feed => {
                            return (
                                <div className="vibe_feed_container"  >
                                    <div className="vibe_card_info">
                                    
                                        <MDBCard onClick={() => this.props.update(feed)} key={feed.postId}>
                                        
                                            <div className="header">
                                                <div className="profile_info">
                                                    <div className="profile_img" >
                                                        <img src={feed.who.imageUrl} style={{display: feed.who.imageUrl !== null && feed.who.imageUrl !== '' ? 'block': 'none'}} onError={(e) => { e.target.onerror = null; e.target.src = 'https://www.pvibe.in/web/images/user_profile.svg' }} alt="" />
                                                        <img src="https://www.pvibe.in/web/images/user_profile.svg" style={{display: feed.who.imageUrl === null || feed.who.imageUrl === '' ? 'block': 'none'}}  alt="" />
                                                    </div>
                                                    <div className="source_info">
                                                        <div className="profile_title">
                                                            {feed.who.name}
                                                        </div>
                                                        <div className="date_info">
                                                           {/*  <div className="date"><Moment add={{ hours: 5.30 }} fromNow ago>{feed.publishedDate}</Moment></div>
                                                            <div className="dot">.</div> */}

                                                            <div className="district_title" style={{display: feed.location !== null && feed.location.name !== null ? 'block': 'none'}}>
                                                                {/* <span style={{display: feed.location.name.length > this.state.locText ? 'block' : 'none'}}>{feed.location.name.substring(0,this.state.locText)}<span>...</span></span> */}
                                                                <span /* style={{display: feed.location.name.length <= this.state.locText ? 'block' : 'none'}} */>{feed.location.name}</span>
                                                            </div>
                                                        </div>
                            
                                                    </div>
                                                </div>
                                            </div>
                                            <MDBCardBody> 
                                                <MDBCardTitle >{feed.title}</MDBCardTitle>
                                                <MDBCardText >
                                                    <Truncate lines={3} trimWhitespace={true} ellipsis={<span>...</span>}>
                                                        {feed.simpleDescription}
                                                    </Truncate>
                                                </MDBCardText>
                                            </MDBCardBody>
                                            <div className="content_image" style={{height: feed.newsTypeId === '98' ? '250px' : 'auto'}}>
                                                <img className="img-fluid" style={{display: feed.imageUrlMedium.length > 0 ? 'block' : 'none', height: feed.newsTypeId === '98' ? '250px' : 'auto'}} src={feed.imageUrlMedium[0]} waves onError={(e) => { e.target.onerror = null; e.target.src = "https://www.pvibe.in/web/dashboards/placeholder.jpg" }} />
                                                <img className="img-fluid" style={{display: feed.imageUrlMedium.length === 0 ? 'block' : 'none', height: feed.newsTypeId === '98' ? '250px' : 'auto'}} src="https://www.pvibe.in/web/dashboards/placeholder.jpg" alt="" />
                                    
                                                <div style={{display: feed.newsTypeId === '98' ? 'block' : 'none'}}>
                                                    <div className="image_layer"></div>
                                                    <div className="play_icon"></div>
                                                </div>
                                            </div>
                                            

                                            <div className="vibe_card_actions">
                                                <div className="feedback">
                                                    <fieldset>
                                                    <button   className="btn btn-raised btn-regular"><img className="vibefeed_actions" alt="action" src="images/post_like_default.svg" /><span className="actions_title">Like</span></button>
                                                        <div className = "comment_container">
                                                <button   className="btn btn-raised btn-regular"><img className="vibefeed_actions" alt="action" src="images/post_comment.svg" /><span className="actions_title">Comment</span></button>
                                                
                                                
                                            </div>

                                            
                                            <div className="share_container">
                                            <button  type="button" className="btn btn-raised btn-regular"><img className="vibefeed_actions" alt="action" src="images/post_share.svg" /><span className="actions_title">Share</span></button>
                                            
                                            </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </MDBCard>


            
                     
                        </div>

                    </div>
                );
                  
                })}
   
                </div>
               
            </React.Fragment>
         );
    }
}

function mapStateToProps(store){
    return {
        vibeFeed :store.vibeFeed
        
    }
   
}

function mapDispatchToProps(dispatch) {
    return{
        getVibeFeed : function (){
            dispatch(getVibeFeed())
        },
        getVibeLatestFeed : function () {
            dispatch(getVibeLatestFeed())
        },
        
        update : function(feed) {
            
            dispatch(titleUpdate(feed))
        },
        /* btnUpdate : function(feed) {
            dispatch(btnUpdate(feed))
        } */ 
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps )(VibeFeed);