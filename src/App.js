import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Layout} from './components/presentation/Layout';
import {Home} from './components/Home';
import Navigation from './components/presentation/Navigation'; 
import {Error} from './components/Error';
import NewSearch from './components/NewSearch';
import SearchPreference from './components/SearchPreference';
import {login} from './actions/action';

function App(props) {
  return (
    <div className="App">
      <React.Fragment>        
        <Router>
        <Navigation/>
        <Layout>
          <Switch>
            <Route path='/' exact render={(props) => <Home {...props}/>} />
            {props.loggedIn ? <Route path='/newSearch/:ticker' exact component={NewSearch} />: <Redirect to={{pathname: '/'}}/>}
            <Route path='/error' exact component={Error} />
            <Route path='/preference/:preferenceId'  exact component={SearchPreference} />
          </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    </div>
  );
}

const mapStatetoProps = state => ({
  loggedIn: state.auth.loggedIn,
  errorMessage: state.error.errorMessage,
  errorOccurred: state.error.errorOccurred,

})
  
export default connect(mapStatetoProps, {login})(App);

//export default App;
