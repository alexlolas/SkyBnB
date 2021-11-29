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
      <div className="listing-container">

        <ul>
            {this.props.listings.map((listing, idx) => (
               <ListingIndexItem  key={idx} session={this.props.session} listing={listing} deleteListing={this.props.deleteListing}/>
            ))}
        </ul>
      )
      </div>
  }
}

export default ListingIndex