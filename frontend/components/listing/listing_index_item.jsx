import React from "react";

class ListingIndexItem extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <li>
        {this.props.listing.title}
        <br />
        Holds &nbsp;{this.props.listing.capacity}
        <br />
        {this.props.listing.rooms}&nbsp;Rooms&nbsp;&nbsp;
        {this.props.listing.bathrooms}&nbsp;Bathrooms
        {this.props.listing.userId === this.props.session ? (

          <button onClick={() => this.props.deleteListing(this.props.listing.id)}>Delete Listing</button>
        ) : null}
      </li>
    )
  }
}

export default ListingIndexItem