import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactUs = ({ gameName }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //including import meta env 
    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

    
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          console.log('SUCCESS!');
          alert('invitation sent')
          form.current.reset(); // Clear the form inputs
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('error sending')
        }
      );


  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="from_name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Game Name</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="game_name"
          value={gameName} // Set the game name from props
          readOnly // Make the input read-only
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="message"
        />
      </div>
      <div className="text-center">
        <input
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md cursor-pointer hover:bg-blue-600 transition"
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
};

export default ContactUs;
