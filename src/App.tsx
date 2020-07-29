import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import InitialData from "../src/dados_iniciais.json";

function App() {
  return (
    <>
      <Header />

      <BannerMain
        videoTitle={InitialData.categorias[0].videos[0].titulo}
        url={InitialData.categorias[0].videos[0].url}
        videoDescription="O que é Front-End? Trabalhando na área"
      />
      {InitialData.categorias.map((category) => (
        <Carousel ignoreFirstVideo category={category} />
      ))}

      <GlobalStyle />
    </>
  );
}

export default App;
