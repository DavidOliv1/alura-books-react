import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  justify-content: space-around;
  padding: 25px 20px;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Botao = styled.button`
  color: #fff;
  background-color: #eb9b00;
  border: none;
  font-size: 16px;
  padding: 10px 0;
  width: 150px;
  font-weight: 900;
  display: block;
  :hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 300px;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const ImgLivro = styled.img`
  width: 150px;
`;

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
  return (
    <Card>
      <div>
        <Titulo cor="#eb9b00" alinhamento="left">
          {titulo}
        </Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} alt="img"></ImgLivro>
        <Botao>Saiba mais</Botao>
      </div>
    </Card>
  );
}

export default CardRecomenda;
