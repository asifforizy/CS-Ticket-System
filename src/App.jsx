import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Tickets from './Components/Customer tickets/Tickets';

const promiseData = fetch('data.json').then (res => res.json());

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero></Hero>
      <Tickets promiseData={promiseData}></Tickets>
    </div>
  );
};

export default App;