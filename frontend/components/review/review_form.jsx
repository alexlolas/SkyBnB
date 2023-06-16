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

    if (this.props.currentUser){

      this.props.createReview(this.state)
      this.setState({
        body: '',
        guestId: this.props.currentUser,
        listingId: this.props.listingId,
        name: '',
        rating: ''
        
      })
      // this.setState({})
    } else {
      this.props.openModal('login')
     

    }
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return (
      <form className='form-box' onSubmit={this.handleSubmit}>
        <div className="review-form-text">Write a review!</div>
        <label> 
        <input className="rating-radio" type="radio"  name='rating' value='1' onChange={this.update('rating')}  />
         <FaStar key='1' size={27} color={this.state.rating >= 1 ? 'red' : 'gray'}/>
        </label>
        <label> 
          <input className="rating-radio" type="radio"  name='rating' value='2' onChange={this.update('rating')}  />
          <FaStar key='2' size={27} color={this.state.rating >= 2 ? 'red' : 'gray'}/>
        </label>
        <label> 
          <input className="rating-radio" type="radio"  name='rating' value='3' onChange={this.update('rating')}  />
          <FaStar key='3' size={27} color={this.state.rating >= 3 ? 'red' : 'gray'}/>
        </label>
        <label> 
          <input className="rating-radio" type="radio"  name='rating' value='4' onChange={this.update('rating')}  />
          <FaStar key='4' size={27} color={this.state.rating >= 4 ? 'red' : 'gray'}/>
        </label>
        <label> 
          <input className="rating-radio" type="radio"  name='rating' value='5' onChange={this.update('rating')}  />
         <FaStar key='5' size={27} color={this.state.rating >= 5 ? 'red' : 'gray'}/>
        </label>
        <div className="review-box">
          
          <div className='review-inputs-text'> Name </div>
            <input className="text-inputs" type="text" value={this.state.name} onChange={this.update('name')}  />
          <div className='review-inputs-text'> Description </div>
          <textarea placeholder='Describe your stay!' className='form-description'type="text" value={this.state.body} onChange={this.update('body')}  />

        <button className="create-post" >Post Review</button>
        </div>
      </form>
    )
  }
}

export default ReviewForm