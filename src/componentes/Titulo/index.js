import styled from "styled-components";

export const Titulo = styled.h2`
  text-align: ${(props) => props.alinhamento || "center"};
  font-size: ${(props) => props.tamanhoFonte || "16px"};
  padding: 30px 0;
  text-transform: uppercase;
  margin: 10px 0px;
  width: 100%;
  color: ${(props) => props.cor || "#000"};
`;
