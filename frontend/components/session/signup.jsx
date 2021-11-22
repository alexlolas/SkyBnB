import React from "react";

class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.signupUser(this.state)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>
        <label >Email
        <input type="text" 
               value={this.state.email} 
               onChange={this.update('email')}
        />
        </label>
        <br />
        <label >First Name
        <input type="text" 
               value={this.state.firstName} 
               onChange={this.update('firstName')}
        />
        </label>
        <br />
        <label >Last Name
        <input type="text" 
               value={this.state.lastName} 
               onChange={this.update('lastName')}
        />
        </label>
        <br />
        <label >Password
        <input type="password" 
               value={this.state.password} 
               onChange={this.update('password')}
        />
        </label>
        <br />
        <button>Create User</button>
      </form>
    )
  }
}

export default Signup