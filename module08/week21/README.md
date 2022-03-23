# Module 8 Week 21 - Real World React

### To Do
- [x] React Router v6
- [x] Styled Components
- [x] `useContext`
- [x] `useRef`
- [x] Component Libraries

### React Router
* `<BrowserRouter>`: Main container that wraps all children involved in routing/rendering (often aliased as `Router`)
* `<Link>`: The component responsible for updating the current url
* `<Route>`: Url-matcher for conditionally rendering components based on the current url
* `<Routes>`: Wrapper for the `Route`'s which will only allow one route to match
* `<Navigate>`: Can be used to "redirect" a user

### Custom Hooks
* `useParams`: Allows us to access the dynamic parameters in the current url (similar to `req.params` in Express)
* `useNavigate`: Allows us to programmatically move the user to a different endpoint

### Styled Components
* Styled components allow us to embed our styles inside our JavaScript
* Uses the `styled-components` package
* Syntax is kinda weird...

```js
import styled from 'styled-components';

const Paragraph = styled.p`
  color: pink;
  font-size: 24px;
  text-decoration: underline;
`;

// inside component return
<Paragraph>I look soooo good!</Paragraph>
```

* Styled components can also accept props for conditional styling

```js
const Custom = styled.h2`
  background: ${ props => props.electric ? 'black' : 'white' };
  color: ${ props => props.electric ? 'yellow' : 'darkgrey' };

  text-decoration: underline;
`;

// inside component return
<Custom>Basic</Custom>
<Custom electric>I'm Electric!!!</Custom>
```

### `useContext`
* `useContext` can be used to share state without having to pass props from parent to child
* Any component that needs access to the shared state can simply import the context and pass it to `useContext`

```js
// in a separate file, create the context to be shared
const MessageContext = React.createContext();

// in the parent component, wrap all children in the context provider
return (
  <div>
    <MessageContext.Provider value={{ message: 'hello world' }}>
      <ChildOne />
      <ChildTwo />
    </MessageContext.Provider>
  </div>
);

// consume the context in another component through useContext
import MessageContext from './MessageContext');
const context = React.useContext(MessageContext);

// or with destructuring
const { message } = React.useContext(MessageContext);
```

### `useRef`
* Allows us to programmatically make reference to an element or value
* `useRef` returns the same object on every render so we have a consistent reference
* References are attached to elements using the `ref` attribute
* The `.current` property of a reference contains the DOM node or value the `ref` is attached to
* React updates this value every time the component is re-rendered

```jsx
// DOM node reference
const UseRef = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <label htmlFor="input-field">Input Field:</label>
      <input type="text" id="input-field" ref={inputRef} />

      <button type="button" onClick={handleClick}>Apply Focus</button>
    </div>
  );
};
```

```jsx
// current value reference
const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  countRef.current = count;

  const handleAlert = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 3000);
  };

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
        <button onClick={handleAlert}>Show Alert</button>
      </div>
    </div>
  );
};
```

### Component Libraries
* Why build it yourself if someone else already has??
* Component libraries give us easy access to ready-built components that we can plug into our application
* We can use as much or as little of the component library as we want
* Some examples are [Material-UI](https://material-ui.com/) and [Ant Design](https://ant.design/) 

### Useful Links
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Styled Components](https://styled-components.com/docs/basics)
* [Top React UI Frameworks (opinionated)](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/)
* [Tagged Template Literals](https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761)
