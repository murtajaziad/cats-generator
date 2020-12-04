import styled from "styled-components"

export default function Image({ url }) {
  return (
    <ImageComponent src={url} alt="Cat image" />
  )
}

const ImageComponent = styled.img`
  max-width: 50vw;
  max-height: 75vh;

  @media (max-width: 768px) {
    max-width: 75vw;
  }
`;