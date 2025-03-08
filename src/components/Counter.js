import classes from './Counter.module.css';
import {useDispatch,useSelector} from 'react-redux'
import { counterActions } from '../store/index'

const Counter = () => {

  const counter = useSelector((state)=>{return state.counter})
  const show = useSelector((state)=>{return state.showCounter})
  const dispatch = useDispatch()

  function handleIncrement(){
    dispatch(counterActions.increment())
  }

  function handleDecrement(){
    dispatch(counterActions.decrement())
  }

  function handleIncrease(){
    dispatch(counterActions.increase(10))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrease}>Increase by 10</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
