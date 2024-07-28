import { useState } from 'react';
import DeclineBtn from "../components/DeclineBtn";
import AgreeBtn from "../components/AgreeBtn";
import DeclinePage from '../pages/Decline';
import AcceptPage from '../pages/Accept';

const Content = () => {
  const [response, setResponse] = useState(null); // Initially null, indicating no response yet

  const src = 'https://i.pinimg.com/originals/1e/31/32/1e31323bae63dd3b0224b75bac7d58a5.gif'

  const handleResponse = (response) => {
    console.log('Response:', response);
    setResponse(response);
  };

  if (response === false) {
    return <DeclinePage />; 
  }

  if (response === true) {
    return <AcceptPage />; // This renders an empty page if AcceptPage is empty
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <img className="h-80" src={src} alt="Cute cartoon" />
          <div className="text-center font-bold text-pretty text-4xl">
            <p>Can we play?</p>
          </div>
          <div className="flex justify-center m-8">
            <div className="m-4">
              <AgreeBtn onResponse={handleResponse} />
            </div>
            <div className="m-4">
              <DeclineBtn onResponse={handleResponse} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
