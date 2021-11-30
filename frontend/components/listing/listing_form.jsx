import React from "react";

class ListingForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.listing
    this.handleSubmit = this.handleSubmit.bind(this)
    this.pageIndex = 0
    this.handlePageIndex = this.handlePageIndex.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.action(this.state)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handlePageIndex(e){
    e.preventDefault()
    this.pageIndex += 1
    this.forceUpdate()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.formType}</h2>
        {this.pageIndex === 0 ? (
          <div>
            <label> Title
              <input type="text" value={this.state.title} onChange={this.update('title')}/>
            </label>
            <button onClick={this.handlePageIndex}>Next</button>
          </div>
        ): null}
        
        {this.pageIndex === 1 ? (
        <label> Description
          <input type="text" value={this.state.description} onChange={this.update('description')}/>
        </label>
        ) : null}
        <br />
        <label> State
          <input type="text" value={this.state.state} onChange={this.update('state')}/>
        </label>
        <br />
        <label> City
          <input type="text" value={this.state.city} onChange={this.update('city')}/>
        </label>
        <br />
        <label> Zip Code
          <input type="text" value={this.state.zipCode} onChange={this.update('zipCode')}/>
        </label>
        <br />
        <label> Address
          <input type="text" value={this.state.address} onChange={this.update('address')}/>
        </label>
        <br />
        <label> Price
          <input type="text" value={this.state.price} onChange={this.update('price')}/>
        </label>
        <br />
        <label> Rooms
          <input type="text" value={this.state.rooms} onChange={this.update('rooms')}/>
        </label>
        <br />
        <label> Number of Beds
          <input type="text" value={this.state.numBeds} onChange={this.update('numBeds')}/>
        </label>
        <br />
        <label> Bathrooms
          <input type="text" value={this.state.bathrooms} onChange={this.update('bathrooms')}/>
        </label>
        <br />
        <label> Capacity
          <input type="text" value={this.state.capacity} onChange={this.update('capacity')}/>
        </label>
        <br />
        <button value={this.props.formType}>{this.props.formType}</button>
      </form>
    )
  }
}

export default ListingForm