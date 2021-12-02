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
      .then(this.props.closeModal)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={i}>
  //           {error} 
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }

  render(){
    
    return (
      <form onSubmit={this.handleSubmit} className="session-form">
        <h2 className='modal-title'>Sign Up</h2>
        <div className="modal-content">
          <input className="modal-inputs"
              type="text" 
               placeholder='Email'
               value={this.state.email} 
               onChange={this.update('email')}
        />
          <div className='modal-errors'>
            {this.props.errors ? this.props.errors.email : ''}
          </div>
        <br />
          <input className="modal-inputs"
              type="text"
               placeholder='First Name'
               value={this.state.firstName} 
               onChange={this.update('firstName')}
        />
          <div className='modal-errors'>
            {this.props.errors ? this.props.errors.first : ''}
          </div>
        <br />
          <input className="modal-inputs"
              type="text"
               placeholder='Last Name'
               value={this.state.lastName} 
               onChange={this.update('lastName')}
        />
          <div className='modal-errors'>
            {this.props.errors ? this.props.errors.last : ''}
          </div>
        <br />
          <input className="modal-inputs"
              type="password"
               placeholder='Password'
               value={this.state.password} 
               onChange={this.update('password')}
        />
          <div className='modal-errors'>
            {this.props.errors ? this.props.errors.password : ''}
          </div>
        <br />
        <button className="modal-submit">Create User</button>
        </div>
        <div className='modal-footer'>Sign up or
          <button type='button' className='button'>{this.props.otherForm}</button>
        </div>
      </form>
    )
  }
}

export default Signup