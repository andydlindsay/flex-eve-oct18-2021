import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';

const Main = () => {
  return (
    <div>
      <h2>This is the Main component</h2>
      <Router>
        <nav>
          <Link to="/about">About</Link><br/>
          <Link to="/products">Products</Link><br/>
          <Link to="/">Home</Link><br/>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
