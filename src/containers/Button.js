import React from 'react';
import { connect } from 'react-redux';
import { getNewss } from '../actions'



class Button extends React.Component {
 
  render() {
    return (
      <button
        onClick={this.props.loadnews}
      >Press to see News</button>
    );
  }

};

const mapDispatchToProps = {
  loadnews: getNewss,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
