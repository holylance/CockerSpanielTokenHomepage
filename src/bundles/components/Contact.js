import React from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/specific/contact.scss'

export default class Contact extends React.Component {
  render() {
    let options = {
      fullscreenControl: false
    }
    return (
      <div className='contact'>
        <h2>Please contact me</h2>
        <h4>Email</h4>
        <p>{this.props.email}</p>
        <h4>Address</h4>
        <p>{this.props.address}</p>
        <div className='google-map'>
        </div>
      </div>
    );
  }
}

Contact.defaultProps = {
  email: 'holylance82@gmail.com',
  address: 'Spandauer Damm 107, 14059 Berlin Germany',
  apiKey: 'AIzaSyBWzUmcRKnxUaK4e2Bd-29JX1c65ohedfc',
  text: 'Here',
  center: {lat: 52.531373, lng: 13.376973},
  zoom: 16
}

Contact.propTypes = {
  email: PropTypes.string,
  address: PropTypes.string,
  apiKey: PropTypes.string,
  text: PropTypes.string,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  zoom: PropTypes.number
}
