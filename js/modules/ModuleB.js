import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {ComB_css} from '../Config/css'
import {connect} from 'react-redux'

class ComB extends Component {
  
  getColor=()=>{
    console.log("adsfadf")
    console.log(this.props.myisBlue)
  if(this.props.myisBlue)
  return {...ComB_css.container,backgroundColor:"blue"}
  return ComB_css.container;
  }
  render() {
    return (
      <View style={this.getColor()}> 
       
      </View>
    );
  }
}



function mapStateToProps(state)
{
  
  return {myisBlue:state.test.isBlue}
}

export default connect(mapStateToProps)(ComB)