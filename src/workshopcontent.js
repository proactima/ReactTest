/** @jsx React.DOM */

var WorkshopContent = React.createClass({
	handleClick: function(event) {
		this.props.clicked();
	},
	
	render: function() {
		return (
			<div className="row">
				<div className="col-md-12">
					Concerns
					<img src="img/add.png" onClick={this.handleClick}/>
				</div>
        	</div>
		);
	}
});