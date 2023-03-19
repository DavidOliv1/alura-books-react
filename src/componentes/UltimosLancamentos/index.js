import { livros } from "./dadosUltimosLancamentos.js";
import styled from "styled-components";
import { Titulo } from "../Titulo/index.js";
import CardRecomenda from "../CardRecomenda/index.js";
import livro2 from "../../imagens/livro2.png";

const UltimosLancamentosContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  background-color: #ebecee;
`;

const NovosLivrosContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 30px 0;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#eb9b00" tamanhoFonte="36px" alinhamento="center">
        Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="img"></img>
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Contruindo uma aplicação com a plataforma Google."
        img={livro2}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
