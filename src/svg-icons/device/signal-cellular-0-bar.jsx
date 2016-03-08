<<<<<<< HEAD
const React = require('react/addons');
const PureRenderMixin = React.addons.PureRenderMixin;
const SvgIcon = require('../../svg-icon');

const DeviceSignalCellular0Bar = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path fill-opacity=".3" d="M2 22h20V2z"/>
      </SvgIcon>
    );
  }

});

module.exports = DeviceSignalCellular0Bar;
=======
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let DeviceSignalCellular0Bar = (props) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M2 22h20V2z"/>
  </SvgIcon>
);
DeviceSignalCellular0Bar = pure(DeviceSignalCellular0Bar)
DeviceSignalCellular0Bar.displayName = 'DeviceSignalCellular0Bar';

export default DeviceSignalCellular0Bar;
>>>>>>> upstream/master
