import styled from "styled-components"

export default function Navbar() {
  return (
    <Container>
      <span>
        🐱 Cats Generator 🐱
      </span>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;