import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import BoredApi from './ApiAssignment';
import Form from './Form';
import CardList from './CardList';
function App() {
  const [cards, setCards] = useState([])
  let addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div className='App'>
      <BoredApi></BoredApi>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App;
