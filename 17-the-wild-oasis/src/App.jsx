import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Heading from "./ui/Heading";

styled.h1``;

const App = () => {
  return (
    <>
      <Heading as="h1">ASD</Heading>
      <Heading as="h3">ASD</Heading>

      <GlobalStyles />
    </>
  );
};

export default App;
