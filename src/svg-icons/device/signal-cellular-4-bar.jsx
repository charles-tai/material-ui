<<<<<<< HEAD
const React = require('react/addons');
const PureRenderMixin = React.addons.PureRenderMixin;
const SvgIcon = require('../../svg-icon');

const DeviceSignalCellular4Bar = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M2 22h20V2z"/>
      </SvgIcon>
    );
  }

});

module.exports = DeviceSignalCellular4Bar;
=======
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let DeviceSignalCellular4Bar = (props) => (
  <SvgIcon {...props}>
    <path d="M2 22h20V2z"/>
  </SvgIcon>
);
DeviceSignalCellular4Bar = pure(DeviceSignalCellular4Bar)
DeviceSignalCellular4Bar.displayName = 'DeviceSignalCellular4Bar';

export default DeviceSignalCellular4Bar;
>>>>>>> upstream/master
