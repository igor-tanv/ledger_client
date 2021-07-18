import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Ledger from "./pages/ledger";
import CreateNewLedger from "./pages/one-time-ledger/form"
import OneTimeLedgers from "./pages/one-time-ledger/index"

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Ledger />
        </Route>
        <Route exact path="/new/ledger">
          <CreateNewLedger />
        </Route>
        <Route exact path="/active/ledgers">
          <OneTimeLedgers />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}