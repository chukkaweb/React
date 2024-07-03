function CountDisplay() {
    const countContextValue = React.useContext(CountContext);
    const [count, setCount] = countContextValue;
    return <div>{`The current count is ${count}`}</div>;
  }
  
export default CountDisplay;