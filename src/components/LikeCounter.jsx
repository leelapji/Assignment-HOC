import React, { useState } from 'react';

const withLikeCounter = (WrappedComponent, counterName, handlerName) => {
  return function WithLikeCounter(props) {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
      setCounter(counter + 1);
    };

    const newProps = {
      [counterName]: counter,
      [handlerName]: handleCounter,
    };

    return <WrappedComponent {...props} {...newProps} />;
  };
};

export default withLikeCounter;
