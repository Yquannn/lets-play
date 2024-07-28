
import { useState } from 'react';

const DeclineBtn = ({ onResponse }) => {
  const [response, setResponse] = useState(false);

  function handleClick() {
    console.log('no');
    setResponse(false);
    if (onResponse) {
      onResponse(false);
    }
  }

  return (
    <>
      <button className="pr-8 pl-8 p-3 bg-red-500 rounded-md" onClick={handleClick}>
        No
      </button>
    </>
  );
};

export default DeclineBtn;
