import styled from 'styled-components';
import MyComponent from './MyComponent';

const Wrapped = styled(MyComponent)`
  color: tomato;
  text-decoration: underline;
`;

const Header = styled.h1`
  color: blue;
  border: 2px solid lightgrey;
`;

const Paragraph = styled.p`
  text-decoration: underline;
  border: 1px dotted pink;
  border-radius: 15px;
`;

const Custom = styled.h2`
  color: ${ props => props.electric ? 'yellow' : 'darkgrey' };
  background-color: ${ props => props.electric ? 'firebrick' : 'turquoise' };
`;

const FancyLookingComponent = () => {
  return (
    <div>
      <h2>Fancy Component</h2>
      {/* <Header>Do I look good??</Header>
      <Paragraph>Not as good as I do!</Paragraph> */}

      {/* <Custom electric>I am fancy</Custom>
      <Custom>Not as fancy</Custom> */}

      <MyComponent />
      <Wrapped />
    </div>
  );
};

export default FancyLookingComponent;
