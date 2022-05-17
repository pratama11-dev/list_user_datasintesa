import React, { Component }  from 'react';

export default class ModalScreen extends Component {
  render(){
    return(<>
      <div className='d-flex flex-wrap'>
        <div className='col-3'>
          <p>Name</p>
        </div>
        <div className='col-9'>
          <p>: {this.props.name} {this.props.last_name}</p>
        </div>
        <div className='col-3'>
          <p>Email</p>
        </div>
        <div className='col-9'>
          <p>: {this.props.email}</p>
        </div>
        <div className='col-3'>
          <p>Cell/Phone</p>
        </div>
        <div className='col-9'>
          <p>: {this.props.cell} / {this.props.phone}</p>
        </div>
        <div className='col-3'>
          <p>Nationality</p>
        </div>
        <div className='col-9'>
          <p>: {this.props.nat}</p>
        </div>
        <div className='col-3'>
          <p>Date Of Birthday</p>
        </div>
        <div className='col-9'>
          <p>: {this.props.dob} Years Old</p>
        </div>
        <div className='col-3'>
          <p>Address</p>
        </div>
        <div className='col-9'>
          <p>: {this.props.street_number}, {this.props.street_name}, {this.props.city}, {this.props.state}, {this.props.country}, {this.props.postcode}</p>
        </div>
      </div>
    </>
    )
  }
}
