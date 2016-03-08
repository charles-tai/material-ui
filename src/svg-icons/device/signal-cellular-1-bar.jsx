<<<<<<< HEAD
const React = require('react/addons');
const PureRenderMixin = React.addons.PureRenderMixin;
const SvgIcon = require('../../svg-icon');

const DeviceSignalCellular1Bar = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path fill-opacity=".3" d="M2 22h20V2z"/><path d="M12 12L2 22h10z"/>
      </SvgIcon>
    );
  }

});

module.exports = DeviceSignalCellular1Bar;
=======
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let DeviceSignalCellular1Bar = (props) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M12 12L2 22h10z"/>
  </SvgIcon>
);
DeviceSignalCellular1Bar = pure(DeviceSignalCellular1Bar)
DeviceSignalCellular1Bar.displayName = 'DeviceSignalCellular1Bar';

export default DeviceSignalCellular1Bar;
>>>>>>> upstream/master
