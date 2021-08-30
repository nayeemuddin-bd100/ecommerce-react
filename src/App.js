import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <Layout className="App">
            <Switch>
                <Route path="/home">
                    <Home />
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
