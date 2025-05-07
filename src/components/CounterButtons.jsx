import { decrement, increment, store } from '../reducer';
import { useStoreSubscription } from '../hooks/useStoreSubscription';

const CounterButtons = ({ name }) => {
    const { count, subscribed, toggleSubscribe } = useStoreSubscription(store);

    return (
        <div className='counter-buttons'>
            <h2>{name}</h2>
            <p>Count: {count}</p>
            <div className='counter-buttons__controls'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={toggleSubscribe}>
                    {subscribed ? 'Unsubscribe' : 'Subscribe'}
                </button>
            </div>
            <p>Status: {subscribed ? 'Subscribed' : 'Unsubscribed'}</p>
        </div>
    );
}

export default CounterButtons