import {Link, Routes, Route} from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <div>
      <h2>This is the Products component</h2>

      <nav>
        <Link to="1">Product #1 </Link>
        <Link to="2">Product #2 </Link>
        <Link to="/products/3">Product #3 </Link>
      </nav>

      <Routes>
        <Route path=":id" element={<Product />} />
        <Route path="" element={<h2>Please choose from the list above</h2>} />
      </Routes>
    </div>
  );
};

export default Products;
