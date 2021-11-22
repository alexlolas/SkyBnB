import React from "react";

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.loginUser(this.state)
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Log In</h2>
          <input type="text" 
                 placeholder='Email'
                 value={this.state.email} 
                 onChange={this.update('email')}
          />
        <br />
          <input type="password" 
                 placeholder='Password'
                 value={this.state.password} 
                 onChange={this.update('password')}
          />
        <br />
        <button>Log In</button>
      </form>
    )
  }
}

export default LoginForm