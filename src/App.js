import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import About from './pages/About';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
function App() { 
  return (
    <div className="App">
      <Helmet>
        <title>Faouzi's Google</title>
      </Helmet>
      <Router>

        <Switch>

          <Route path="/search">
            {/* search page */}
            <SearchPage/>
          </Route>
          <Route path="/about">
            
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>

      </Router>
      <Footer children="Custom Google version made By Faouzi Elbakri "/>
    </div>
  );
}

export default App;
