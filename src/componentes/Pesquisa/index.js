import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import livros from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 470px;
  overflow: auto;
`;

const Titulo = styled.h2`
  font-size: 36px;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  :hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livroPesquisado, setLivroPesquisado] = useState([]);
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        type="text"
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => {
          const resultadoPesquisa = livros.filter((livro) => {
            return livro.nome.includes(event.target.value);
          });
          setLivroPesquisado(resultadoPesquisa);
        }}
      ></Input>
      {livroPesquisado.map((livro) => (
        <Resultado>
          <img src={livro.src} alt="img"></img>
          <p>{livro.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
