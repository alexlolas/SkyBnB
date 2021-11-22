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

  // componentWillUnmount() {
  //   this.props.clearErrors()
  // }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>
        {this.renderErrors()}
        <input type="text" 
               placeholder='Email'
               value={this.state.email} 
               onChange={this.update('email')}
        />
        <br />
        <input type="text" 
               placeholder='First Name'
               value={this.state.firstName} 
               onChange={this.update('firstName')}
        />
        <br />
        <input type="text" 
               placeholder='Last Name'
               value={this.state.lastName} 
               onChange={this.update('lastName')}
        />
        <br />
        <input type="password" 
               placeholder='Password'
               value={this.state.password} 
               onChange={this.update('password')}
        />
        <br />
        <button>Create User</button>
      </form>
    )
  }
}

export default Signup