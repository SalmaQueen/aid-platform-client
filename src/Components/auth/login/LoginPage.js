import React from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../../_actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // reset login status
   this.props.logout();
    this.state = {
      email: "",
      password: "",
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
   
  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
        await this.props.login(email, password);
        const { loggingIn } = this.props;
        console.log( loggingIn )
    }
}


 
      //  "https://guarded-eyrie-31559.herokuapp.com/api/v1/sessions",
      
  render(){
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}



function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };

//  export default LoginPage;