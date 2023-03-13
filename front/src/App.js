import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home } from './components/home.js'
import { Detail } from './components/detail';
import { Cart } from './components/cart';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail/:id' component={Detail}/>
        <Route exact path='/cart' component={Cart}/>   
      </Switch>
    </BrowserRouter>
  );
};
export default App;


//   // -------------------------------------------------
//   // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
//   // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
//   // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
//   const [response, setResponse] = useState("");

//   // call server to see if its running
//   useEffect(() => {
//     const getApiResponse = () => {
//       fetch("http://localhost:5000/")
//         .then((res) => res.text())
//         .then((res) => setResponse(res));
//     };
//     getApiResponse();
//   }, []);
//   // -------------------------------------------------

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1> Prueba tecnica front Ecomsur 2021</h1>
//       <p>Borra esto y comienza aqui.</p>
//       {/* Check to see if express server is running correctly */}
//       <h5>{response}</h5>
//     </div>
//   );
// 
