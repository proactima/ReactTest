/** @jsx React.DOM */
var React = require('react/addons');

var Missing = React.createClass({displayName: 'Missing',
	render: function() {
		return (
      		React.DOM.div( {className:"my-fluid-container"}, 
  				React.DOM.div( {className:"row"}, 
  					React.DOM.div( {className:"jumbotron"}, 
  						React.DOM.h1(null, "Page not found!"),
  						React.DOM.p(null, React.DOM.a( {className:"btn btn-primary btn-lg", role:"button"}, "Learn more"))
  					)
  				)
  			)
		);
	}
});

module.exports = Missing;