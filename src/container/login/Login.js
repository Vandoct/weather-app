import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../redux';

const Login = () => {
  const [field, setField] = useState({ username: '', password: '' });
  const { isLoading, isLoggedIn } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFieldChange = (e) => {
    setField((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(field.username, field.password))
      .then((msg) => {
        toast.success(msg, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error(err, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  if (isLoggedIn)
    return <Redirect to={history.location.state?.from?.pathname || '/'} />;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h3>User: a</h3>
      <h3>Pass: a</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={field.username}
          onChange={handleFieldChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={field.password}
          onChange={handleFieldChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
