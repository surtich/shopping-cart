var React = require('react');
var AppActions = require('../../actions/app-actions');

var AddToCart =
  React.createClass({
    handleClick: function() {
      AppActions.addItem(this.props.item);
    },
    render: function() {
      return (<button className="btn btn-default" onClick={this.handleClick}>Add to cart</button>);
    }
  });

module.exports = AddToCart;
