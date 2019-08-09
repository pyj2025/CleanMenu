import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./comp/navbar.component";
import OrdersList from "./comp/orders-list.component";
import EditOrder from "./comp/edit-order.component";
import CreateOrder from "./comp/create-order.component";
import CreateTable from "./comp/create-table.component";

function App() {
  return (
    <Router className="container-fluid">
      <Navbar />
      <br />
      <Route path="/" exact component={ OrdersList } />
      <Route path="/edit/:id" component={ EditOrder } />
      <Route path="/create" component={ CreateOrder } />
      <Route path="/table" component={ CreateTable } />
    </Router>
  );
}

export default App;