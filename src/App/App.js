import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
// import { PrivateRoute } from '../_components';

// import Registration from "../Components/auth/Registration";
import { HomePage } from "../Components/HomePage";
import { LoginPage } from "../Components/auth/login";
import { RegisterPage } from "../Components/auth/register";

// import Logout from "../Components/auth/Logout";

class App extends React.Component {

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div >
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
            
                <Router history={history}>
                    <Switch>
                        {/* <PrivateRoute exact path="/" component={HomePage}/> */}
                        {/* <Route path="/register" component={Registration} /> */}
                        {/* let NavComponent = <Login/> */}
                        <Route exact path="/" component={HomePage} />

                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />

                        
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        )

    }


}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };