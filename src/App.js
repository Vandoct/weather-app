import PrivateRoute from 'components/util/PrivateRoute';
import AppWrapper from 'components/wrapper/AppWrapper';
import { LOGIN } from 'constants/webRoute';
import Home from 'container/home/Home';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import Login from './container/login/Login';

function App() {
  const history = useHistory();

  return (
    <AppWrapper>
      <ToastContainer transition={Slide} />
      <Switch>
        <Route path={LOGIN}>
          <Login />
        </Route>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <h1>Profile</h1>
          <Link to={{ pathname: '/', state: history.location }}>Home</Link>
        </PrivateRoute>
        <Route path="*">
          <Redirect to={LOGIN} />
        </Route>
      </Switch>
    </AppWrapper>
  );
}

export default App;
