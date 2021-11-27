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
      .then(this.props.closeModal);    
  }

  handleSubmitDemo(e){
    e.preventDefault()

    const demoUser = { 
        email: 'DemoUser',
        password: 'DemoUser'
     }

    this.props.loginUser(demoUser)
      .then(this.props.closeModal())
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  render(){
    
    return (
      <div>
      <form onSubmit={this.handleSubmit} className="session-form">
        <h2 className='modal-title' >Log In</h2>
        <div className="modal-content">
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
            <div className='modal-errors'>
              {this.props.errors ? this.props.errors.invalid : ''}
            </div>
        <br />
        <button className="modal-submit">Log In</button>
        <br />
              <button className='demo-user' onClick={(e) => this.handleSubmitDemo(e)}>Demo User</button>
            
        </div>
          <div className='modal-footer'>Log in or
          <button type='button' className='button'>{this.props.otherForm}</button>
          </div>
         
          
      </form>
      </div>
    )
  }
}

export default LoginForm