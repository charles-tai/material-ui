<<<<<<< HEAD
const React = require('react/addons');
const PureRenderMixin = React.addons.PureRenderMixin;
const SvgIcon = require('../../svg-icon');

const DeviceSignalCellular2Bar = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path fill-opacity=".3" d="M2 22h20V2z"/><path d="M14 10L2 22h12z"/>
      </SvgIcon>
    );
  }

});

module.exports = DeviceSignalCellular2Bar;
=======
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let DeviceSignalCellular2Bar = (props) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M14 10L2 22h12z"/>
  </SvgIcon>
);
DeviceSignalCellular2Bar = pure(DeviceSignalCellular2Bar)
DeviceSignalCellular2Bar.displayName = 'DeviceSignalCellular2Bar';

export default DeviceSignalCellular2Bar;
>>>>>>> upstream/master
