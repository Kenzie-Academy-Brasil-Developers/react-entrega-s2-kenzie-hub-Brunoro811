import styled from "styled-components";
export const Container = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  width: 250px;
  height: 250px;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--black);
  color: var(--black);
  h4 {
    text-align: center;
  }
  hr {
    width: 100%;
    color: var(--orange);
    margin: 5px 0px;
  }
  button {
    margin-top: 80px;
    align-self: flex-end;
  }
  svg {
    font-size: 1.1rem;
    color: var(--orange);
    margin-right: 4px;
    transform: translateY(2px);
  }
`;
