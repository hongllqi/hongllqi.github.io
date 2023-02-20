import React from "react";
import { AccessibilityInfo, findNodeHandle, TVEventHandler } from 'react-native';

export class TVControler extends React.Component {
  _tvEventHandler: any;

  _enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, function (cmp, evt) {
      console.log(`Cmp: ${cmp} eventType: ${evt.eventType}`);
    });
  }

  _disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }

  componentDidMount() {
    this._enableTVEventHandler();
  }

  componentWillUnmount() {
    this._disableTVEventHandler();
  }

  render() {
    
  }
}