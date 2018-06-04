import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import PreloadApp from '../shared/preloadApp';
import configureStore from './configureStore';
import {Provider} from 'react-redux'
import ComA from '../modules/ModuleA'
import { PersistGate } from 'redux-persist/integration/react'

export default class Setup extends Component {  
    constructor() {
        super();
        this.state={st:configureStore()}
      
    }
  render() {
    return (
      <Provider store={this.state.st.store}>
      <PersistGate loading={<PreloadApp/>} persistor={this.state.st.persistor}>
        <ComA/>
      </PersistGate>
    </Provider>
    );
  }
}
