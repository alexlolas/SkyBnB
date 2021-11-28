import React from "react";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  componentDidMount() {
    this.props.fetchListings()
  }

  render (){
    return (
      <ul>
          {this.props.listings.map((listing, idx) => (
             <ListingIndexItem  key={idx} listing={listing} deleteListing={this.props.deleteListing}/>
          ))}
      </ul>
    )
  }
}

export default ListingIndex