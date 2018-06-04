import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import {preloadApp_css} from '../Config/css'

 

export default class PreloadApp extends Component {
  render() {
    return (
      <View style={preloadApp_css.container}>
        <Image source={logo} style={preloadApp_css.logo} />
      </View>
    )
  }
}

/*
Khai bao const
*/

const logo=require("../../resources/images/logo_white.png")