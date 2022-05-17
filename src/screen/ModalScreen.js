import React, { Component }  from 'react';

export default class ModalScreen extends Component {
  render(){
    return(<>
      <div className='d-flex flex-wrap'>
        <div className='col-3'>
          <p>Name</p>
          <p>Email</p>
          <p>Cell/Phone</p>
          <p>Nationality</p>
          <p>Date Of BirthDay</p>
          <p>Address</p>
        </div>
        <div className='col-9'>
          <p>: {this.props.name} {this.props.last_name}</p>
          <p>: {this.props.email}</p>
          <p>: {this.props.cell} / {this.props.phone}</p>
          <p>: {this.props.nat}</p>
          <p>: {this.props.dob} Years Old</p>
          <p>: {this.props.street_number}, {this.props.street_name}, {this.props.city}, {this.props.state}, {this.props.country}, {this.props.postcode}</p>
        </div>
      </div>
    </>
    )
  }
}
