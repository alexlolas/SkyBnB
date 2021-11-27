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
      </li>
    )
  }
}

export default ListingIndexItem