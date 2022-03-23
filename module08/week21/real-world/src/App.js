import './App.css';
// import Main from './router/Main';
// import FancyLookingComponent from './styled/FancyLookingComponent';
// import Parent from './context/Parent';
// import Focus from './reference/Focus';
import StaleState from './reference/StaleState';

const App = () => {
  return (
    <div className="App">
      <h2>Real World React</h2>
      {/* <Main /> */}
      {/* <FancyLookingComponent /> */}
      {/* <Parent /> */}
      {/* <Focus /> */}
      <StaleState />
    </div>
  );
};

export default App;
