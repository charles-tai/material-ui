<<<<<<< HEAD
const React = require('react/addons');
const PureRenderMixin = React.addons.PureRenderMixin;
const SvgIcon = require('../../svg-icon');

const ActionBook = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
      </SvgIcon>
    );
  }

});

module.exports = ActionBook;
=======
import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let ActionBook = (props) => (
  <SvgIcon {...props}>
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
  </SvgIcon>
);
ActionBook = pure(ActionBook)
ActionBook.displayName = 'ActionBook';

export default ActionBook;
>>>>>>> upstream/master
