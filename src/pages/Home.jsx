import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Image from "../components/Image";

export default function App() {
  let [imageURL, setImageURL] = useState(null);
  useEffect(getCatImage, [])

  function getCatImage() {
    setImageURL(null);
    axios.get("https://api.thecatapi.com/v1/images/search").then(({data}) => {
      setImageURL(data[0].url)
    })
  }

  return (
    <Container>
      <Navbar />
      <ImageContainer>
        {imageURL ? <Image url={imageURL} /> : <h2>Loading..</h2>}
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #000000;
  color: #ffffff;
  min-height: 100vh;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;