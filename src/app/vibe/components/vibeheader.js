import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import { connect } from 'react-redux';
import { toggleLocationModal, getCommunityLocations,getLocationsFeed,comLocation } from '../actions';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class VibeHeader extends Component {
    state = { 
        dropdownOpenAndhrapradesh: false,
        dropdownOpenTelangana: false
     }
     toggleAndhraPradesh = () =>{
        this.setState(prevState => ({
            dropdownOpenAndhrapradesh: !prevState.dropdownOpenAndhrapradesh
          }));
     }
     toggleTelangana = () => {
        this.setState(prevState => ({
            dropdownOpenTelangana: !prevState.dropdownOpenTelangana
          }));
     }
     componentDidMount() {
         this.props.getCommunityLocations()
     }
    render() { 
        return ( 
            <React.Fragment>
                <header className="vibe_header_container">
          <div className="vibe_header language_font">
            <div className="current_location">
              <MDBBtn onClick={this.props.locationToggleModal} >
              
               {comLocation.communityLocation.name}
             
                <span className="location_dropdown">
                  <img src="images/ic_push_down.svg" alt="" />
                </span>
              </MDBBtn>
              
            </div>
            <MDBModal isOpen={this.props.locationModal} toggle={this.props.locationToggleModal}  >
              <div className="modal_header">
                <MDBModalHeader toggle={this.props.locationToggleModal}>
                  <span onClick={this.props.locationToggleModal} className="left_arrow">
                    <img className="nav_image" src="images/ic_back.svg" alt="" />
                  </span>
                </MDBModalHeader>
              </div>
              <div className="modal_body">
                <MDBModalBody>
                <div className="location_select_info">
          <div className="title">
                           <center><strong>Choose your location</strong></center>
                        </div>
            <div className="current_search">
                
                            <div className="districts_popular_cities">
                                <div className="cities">
                                    <div className="title">
                                        Districts and popular cities
                                    </div>
                                <div className="states">
                                    <div className="state">
                                        
                                 
                                      <Dropdown isOpen={this.state.dropdownOpenAndhrapradesh} toggle={this.toggleAndhraPradesh}>
                                          <DropdownToggle className="select_location">
                                          Andhrapradesh<span className="pull-right"><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
                                          </DropdownToggle>
                                          <DropdownMenu style={{left:"-9px",top:"32px"}}>
                                          {this.props.communityLocations.map(locations => {
                                                                      if(locations.parentName === "Andhra Pradesh"){
                                                                      return(
                                                                        
                                                                      
                                                                        <DropdownItem onClick={() => this.props.getLocationsFeed(locations)} key= {locations.id} >{locations.locationName}</DropdownItem>
                                                                      )}
                                                                    })
                                                                        
                                                                    }
                                          
                                          </DropdownMenu>
                                      </Dropdown>
                                      </div>
                                      
                                    <div className="state" style={{position:"relative"}}>
                                    
                                       
                                        
                                             
                                    <Dropdown isOpen={this.state.dropdownOpenTelangana} toggle={this.toggleTelangana}>
                                        <DropdownToggle className="select_location">
                                        Telangana<span className="pull-right"><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
                                        </DropdownToggle>
                                        <DropdownMenu style={{left:"-9px",top:"32px"}}>
                                        {this.props.communityLocations.map(locations => {
                                                                    if(locations.parentName === "Telangana"){
                                                                    return(
                                                                      
                                                                    
                                                                      <DropdownItem onClick={() => this.props.getLocationsFeed(locations)} key= {locations.id} >{locations.locationName}</DropdownItem>
                                                                    )}
                                                                  })
                                                                      
                                                                    }
                                        
                                        </DropdownMenu>
                                    </Dropdown>
                                               
                                          
                                              
                                          
                                       
                                    </div>
                                </div>
                                
                                </div>
                                
                            </div>
               </div>        
                </div>
                </MDBModalBody>
              </div>
            </MDBModal>
          
           
            
          </div>
         
        </header>
            </React.Fragment>
         );
    }
}
const mapStateToProps = (store) => {
    return {
        locationModal : store.vibeLocationModal,
        communityLocations : store.communityLocations
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        locationToggleModal : () => dispatch(toggleLocationModal()),
        getCommunityLocations : () => dispatch(getCommunityLocations()),
        getLocationsFeed : (locations) => dispatch(getLocationsFeed(locations))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(VibeHeader);