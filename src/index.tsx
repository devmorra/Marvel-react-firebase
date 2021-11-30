import React from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
// import App from './App';
import { Home, Profile, SignIn, NavBar, HeroForm } from "./components";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
import {FirebaseAppProvider, AuthCheck} from 'reactfire';
import 'firebase/auth';
import {firebaseConfig} from './firebaseConfig';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      {/* <Provider store={store}> */}
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home title={"Drones Inventory"} />
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path='/addHero'>
              <HeroForm />
            </Route>
          </Switch>
        </Router>
      {/* </Provider> */}
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
