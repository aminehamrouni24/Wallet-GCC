
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from "./app/Navigations/Route";

export default class App extends Component {
  
  componentDidMount() {
    SplashScreen.hide();
  }

  render(){
    return (
      <Routes/>
    );
  }
};