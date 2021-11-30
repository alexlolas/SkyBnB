import React from "react";

class ListingForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.listing
    this.handleSubmit = this.handleSubmit.bind(this)
    this.pageIndex = 0
    this.handlePageIndex = this.handlePageIndex.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFile = this.handleFile.bind(this)
    
  }

  handleSubmit(e){
    e.preventDefault()
    const formData = new FormData();
    formData.append('listing[description]', this.state.description);
    formData.append('listing[title]', this.state.title);
    formData.append('listing[state]', this.state.state);
    formData.append('listing[city]', this.state.city);
    formData.append('listing[zip_code]', this.state.zipCode);
    formData.append('listing[address]', this.state.address);
    formData.append('listing[price]', this.state.price);
    formData.append('listing[user_id]', this.state.userId);
    formData.append('listing[rooms]', this.state.rooms);
    formData.append('listing[bathrooms]', this.state.bathrooms);
    formData.append('listing[num_beds]', this.state.numBeds);
    formData.append('listing[capacity]', this.state.capacity);
    formData.append('listing[photo]', this.state.photoFile);
    formData.append('listing[house_type]', this.state.houseType);

    this.props.action(formData, this.props.listing.id)
  }

  update(field){
    
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handlePageIndex(e){
    e.preventDefault()
    this.pageIndex += 1
    this.forceUpdate()
  }

  handleClick(type){
  
     return this.setState({houseType: type})
     
  }

  handleFile(e){
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  render(){
    
    return (
      <div>    
      <form onSubmit={this.handleSubmit}>
     
        {this.pageIndex === 0 ? (
          <div className="form-container">
             <div className="login-form-left">
                  <label className="form-label"> What kind of place will you host? </label>
                </div>
          <div className="login-form-right">
            <div className='listing-type'>
                {this.state.houseType === 'Cottage' ? 
                  <div>
                    <input id='color-change' className="form-input-cottage" type='button' value='Cottage' onClick={() => this.handleClick('Cottage')}/>
                    <input className="form-input-house" type='button' value='House' onClick={() => this.handleClick('House')} />
                    <input className="form-input-apartment" type='button' value='Apartment' onClick={() => this.handleClick('Apartment')}/>
                    <input className="form-input-hotel" type='button' value='Hotel' onClick={() => this.handleClick('Hotel')}/>
                  </div>
                : this.state.houseType === 'House' ?
                   <div>
                     <input className="form-input-cottage" type='button' value='Cottage' onClick={() => this.handleClick('Cottage')}/>
                     <input id='color-change'className="form-input-house" type='button' value='House' onClick={() => this.handleClick('House')} />
                     <input className="form-input-apartment" type='button' value='Apartment' onClick={() => this.handleClick('Apartment')}/>
                     <input className="form-input-hotel" type='button' value='Hotel' onClick={() => this.handleClick('Hotel')}/>
                   </div>
                : this.state.houseType === 'Apartment' ?
                    <div>
                      <input className="form-input-cottage" type='button' value='Cottage' onClick={() => this.handleClick('Cottage')}/>
                      <input className="form-input-house" type='button' value='House' onClick={() => this.handleClick('House')} />
                      <input id='color-change'className="form-input-apartment" type='button' value='Apartment' onClick={() => this.handleClick('Apartment')}/>
                      <input className="form-input-hotel" type='button' value='Hotel' onClick={() => this.handleClick('Hotel')}/>
                    </div>
                : this.state.houseType === 'Hotel' ?
                    <div>
                      <input className="form-input-cottage" type='button' value='Cottage' onClick={() => this.handleClick('Cottage')} />
                      <input className="form-input-house" type='button' value='House' onClick={() => this.handleClick('House')} />
                      <input  className="form-input-apartment" type='button' value='Apartment' onClick={() => this.handleClick('Apartment')} />
                      <input id='color-change' className="form-input-hotel" type='button' value='Hotel' onClick={() => this.handleClick('Hotel')} />
                    </div>
              : 
                    <div>
                        <input className="form-input-cottage" type='button' value='Cottage' onClick={() => this.handleClick('Cottage')} />
                        <input className="form-input-house" type='button' value='House' onClick={() => this.handleClick('House')} />
                        <input  className="form-input-apartment" type='button' value='Apartment' onClick={() => this.handleClick('Apartment')} />
                        <input  className="form-input-hotel" type='button' value='Hotel' onClick={() => this.handleClick('Hotel')} />
                    </div>
              }
            <div className='next-position'>
                <button className='next-button' onClick={this.handlePageIndex}>Next</button>
            </div>
          </div>
        </div>
      </div>
        ): null}     
        {this.pageIndex === 1 ? (
          <div>
            <label> Title your listing and give a brief summary
              <input type="text" value={this.state.title} onChange={this.update('title')} />
              <input type="text" value={this.state.description} onChange={this.update('description')}/>
            </label>
            <button onClick={this.handlePageIndex}>Next</button>
          </div>
        ) : null}
        {this.pageIndex === 2 ? (
          <div>
            Where is your listing located?
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
            <button onClick={this.handlePageIndex}>Next</button>
          </div>
        ) : null}
        {this.pageIndex === 3 ? (
          <div> How many guests would you like to welcome?

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
            <button onClick={this.handlePageIndex}>Next</button>
            <br />
          </div>
        ) : null }
        {this.pageIndex === 4 ? (
          <div>
            Upload a photo of the place!
            <input type="file" onChange={this.handleFile} />
            <button value={this.props.formType}>{this.props.formType}</button>
          </div>
        ): null}
      </form>
 
      </div>
  
    )
  }
}

export default ListingForm