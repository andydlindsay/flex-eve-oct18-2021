import {useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

const Product = () => {
  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // navigate('/about');
      navigate(-2);
    }, 2000);
  }, [navigate]);

  return (
    <div>
      <h2>This is Product #{params.id}</h2>
    </div>
  );
};

export default Product;
