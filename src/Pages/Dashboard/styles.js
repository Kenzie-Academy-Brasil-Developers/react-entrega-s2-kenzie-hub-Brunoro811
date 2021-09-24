import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 38px;
`;
export const InputContainer = styled.form`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-around;
  margin-top: 40px;
  @media (min-width: 800px) {
    display: block;
  }
  padding: 0 10px;
  @media (min-width: 800px) {
    padding: 0px 38px;
  }
  span {
    font-style: italic;
  }
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    > div {
      max-width: 100%;
      flex: 1;
      /* margin-right: 16px;   */
    }
    button {
      max-width: 260px;
      height: 60px;
      margin: 0;
    }
  }
`;
export const TaskContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  @media (min-width: 800px) {
    justify-content: flex-start;
  }

  /* div {
    margin-top: 16px;
    margin-right: 32px;
  } */
`;
export const Header = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0px;
  right: 0px;
  h1 {
    padding-right: 20px;
    span {
      color: var(--orange);
    }
  }
  button {
    margin-top: 0px;
    border-radius: 0px;
    height: 33px;
    width: 60px;
  }
  @media (min-width: 900px) {
    right: 80px;
  }
`;
export const Modal = styled.div`
  display: flex;
  justify-content: center;
  .Body-Black {
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    .Modal {
      position: absolute;
      top: 35px;
      right: 0;
      left: 0;
      width: 90%;
      height: 350px;
      margin: 0 auto;
      border-radius: 10px;
      border: 2px solid var(--black);
      background: var(--white);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      div {
        text-align: center;
        margin: 0 auto;
        p {
          font-family: "Roboto Mono", monospace;
        }
      }
      .close {
        color: var(--black);
        background: transparent;
        border: none;
        padding: 10px;
        svg {
          font-size: 30px;
        }
      }
    }
  }
`;
