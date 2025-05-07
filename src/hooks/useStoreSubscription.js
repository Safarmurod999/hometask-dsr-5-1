import { useEffect, useState } from "react";

export const useStoreSubscription = (store) => {
  const [count, setCount] = useState(0);
  const [subscribed, setSubscribed] = useState(true);

  useEffect(() => {
    if (!subscribed) return;

    const unsubscribe = store.subscribe(() => {
      setCount(store.getState());
    });

    setCount(store.getState());

    return () => {
      unsubscribe();
    };
  }, [subscribed]);

  const toggleSubscribe = () => {
    setSubscribed((prev) => !prev);
  };

  return { count, subscribed, toggleSubscribe };
};
