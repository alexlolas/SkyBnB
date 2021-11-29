import React from "react";

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
        <label> Rating: 
        <input type="text" value={this.state.rating} onChange={this.update('rating')}  />
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