import React from 'react';

export const ClickerApp = () => {
  const [timesClicked, setTimesClicked] = React.useState(0)

  const increment = function() {
    setTimesClicked(timesClicked + 1)
  }
  
  return (
    <div>
      <pre>
        you clicked {timesClicked} times
      </pre>
      <button onClick={increment}>Increment</button>
      <button>Decrement</button>
      <div>
        <small>decrement is not working, please make it work</small>
      </div>
    </div>
    
  );
}
