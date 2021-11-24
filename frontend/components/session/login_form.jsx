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

  componentWillUnmount(){
    this.props.clearErrors()
  }

  renderErrors(){
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
      <form onSubmit={this.handleSubmit} className="session-form">
        <h2 className='modal-title' >Log In</h2>
        <div className="modal-content">
          <div className='modal-errors' >{this.renderErrors()}</div>
          <input className='modal-inputs'
                type="text" 
                 placeholder='Email'
                 value={this.state.email} 
                 onChange={this.update('email')}
          />
        <br />
          <input className='modal-inputs'
                type="password" 
                 placeholder='Password'
                 value={this.state.password} 
                 onChange={this.update('password')}
          />
        <br />
        <button className="modal-submit">Log In</button>
        </div>
          <div className='modal-footer' onClick=''>Log in or
          <button className='button'>{this.props.otherForm}</button>
          </div>
      </form>
    )
  }
}

export default LoginForm