import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import { getTop30Feed} from '../actions'
import Truncate from 'react-truncate';

class Top30 extends Component {
    state = {  }
    componentDidMount() {
        this.props.getTop30Feed()
    }
    render() { 
        
        return ( 
            <React.Fragment>
                <div className="top30-container"> 
    
                    <Carousel  showArrows={false} onChange={this.selectCarousel}  selectedItem={this.state.currentSlide}   swipeable={true} centerSlidePercentage={90}  showIndicators={false} style={{background:"transparent"}} centerMode={true} showThumbs={false}>
                    {this.props.top30Feed.map(feed => {
                 
                  
                 return (
                  
                   <div className="margin"   key={feed.postId} >
                   
                   <div className="image_wrapper">
                     <img  className="image" style={{display: feed.imageUrlMedium.length > 0 ? 'block' : 'none'}} src={feed.imageUrlMedium[0]} onError={(e)=>{e.target.onerror = null; e.target.src="https://www.pvibe.in/web/dashboards/placeholder.jpg"}} alt="posts" />
                     <img  className="image" style={{display: feed.imageUrlMedium.length === 0 ? 'block' : 'none'}} src="https://www.pvibe.in/web/dashboards/placeholder.jpg" alt="posts" />
                     <div className="image_layer"></div>
                     <div className="play_icon" style={{display: feed.newsTypeId === '98' ? 'block' : 'none'}}></div>
             
                   </div>
                   
                   <div className="legend">
                   <Truncate lines={2} trimWhitespace={true} ellipsis={<span>...</span>}>
                       {feed.title}
                     </Truncate>
                     </div>
                     
                     
             
                   
                   
                   </div>  
                  
                 );
               })}

                    </Carousel>
  
                </div>
            </React.Fragment>
         );
    }
}

function mapStateToProps(store){
    return{
        top30Feed : store.top30Feed
    }
    
}

function mapDispatchToProps(dispatch){
    return{
        getTop30Feed :   function () {
            dispatch(getTop30Feed())
        },
       
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Top30)