import styled, { keyframes } from "styled-components";
import SingupImage from "../../assets/img/singup.svg";
const fadeIn = keyframes`
    from{
        opacity: 0;
        
    }
    to{
        opacity: 1;
        
    }
`;
const slideLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px)
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const BackgroundImage = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${SingupImage}) no-repeat center, var(--black);
    background-size: contain;
    animation: ${fadeIn} 1s;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideLeft} 1s;

  form {
    margin: 80px 0px;
    width: 300px;
    @media (min-width: 600px) {
      width: 340px;
    }
    text-align: center;
  }
  h1 {
    margin-bottom: 32px;
  }

  p {
    margin-top: 8px;
    a {
      font-weight: bold;
      color: var(--orange);
    }
  }
`;
