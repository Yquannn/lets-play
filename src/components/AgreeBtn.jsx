import { useState } from 'react';

const AgreeBtn = ({ onResponse }) => {
  const [response, setResponse] = useState(false);

  function handleClick() {
    console.log('yes');
    setResponse(true);
    if (onResponse) {
      onResponse(true);
    }
  }

  return (
    <>
      <button className="pr-8 pl-8 p-3 bg-pink-500 rounded-md" onClick={handleClick}>
        Yes
      </button>
    </>
  );
};

export default AgreeBtn;
