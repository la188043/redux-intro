import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../reducers/RootState';

import * as counterActions from '../actions/counter.actions';

const CounterConnect = ({ counter, increment, decrement }: ReduxProps) => {
  return (
    <>
      <h1>Counter with connect function: {counter}</h1>
      <div className="buttons">
        <button className="button" onClick={() => increment(10)}>
          +
        </button>
        <button className="button" onClick={() => decrement(10)}>
          -
        </button>
      </div>
    </>
  );
};

const mapStateToProps = ({ counter }: RootState) => ({
  counter: counter,
});

const mapDispatchToProps = {
  increment: counterActions.incrementCounter,
  decrement: counterActions.decrementCounter,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(CounterConnect);
