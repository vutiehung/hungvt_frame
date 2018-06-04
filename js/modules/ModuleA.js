import React, { Component } from 'react';
import {  View, Text,TouchableOpacity } from 'react-native';
import {ComA_css} from '../Config/css'
import ComB from './ModuleB'
import {connect} from 'react-redux'

 class ComA extends Component {
  OnClick() {
    
    this.props.dispatch({type:"click"})
  }
   
  render() {
    return (
      <View style={ComA_css.container}> 
      <TouchableOpacity onPress={this.OnClick.bind(this)}><Text>Change Color</Text></TouchableOpacity>
       <ComB/>
      </View>
    );
  }
}





export default connect()(ComA)