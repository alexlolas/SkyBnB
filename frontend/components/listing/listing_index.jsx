import React from "react";
import ListingIndexItem from "./listing_index_item";
import { Suitcase } from "../svg/svg";

class ListingIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchListings()
  }

  render (){
    return (
      <div className='index-container'>
        <div className='listing-left-container'>
        <div className='listings-found'>

        {this.props.listings.length !== 1 ? (
          <div>{this.props.listings.length}&nbsp;Stays in the area</div>

        ) : <div>{this.props.listings.length}&nbsp;Listing Found</div>
}
        </div>
          <div className="suitcase"
          ><Suitcase />
          </div>
          <div className="text">&nbsp; &nbsp; &nbsp; &nbsp;   Click on a listing to see more details and book your trip today!</div>
        <ul className="listing-container">
            {this.props.listings.map((listing, idx) => (
               <ListingIndexItem  key={idx} session={this.props.session} listing={listing} removeListing={this.props.removeListing}/>
            ))}
        </ul>
        </div>
      </div>
      )
  }
}

export default ListingIndex