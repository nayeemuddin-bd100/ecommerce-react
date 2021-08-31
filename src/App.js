import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home';

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
