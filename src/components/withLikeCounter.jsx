import React, { useState } from 'react';

const withLikeCounter = (WrappedComponent, counterName) => {
  return function LikeCounterComponent(props) {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
      setCounter(counter + 1);
    };

    return (
      <WrappedComponent
        {...props}
        {...{ [counterName]: counter, [`handle${counterName.charAt(0).toUpperCase() + counterName.slice(1)}`]: handleCounter }}
      />
    );
  };
};

export default withLikeCounter;
