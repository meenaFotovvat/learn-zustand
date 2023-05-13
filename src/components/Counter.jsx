import { useCombinedStore } from "../Store";

export const Counter = () => {
  const counterNumber = useCombinedStore(store => store.number)
  const increaseNumber = useCombinedStore(state => state.increaseCounterNumber)
  const decreaseNumber = useCombinedStore(state => state.decreaseCounterNumber)
  return (
    <div>
      <button onClick={increaseNumber}>+</button>
      {counterNumber}
      <button onClick={decreaseNumber}>-</button>
    </div>
  );
}
