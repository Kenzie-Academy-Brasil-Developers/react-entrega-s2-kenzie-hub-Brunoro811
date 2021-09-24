import styled from "styled-components";
export const ContainerButton = styled.span`
  margin: 0;
  padding: 0;
  display: inline;
  margin-left: 10px;
  button {
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;
    transform: translateY(-8px);
  }
  .close {
    svg {
      color: var(--red);
    }
  }
`;
