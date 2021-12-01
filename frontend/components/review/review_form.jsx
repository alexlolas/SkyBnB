import React from "react";
import { FaStar } from 'react-icons/fa'

class ReviewForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.review

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createReview(this.state)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit}>
        <label> Title: 
        <input type="text" value={this.state.reviewTitle} onChange={this.update('reviewTitle')}  />
        </label>
        <br />
        <label> 
        <input className="rating-radio" type="radio"  name='rating' value='1' onChange={this.update('rating')}  />
         <FaStar key='1' size={30} color={this.state.rating >= 1 ? 'gold' : 'gray'}/>
        </label>
        <label> 
          <input className="rating-radio" type="radio"  name='rating' value='2' onChange={this.update('rating')}  />
         <FaStar key='2' size={30} color={this.state.rating >= 2 ? 'gold' : 'gray'}/>
        </label>
        <label> 
          <input className="rating-radio" type="radio"  name='rating' value='3' onChange={this.update('rating')}  />
         <FaStar key='3' size={30} color={this.state.rating >= 3 ? 'gold' : 'gray'}/>
        </label>
        <label> 
          <input className="rating-radio" type="radio"  name='rating' value='4' onChange={this.update('rating')}  />
         <FaStar key='4' size={30} color={this.state.rating >= 4 ? 'gold' : 'gray'}/>
        </label>
        <label> 
          <input className="rating-radio" type="radio"  name='rating' value='5' onChange={this.update('rating')}  />
         <FaStar key='5' size={30} color={this.state.rating >= 5 ? 'gold' : 'gray'}/>
        </label>
        <br />
        <label> Description: 
        <input type="text" value={this.state.body} onChange={this.update('body')}  />
        </label>
        <br />
        <button>Post Review</button>

      </form>
    )
  }
}

export default ReviewForm