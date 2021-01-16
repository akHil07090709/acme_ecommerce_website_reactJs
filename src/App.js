import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./commonStyles.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Donations from "./pages/Donations";
import Contact from "./pages/Contact";
import Alert from "./pages/Alert";
import Donate from "./product/donate";
import Category from "./pages/Category";
import Card from "./product/Card";
import OrderPlaced from "./pages/OrderPlaced";
import PageNotFound from "./pages/PageNotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="mainData">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/alert" component={Alert} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/donations" component={Donations} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/checkout" component={OrderPlaced} />
              <Route
                exact
                path="/category/gift-cards"
                render={(props) => <Category {...props} />}
              />
              <Route
                exact
                path="/category/tents"
                render={(props) => <Category {...props} />}
              />
              <Route
                exact
                path="/category/accessories"
                render={(props) => <Category {...props} />}
              />
              <Route
                exact
                path="/category/packs"
                render={(props) => <Category {...props} />}
              />
              <Route
                exact
                path="/product/gift-card"
                render={(props) => <Card {...props} />}
              />
              <Route
                exact
                path="/product/white-tent"
                render={(props) => <Card {...props} />}
              />
              <Route
                exact
                path="/product/tin-coffee-tumbler"
                render={(props) => <Card {...props} />}
              />
              <Route
                exact
                path="/product/blue-canvas-pack"
                render={(props) => <Card {...props} />}
              />
              <Route
                exact
                path="/product/green-canvas-pack"
                render={(props) => <Card {...props} />}
              />
              <Route
                exact
                path="/product/donate-100"
                render={(props) => <Donate {...props} />}
              />
              <Route
                exact
                path="/product/donate-50"
                render={(props) => <Donate {...props} />}
              />
              <Route
                exact
                path="/product/donate-25"
                render={(props) => <Donate {...props} />}
              />
              <Route
                exact
                path="/product/donate-15"
                render={(props) => <Donate {...props} />}
              />
              <Route
                exact
                path="/product/donate-5"
                render={(props) => <Donate {...props} />}
              />
              <Route component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
