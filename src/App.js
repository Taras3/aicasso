import React from 'react';
import Banner from './components/Banner/Banner';
import Bannerbottom from './components/Bannerbottom/Bannerbottom';
import Block from './components/Block/Block';
import Footer from './components/Fotter/Footer';
import Galery from './components/Galery/Galery';
import Header from './components/Header/Header';
import Info from './components/Inform/Inform';
import Litlimg from './components/Litlimg/Litlimg';
import './App.css';

const App = (props) => {
  return (
    <div>
      <Header list={props.list}/>
      <Banner />
      <Bannerbottom />
      <Info />
      <Galery galeryInfo={props.galeryInfo}/>
      <Block />
      <Litlimg imgDataLeft={props.imgDataLeft} imgDataRight={props.imgDataRight}/>
      <Footer />

    </div>
  )
}

export default App;
