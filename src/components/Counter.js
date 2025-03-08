import classes from './Counter.module.css';
import {useDispatch,useSelector} from 'react-redux'

const Counter = () => {

  const counter = useSelector((state)=>{return state.counter})
  const dispatch = useDispatch()

  function handleIncrement(){
    dispatch({type:"INCREMENT"})
  }

  function handleDecrement(){
    dispatch({type:"DECREMENT"})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
