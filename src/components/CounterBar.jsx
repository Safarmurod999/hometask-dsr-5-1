import { store } from "../reducer";
import { useStoreSubscription } from "../hooks/useStoreSubscription";
const CounterButtons = ({ name }) => {
    const { count, subscribed, toggleSubscribe } = useStoreSubscription(store);

    return (
        <div className='counter-bar'>
            <h2>{name}</h2>
            <p>Count: {count}</p>
            <button onClick={toggleSubscribe}>
                {subscribed ? 'Unsubscribe' : 'Subscribe'}
            </button>
            <p>Status: {subscribed ? 'Subscribed' : 'Unsubscribed'}</p>
        </div>
    );
}

export default CounterButtons