<<<<<<< HEAD
const React = require('react/addons');
const PureRenderMixin = React.addons.PureRenderMixin;
const SvgIcon = require('../../svg-icon');

const DeviceSignalCellular3Bar = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path fill-opacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/>
      </SvgIcon>
    );
  }

});

module.exports = DeviceSignalCellular3Bar;
=======
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let DeviceSignalCellular3Bar = (props) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/>
  </SvgIcon>
);
DeviceSignalCellular3Bar = pure(DeviceSignalCellular3Bar)
DeviceSignalCellular3Bar.displayName = 'DeviceSignalCellular3Bar';

export default DeviceSignalCellular3Bar;
>>>>>>> upstream/master
