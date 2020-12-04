import styled from "styled-components"

export default function Button({ text, onClick = () => { }}) {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #02394A;
  color: #ffffff;
  outline: none;
  border: none;
  margin: 0.5rem;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 300ms;


  :hover {
    opacity: 0.7;
  }
`;