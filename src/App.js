import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Arrived from './components/Arrived';
import Asidemenu from './components/Asidemenu';
import Browse from './components/Browse';
import Client from './components/Client';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './pages/Profile'
import Detail from './pages/Detail'
function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(function(){
    (async function(){
      const response = await fetch('https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc', {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "x-api-key":"e12dae64-e563-4def-b98d-3779f81e31ee"
        }
      })
      const { nodes } = await response.json();
      setItems(nodes);
      console.log(  nodes)
    })();
  },[]);

  return (
   <>
    <Header/>
    <Hero/>
    <Browse/>
    <Arrived items={items}/> 
    <Client/> 
    <Asidemenu/>
    <Footer/>
   </>
  );
}

export default function Routes(){
  return(
    <Router>
      <Route path="/" exact component={App}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/details/:id" component={Detail}/>
    </Router>
  )
};
