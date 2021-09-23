import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 38px;
`;
export const InputContainer = styled.form`
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;
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
  div {
    margin-top: 16px;
    margin-right: 32px;
  }
`;
export const Header = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0px;
  right: 0px;
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
