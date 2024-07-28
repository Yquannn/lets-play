import React, { useState } from 'react';
import Modal from '../shared/components/Modal';
import ContactUs from '../components/SendInvitation';

const AcceptPage = () => {
  const content = {
    gif: 'https://media.tenor.com/1ULtxe1Wv10AAAAi/smile-peach-cat.gif',
  };

  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (gameName) => {
    console.log(`Selected game: ${gameName}`);
    setSelectedGame(gameName);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  return (
    <>
      <div className="flex justify-center items-center h-fit px-4">
        <div>
          <img className="h-80 mx-auto" src={content.gif} alt="Cute cartoon" />
          <div>
            <p className="text-center m-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Yayyy!</p>
            <p className="text-center mt-4 sm:mt-6 md:mt-8 text-gray-500 text-lg sm:text-xl">What game do you want to play?</p>
            <p className="text-center sm:mt-6 md:mt-8 text-gray-400 text-lg sm:text-xl">Please select one</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 px-4">
        <div
          onClick={() => handleGameClick('Mobile Legend')}
          className="m-4 md:m-6 flex flex-col items-center cursor-pointer"
        >
          <img
            className="h-20 md:h-28 hover:bg-pink-700 p-4 rounded-2xl"
            src="https://img.icons8.com/?size=200&id=CC8sQycmKxuX&format=png"
            alt="Mobile Legend"
          />
          <p className="text-center mt-2">Mobile Legends</p>
        </div>
        <div
          onClick={() => handleGameClick('Pubg Mobile')}
          className="m-4 md:m-6 flex flex-col items-center cursor-pointer"
        >
          <img
            className="h-20 md:h-28 hover:bg-pink-700 p-4 rounded-2xl"
            src="https://img.icons8.com/?size=200&id=63638&format=png"
            alt="Pubg Mobile"
          />
          <p className="text-center mt-2">Pubg Mobile</p>
        </div>
        <div
          onClick={() => handleGameClick('Call of Duty Mobile')}
          className="m-4 md:m-6 flex flex-col items-center cursor-pointer"
        >
          <img
            className="h-20 md:h-28 hover:bg-pink-700 p-4 rounded-2xl"
            src="https://img.icons8.com/?size=200&id=iMmqE24XPs7V&format=png"
            alt="Call of Duty Mobile"
          />
          <p className="text-center mt-2">Call of Duty Mobile</p>
        </div>
        <div
          onClick={() => handleGameClick('Honor of Kings')}
          className="m-4 md:m-6 flex flex-col items-center cursor-pointer"
        >
          <img
            className="h-20 md:h-28 hover:bg-pink-700 p-4 rounded-2xl"
            src="https://www.iconbolt.com/iconsets/remix-icon-line/honor-of-kings.svg"
            alt="Honor of Kings"
          />
          <p className="text-center mt-2">Honor of Kings</p>
        </div>
        <div
          onClick={() => handleGameClick('Farlight 84')}
          className="m-4 md:m-6 flex flex-col items-center cursor-pointer"
        >
          <img
            className="h-20 md:h-28 hover:bg-pink-700 p-4 rounded-2xl"
            src="https://cdn2.steamgriddb.com/icon/3ef00cbe8a65af09beddab1c55e103fd/32/256x256.png"
            alt="Farlight 84"
          />
          <p className="text-center mt-2">Farlight 84</p>
        </div>
      </div>

      <Modal isOpen={!!selectedGame} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4 text-white">{selectedGame}</h2>
        <ContactUs gameName={selectedGame} />
      </Modal>
    </>
  );
};

export default AcceptPage;
