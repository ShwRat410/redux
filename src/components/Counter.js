import classes from './Counter.module.css';
import {useDispatch,useSelector} from 'react-redux'

const Counter = () => {

  const counter = useSelector((state)=>{return state.counter})
  const show = useSelector((state)=>{return state.showCounter})
  const dispatch = useDispatch()

  function handleIncrement(){
    dispatch({type:"INCREMENT"})
  }

  function handleDecrement(){
    dispatch({type:"DECREMENT"})
  }

  function handleIncrease(){
    dispatch({type:"INCREASE", amount:10 })
  }

  const toggleCounterHandler = () => {
    dispatch({type:"TOGGLE"})
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
