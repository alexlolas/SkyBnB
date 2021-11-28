import React from "react";

class ListingShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchListing(this.props.match.params.listingId)
  }
  render(){
    if (!this.props.listing) return null
    if (!this.props.users) return null
    return (
      <div>
        <label> Description:&nbsp;

          {this.props.listing.description}
        </label>
        <br />
        <label> State&nbsp;
          {this.props.listing.state}
        </label>
        <br />
        <label> City&nbsp;
          {this.props.listing.city}
        </label>
        <br />
        <label> Address&nbsp;
          {this.props.listing.address}
        </label>
        <br />
        <label> Zip Code&nbsp;
          {this.props.listing.zipCode}
        </label>
        <br />
        <label> Price&nbsp;
          ${this.props.listing.price}

        </label>
        <br />
        <label> Number of rooms&nbsp;
          {this.props.listing.rooms}

        </label>
        <br />
        <label> Number of beds&nbsp;
          {this.props.listing.numBeds}
        </label>
        <br />
        <label> Number of bathrooms&nbsp;
          {this.props.listing.bathrooms}

        </label>
        <br />
        <label> Holds&nbsp;
          {this.props.listing.capacity} people

        </label>
        <br />
            
      </div>
    )
  }
}

export default ListingShow