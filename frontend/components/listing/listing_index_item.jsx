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
       
        <button onClick={() => this.props.deleteListing(this.props.listing.id)}></button>
      </li>
    )
  }
}

export default ListingIndexItem