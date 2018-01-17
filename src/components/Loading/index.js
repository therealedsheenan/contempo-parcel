import React from 'react';

export default (props: { isLoading: boolean, timedOut: boolean, error: boolean }) => {
  if (props.isLoading) {
    // While our other component is loading...
    return props.timedOut ? <div>loader timed out!</div> : <div>loading...</div>;
  }
  if (props.error) {
    // If something went wrong
    return <div>Something went wrong...</div>;
  }
  return null;
};
