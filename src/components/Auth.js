import classes from './Auth.module.css';
import { authenticationActions } from '../store/authenticationSlice';
import { useDispatch } from 'react-redux';

const Auth = () => {

  const dispatch = useDispatch();

  function handleformSubmit(event){
    event.preventDefault()
    dispatch(authenticationActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleformSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
