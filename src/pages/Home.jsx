import styled from "styled-components"
import Navbar from "../components/Navbar"

export default function App() {
  return (
    <Container>
      <Navbar/>
    </Container>
  );
}

const Container = styled.div`
  background-color: #000000;
  color: #ffffff;
`;