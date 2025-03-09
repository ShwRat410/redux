import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {authenticationActions} from '../store/authenticationSlice' 

const Header = () => {

  const authenticationStatus = useSelector((state)=>{return state.authentication.isAuthenticated})
  console.log(authenticationStatus)
  const dispatch = useDispatch()

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(authenticationActions.logout())
  } 

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authenticationStatus && (
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Header;
