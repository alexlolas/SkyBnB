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
      <div >
        {this.props.listings.length !== 1 ? (
          <div>{this.props.listings.length}&nbsp;Listings Found</div>

        ) : <div>{this.props.listings.length}&nbsp;Listing Found</div>
}
        <ul className="listing-container">
            {this.props.listings.map((listing, idx) => (
               <ListingIndexItem  key={idx} session={this.props.session} listing={listing} removeListing={this.props.removeListing}/>
            ))}
        </ul>
      </div>
      )
  }
}

export default ListingIndex