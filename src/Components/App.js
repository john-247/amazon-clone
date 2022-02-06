import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
