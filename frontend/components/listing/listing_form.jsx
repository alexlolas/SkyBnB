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
    this.handleDecrement = this.handleDecrement.bind(this)
    this.photoNames = []
    
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
    formData.append('listing[house_type]', this.state.houseType);
    formData.append('listing[host_name]', this.state.hostName);
    formData.append('id', this.state.id);

    if (this.state.photos.length > 0 && this.state.photos.length < 5){
      for (let i = 0; i < this.state.photos.length; i++){
        formData.append('listing[photos][]', this.state.photos[i])
      }
    }

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

  handleDecrement(e){
    e.preventDefault()
    this.pageIndex -= 1
    this.forceUpdate()
  }

  handleClick(type){
  
     return this.setState({houseType: type})
     
  }

  handleFile(e){
    this.photoNames.push(e.currentTarget.files)
      
     this.setState({ photos: e.currentTarget.files })
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
            <div className="form-container">
              <div className="login-form-left">
                <label className="form-label"> Title your listing and give a brief summary </label>
              </div>
              <div className="login-form-right">
                 <div className='listing-type'>
                <div id='input-headers'>Title</div>
              <input placeholder="Give your place an enticing title!" type="text" value={this.state.title} onChange={this.update('title')} />
                  <div id='input-headers'>Description</div>
              <input placeholder='Describe your place' type="text" value={this.state.description} onChange={this.update('description')}/>
                  <div id='input-headers'>Host name</div>
              <input placeholder='First and last name' type="text" value={this.state.hostName} onChange={this.update('hostName')}/>
                  <div className='next-back-position'>
                <button className='next-button' onClick={this.handleDecrement}>Back</button>
                <button className='next-button' onClick={this.handlePageIndex}>Next</button>
              </div>
              </div>
              </div>
          </div>
        ) : null}
        {this.pageIndex === 2 ? (
          <div className="form-container">
              <div className="login-form-left">
                <label className="form-label"> Where is your listing located?</label>
              </div>
           <div className="login-form-right">
              <div className='listing-type'>
          <div id='input-headers'>Address</div>
          <input placeholder="Address is kept private until booking" type="text" value={this.state.address} onChange={this.update('address')}/>
        <div id='input-headers'>City</div>
          <input placeholder="Full name of the city" type="text" value={this.state.city} onChange={this.update('city')}/>   
        <div id='input-headers'>State</div>
          <input placeholder="Enter your states abbreviations ex: CA" type="text" value={this.state.state} onChange={this.update('state')}/> 
        <div id='input-headers'>Zip Code</div>
          <input placeholder="Closest applicable zip code" type="text" value={this.state.zipCode} onChange={this.update('zipCode')}/>

        <div className='next-back-position'>
           <button className='next-button' onClick={this.handleDecrement}>Back</button>
            <button className='next-button'onClick={this.handlePageIndex}>Next</button>
         </div>
          </div>
          </div>
            </div>
        ) : null}
        {this.pageIndex === 3 ? (
           <div className="form-container">
                <div className="login-form-left">
                  <label className="form-label"> How many guests can your place host? </label>
                </div>
              <div className="login-form-right">
               <div className='listing-type'>
          
                    <div id='input-headers'>Rooms</div>
              <input placeholder="Number of bedrooms" type="text" value={this.state.rooms} onChange={this.update('rooms')}/>
                    <div id='input-headers'>Number of Beds</div>
                  <input placeholder="Total of all beds in any room" type="text" value={this.state.numBeds} onChange={this.update('numBeds')}/>
      
                    <div id='input-headers'>Bathrooms</div>
                  <input placeholder="Total of full and half bathrooms"type="text" value={this.state.bathrooms} onChange={this.update('bathrooms')}/>
    
                    <div id='input-headers'>Capacity</div>
                  <input placeholder="Maximum amount of guests" type="text" value={this.state.capacity} onChange={this.update('capacity')}/>
            <div id='input-headers'>Price</div>
                  <input placeholder="Price per night" type="text" value={this.state.price} onChange={this.update('price')}/>
      
                  <div className='next-back-position'>
                    <button className='next-button' onClick={this.handleDecrement}>Back</button>
                    <button className='next-button' onClick={this.handlePageIndex}>Next</button>
                  </div>
            </div>
          </div>
          </div>
        ) : null }
        {this.pageIndex === 4 ? (
              <div className="form-container">
                <div className="login-form-left">
                  <label className="form-label"> Upload a photo of the place!</label>
                </div>
                <div className="login-form-right">
                  <div className='listing-type'>
                    <div>{this.photoNames.map((photo, idx) => {
                      return (
                        <div key={idx}>
                          {photo[0].name}
                        </div>
                      )
                    })}</div>
                  <input className="file-search" type="file" onChange={e => this.handleFile(e)} multiple/>
            {/* <input className="file-search" type="file" onChange={e => this.setState({ photos: e.target.files})} /> */}
                  <div className='next-back-position'>
                    <button className='next-button' onClick={this.handleDecrement}>Back</button>
                    <button className='next-button' value={this.props.formType}>{this.props.formType}!</button>
                  </div>
            </div>
          </div>
          </div>
        ): null}
      </form>
 
      </div>
  
    )
  }
}

export default ListingForm