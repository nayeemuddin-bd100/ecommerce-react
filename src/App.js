import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import NotFound from './components/NotFound/NotFound';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import WishList from './pages/WishList';

function App() {
    return (
        <Layout className="App">
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/product/:id" component={ProductDetails} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/wishlist" component={WishList} />
                <Route exact path="/" component={Home} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Layout>
    );
}

export default App;
