import React from "react"
import PropTypes from "prop-types"
import "../stylesheets/specific/contact.scss"

export default class Contact extends React.Component {
    render() {
    	return (
      		<div className="contact">
        		<h2>Please contact me</h2>
        		<h4>Email</h4>
        		<p>{this.props.email}</p>
        		<br />
        		<br />
        		<br />
        		<br />
				<br />
        		<br />
        		<br />
        		<br />
				<br />
        		<br />
        		<br />
        		<br />
				<br />
        		<br />
        		<br />
        		<br />
      		</div>
    	);
  	}
}

Contact.defaultProps = {
  	email: "holylance82@gmail.com",
  	address: "Berlin Germany"
}

Contact.propTypes = {
  	email: PropTypes.string,
  	address: PropTypes.string
}
