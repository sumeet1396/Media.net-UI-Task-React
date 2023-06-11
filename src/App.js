import { Fragment } from 'react';
import Header from './Components/Header';
import CardsListing from './Components/CardsListing';
import OtherProductsListing from './Components/OtherProductsListing';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <CardsListing />
      <OtherProductsListing />
    </Fragment>
  );
}

export default App;
