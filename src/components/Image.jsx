import styled from "styled-components"

export default function Image({ url }) {
  return (
    <ImageComponent src={url} alt="Cat image" />
  )
}

const ImageComponent = styled.img`
  max-width: 50vh;
`;