import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';

function App() {

  const authenticationStatus = useSelector((state)=>{return state.authentication.isAuthenticated})
  console.log(authenticationStatus)
  return (
    <>
    <Header></Header>
    {authenticationStatus ?<UserProfile></UserProfile> :<Auth></Auth>}
    <Counter />
    </>
    
  );
}

export default App;
