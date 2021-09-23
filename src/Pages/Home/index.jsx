import { useHistory } from "react-router";
import Button from "../../Components/Button";
import { Container, Content } from "./styles";
function Home() {
  const history = useHistory();
  const handleNavigtion = (path) => {
    return history.push(path);
  };
  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button onClick={() => handleNavigtion("/Singup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigtion("/Login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
}
export default Home;
