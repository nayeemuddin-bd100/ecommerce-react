import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import NotFound from './components/NotFound/NotFound';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
    return (
        <Layout className="App">
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/shop">
                    <Shop />
                </Route>
                <Route exact path="/blog">
                    <Blog />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
